#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const chalk = require('chalk');

const POSTS_DIR = path.join(process.cwd(), 'content/posts');
const REQUIRED_FIELDS = [
  'title',
  'date',
  'tags',
  'summary', // Use summary instead of excerpt for consistency
  'author',
  'category'
];

const RECOMMENDED_FIELDS = [
  'thumbnail',
  'keywords',
  'readingTime',
  'difficulty',
  'openGraph',
  'twitter',
  'schema'
];

function validatePost(filePath) {
  const fileName = path.basename(filePath, '.mdx');
  
  // Skip template and draft files
  if (fileName.startsWith('_') || fileName.startsWith('.') || frontmatter.draft) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data: frontmatter } = matter(fileContent);
  
  const issues = [];
  const warnings = [];
  
  // Check required fields
  REQUIRED_FIELDS.forEach(field => {
    if (!frontmatter[field]) {
      issues.push(`Missing required field: ${field}`);
    }
  });
  
  // Check for deprecated excerpt field (should use summary instead)
  if (frontmatter.excerpt && !frontmatter.summary) {
    warnings.push('Using deprecated "excerpt" field. Please use "summary" instead for consistency.');
  }

  // Validate author information
  if (frontmatter.author && frontmatter.author !== 'Febryan Ramadhan') {
    warnings.push(`Author should be "Febryan Ramadhan", found: "${frontmatter.author}"`);
  }
  
  // Check recommended fields
  RECOMMENDED_FIELDS.forEach(field => {
    if (!frontmatter[field]) {
      warnings.push(`Missing recommended field: ${field}`);
    }
  });
  
  // Validate specific fields
  if (frontmatter.title) {
    if (frontmatter.title.length > 60) {
      warnings.push(`Title too long (${frontmatter.title.length} chars, max 60)`);
    }
    if (frontmatter.title.length < 10) {
      warnings.push(`Title too short (${frontmatter.title.length} chars, min 10)`);
    }
  }
  
  if (frontmatter.summary) {
    if (frontmatter.summary.length > 160) {
      warnings.push(`Summary too long (${frontmatter.summary.length} chars, max 160)`);
    }
    if (frontmatter.summary.length < 120) {
      warnings.push(`Summary too short (${frontmatter.summary.length} chars, min 120)`);
    }
  }
  
  if (frontmatter.tags) {
    if (frontmatter.tags.length < 3) {
      warnings.push(`Too few tags (${frontmatter.tags.length}, recommended 3-8)`);
    }
    if (frontmatter.tags.length > 8) {
      warnings.push(`Too many tags (${frontmatter.tags.length}, recommended 3-8)`);
    }
  }
  
  // Validate Open Graph
  if (frontmatter.openGraph) {
    const og = frontmatter.openGraph;
    if (!og.title) warnings.push('Missing openGraph.title');
    if (!og.description) warnings.push('Missing openGraph.description');
    if (!og.image) warnings.push('Missing openGraph.image');
    if (!og.url) warnings.push('Missing openGraph.url');
  }
  
  // Validate Twitter
  if (frontmatter.twitter) {
    const tw = frontmatter.twitter;
    if (!tw.title) warnings.push('Missing twitter.title');
    if (!tw.description) warnings.push('Missing twitter.description');
    if (!tw.image) warnings.push('Missing twitter.image');
    if (tw.description && tw.description.length > 200) {
      warnings.push(`Twitter description too long (${tw.description.length} chars, max 200)`);
    }
  }
  
  // Validate Schema
  if (frontmatter.schema) {
    const schema = frontmatter.schema;
    if (!schema.type) warnings.push('Missing schema.type');
    if (!schema.headline) warnings.push('Missing schema.headline');
    if (!schema.description) warnings.push('Missing schema.description');
  }
  
  return {
    fileName,
    issues,
    warnings,
    frontmatter
  };
}

function main() {
  console.log(chalk.blue.bold('🔍 SEO Metadata Validation\n'));
  
  const files = fs.readdirSync(POSTS_DIR)
    .filter(file => file.endsWith('.mdx'))
    .map(file => path.join(POSTS_DIR, file));
  
  let totalIssues = 0;
  let totalWarnings = 0;
  
  files.forEach(filePath => {
    const result = validatePost(filePath);
    
    if (!result) return;
    
    const { fileName, issues, warnings } = result;
    
    console.log(chalk.cyan.bold(`📄 ${fileName}`));
    
    if (issues.length === 0 && warnings.length === 0) {
      console.log(chalk.green('  ✅ All checks passed!'));
    } else {
      if (issues.length > 0) {
        console.log(chalk.red.bold('  ❌ Issues:'));
        issues.forEach(issue => {
          console.log(chalk.red(`    • ${issue}`));
        });
        totalIssues += issues.length;
      }
      
      if (warnings.length > 0) {
        console.log(chalk.yellow.bold('  ⚠️  Warnings:'));
        warnings.forEach(warning => {
          console.log(chalk.yellow(`    • ${warning}`));
        });
        totalWarnings += warnings.length;
      }
    }
    
    console.log('');
  });
  
  // Summary
  console.log(chalk.blue.bold('📊 Summary:'));
  console.log(`  Files checked: ${files.length}`);
  console.log(`  Total issues: ${chalk.red.bold(totalIssues)}`);
  console.log(`  Total warnings: ${chalk.yellow.bold(totalWarnings)}`);
  
  if (totalIssues === 0 && totalWarnings === 0) {
    console.log(chalk.green.bold('\n🎉 All posts have optimal SEO metadata!'));
  } else if (totalIssues === 0) {
    console.log(chalk.yellow.bold('\n✨ No critical issues found, but consider addressing warnings for better SEO.'));
  } else {
    console.log(chalk.red.bold('\n🚨 Please fix the issues above for optimal SEO performance.'));
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { validatePost };