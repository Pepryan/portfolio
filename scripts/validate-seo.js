#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

/**
 * SEO Validation Script for Next.js Portfolio
 * Validates meta tags, Open Graph, Twitter Cards, and structured data
 */

const BASE_URL = 'https://pepryan.github.io/portfolio';
const OUT_DIR = path.join(process.cwd(), 'out');

// Required meta tags for SEO
const REQUIRED_META_TAGS = [
  'title',
  'description',
  'og:title',
  'og:description', 
  'og:image',
  'og:url',
  'og:type',
  'twitter:card',
  'twitter:title',
  'twitter:description',
  'twitter:image'
];

// Image dimensions for social media
const SOCIAL_IMAGE_REQUIREMENTS = {
  'og:image': { minWidth: 1200, minHeight: 630 },
  'twitter:image': { minWidth: 1200, minHeight: 630 }
};

function validateMetaTags(dom, filePath) {
  const document = dom.window.document;
  const errors = [];
  const warnings = [];
  const info = [];

  // Check title
  const title = document.querySelector('title');
  if (!title || !title.textContent.trim()) {
    errors.push('Missing or empty <title> tag');
  } else if (title.textContent.length > 60) {
    warnings.push(`Title too long (${title.textContent.length} chars, recommended: <60)`);
  }

  // Check meta description
  const description = document.querySelector('meta[name="description"]');
  if (!description || !description.getAttribute('content')) {
    errors.push('Missing meta description');
  } else {
    const descLength = description.getAttribute('content').length;
    if (descLength > 160) {
      warnings.push(`Meta description too long (${descLength} chars, recommended: <160)`);
    }
  }

  // Check Open Graph tags
  const ogTags = {
    'og:title': document.querySelector('meta[property="og:title"]'),
    'og:description': document.querySelector('meta[property="og:description"]'),
    'og:image': document.querySelector('meta[property="og:image"]'),
    'og:url': document.querySelector('meta[property="og:url"]'),
    'og:type': document.querySelector('meta[property="og:type"]'),
    'og:site_name': document.querySelector('meta[property="og:site_name"]')
  };

  Object.entries(ogTags).forEach(([tag, element]) => {
    if (!element || !element.getAttribute('content')) {
      errors.push(`Missing ${tag} meta tag`);
    } else {
      const content = element.getAttribute('content');
      if (tag === 'og:image' && !content.startsWith('http')) {
        warnings.push(`${tag} should be absolute URL: ${content}`);
      }
      if (tag === 'og:url' && !content.startsWith(BASE_URL)) {
        warnings.push(`${tag} should match base URL: ${content}`);
      }
    }
  });

  // Check Twitter Card tags
  const twitterTags = {
    'twitter:card': document.querySelector('meta[name="twitter:card"]'),
    'twitter:title': document.querySelector('meta[name="twitter:title"]'),
    'twitter:description': document.querySelector('meta[name="twitter:description"]'),
    'twitter:image': document.querySelector('meta[name="twitter:image"]'),
    'twitter:creator': document.querySelector('meta[name="twitter:creator"]'),
    'twitter:site': document.querySelector('meta[name="twitter:site"]')
  };

  Object.entries(twitterTags).forEach(([tag, element]) => {
    if (!element || !element.getAttribute('content')) {
      if (['twitter:card', 'twitter:title', 'twitter:description', 'twitter:image'].includes(tag)) {
        errors.push(`Missing ${tag} meta tag`);
      }
    } else {
      const content = element.getAttribute('content');
      if (tag === 'twitter:image' && !content.startsWith('http')) {
        warnings.push(`${tag} should be absolute URL: ${content}`);
      }
    }
  });

  // Check canonical URL
  const canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    warnings.push('Missing canonical URL');
  } else {
    const href = canonical.getAttribute('href');
    if (!href.startsWith(BASE_URL)) {
      warnings.push(`Canonical URL should match base URL: ${href}`);
    }
  }

  // Check structured data
  const structuredData = document.querySelectorAll('script[type="application/ld+json"]');
  if (structuredData.length === 0) {
    warnings.push('No structured data (JSON-LD) found');
  } else {
    structuredData.forEach((script, index) => {
      try {
        JSON.parse(script.textContent);
        info.push(`Valid JSON-LD schema found (${index + 1})`);
      } catch (e) {
        errors.push(`Invalid JSON-LD schema (${index + 1}): ${e.message}`);
      }
    });
  }

  // Check robots meta
  const robots = document.querySelector('meta[name="robots"]');
  if (!robots) {
    warnings.push('Missing robots meta tag');
  }

  return { errors, warnings, info };
}

function validateFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const dom = new JSDOM(content);
    const relativePath = path.relative(OUT_DIR, filePath);
    
    console.log(`\n📄 Validating: ${relativePath}`);
    console.log('─'.repeat(50));
    
    const results = validateMetaTags(dom, filePath);
    
    if (results.errors.length > 0) {
      console.log('❌ ERRORS:');
      results.errors.forEach(error => console.log(`   • ${error}`));
    }
    
    if (results.warnings.length > 0) {
      console.log('⚠️  WARNINGS:');
      results.warnings.forEach(warning => console.log(`   • ${warning}`));
    }
    
    if (results.info.length > 0) {
      console.log('ℹ️  INFO:');
      results.info.forEach(info => console.log(`   • ${info}`));
    }
    
    if (results.errors.length === 0 && results.warnings.length === 0) {
      console.log('✅ All SEO checks passed!');
    }
    
    return results;
  } catch (error) {
    console.error(`Error validating ${filePath}:`, error.message);
    return { errors: [error.message], warnings: [], info: [] };
  }
}

function findHtmlFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        traverse(fullPath);
      } else if (item === 'index.html') {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

function main() {
  console.log('🔍 SEO Validation Report');
  console.log('='.repeat(50));
  
  if (!fs.existsSync(OUT_DIR)) {
    console.error('❌ Build output directory not found. Run "npm run build" first.');
    process.exit(1);
  }
  
  const htmlFiles = findHtmlFiles(OUT_DIR);
  
  if (htmlFiles.length === 0) {
    console.error('❌ No HTML files found in build output.');
    process.exit(1);
  }
  
  let totalErrors = 0;
  let totalWarnings = 0;
  
  // Validate key pages
  const keyPages = [
    'index.html', // Homepage
    'blog/index.html', // Blog listing
  ];
  
  // Find and validate blog posts
  const blogPosts = htmlFiles.filter(file => 
    file.includes('/blog/') && 
    !file.includes('/tags/') && 
    !file.includes('/archive/') &&
    file !== path.join(OUT_DIR, 'blog/index.html')
  ).slice(0, 3); // Validate first 3 blog posts
  
  const filesToValidate = [
    ...keyPages.map(page => path.join(OUT_DIR, page)).filter(fs.existsSync),
    ...blogPosts
  ];
  
  for (const file of filesToValidate) {
    const results = validateFile(file);
    totalErrors += results.errors.length;
    totalWarnings += results.warnings.length;
  }
  
  console.log('\n📊 SUMMARY');
  console.log('='.repeat(50));
  console.log(`Files validated: ${filesToValidate.length}`);
  console.log(`Total errors: ${totalErrors}`);
  console.log(`Total warnings: ${totalWarnings}`);
  
  if (totalErrors > 0) {
    console.log('\n❌ SEO validation failed. Please fix the errors above.');
    process.exit(1);
  } else if (totalWarnings > 0) {
    console.log('\n⚠️  SEO validation passed with warnings. Consider addressing them.');
  } else {
    console.log('\n✅ All SEO validations passed!');
  }
}

if (require.main === module) {
  main();
}

module.exports = { validateMetaTags, validateFile };
