#!/usr/bin/env node

/**
 * Analytics Testing Script
 * 
 * This script helps test and validate Google Analytics 4 implementation
 * Run with: node scripts/test-analytics.js
 */

const fs = require('fs');
const path = require('path');

// Colors for console output
const colors = {
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  reset: '\x1b[0m',
  bold: '\x1b[1m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function checkFile(filePath, description) {
  const fullPath = path.join(process.cwd(), filePath);
  if (fs.existsSync(fullPath)) {
    log(`✅ ${description}`, 'green');
    return true;
  } else {
    log(`❌ ${description}`, 'red');
    return false;
  }
}

function checkFileContent(filePath, searchString, description) {
  const fullPath = path.join(process.cwd(), filePath);
  if (fs.existsSync(fullPath)) {
    const content = fs.readFileSync(fullPath, 'utf8');
    if (content.includes(searchString)) {
      log(`✅ ${description}`, 'green');
      return true;
    } else {
      log(`❌ ${description}`, 'red');
      return false;
    }
  } else {
    log(`❌ File not found: ${filePath}`, 'red');
    return false;
  }
}

function checkEnvironmentVariable() {
  const envPath = path.join(process.cwd(), '.env.local');
  if (fs.existsSync(envPath)) {
    const content = fs.readFileSync(envPath, 'utf8');
    if (content.includes('NEXT_PUBLIC_GA_MEASUREMENT_ID=G-')) {
      log('✅ GA4 Measurement ID configured in .env.local', 'green');
      return true;
    } else if (content.includes('NEXT_PUBLIC_GA_MEASUREMENT_ID=')) {
      log('⚠️  GA4 Measurement ID found but may not be valid format', 'yellow');
      log('   Expected format: G-XXXXXXXXXX', 'yellow');
      return false;
    } else {
      log('❌ GA4 Measurement ID not found in .env.local', 'red');
      return false;
    }
  } else {
    log('❌ .env.local file not found', 'red');
    log('   Create .env.local from .env.local.example', 'yellow');
    return false;
  }
}

function main() {
  log('🔍 Google Analytics 4 Implementation Test', 'bold');
  log('==========================================\n', 'bold');

  let allChecks = true;

  // Check core files
  log('📁 Core Files:', 'blue');
  allChecks &= checkFile('app/components/GoogleAnalytics.js', 'GoogleAnalytics component exists');
  allChecks &= checkFile('.env.local.example', 'Environment variable example exists');
  
  // Check integration
  log('\n🔗 Integration:', 'blue');
  allChecks &= checkFileContent('app/layout.js', 'GoogleAnalytics', 'GoogleAnalytics imported in layout');
  allChecks &= checkFileContent('app/layout.js', '<GoogleAnalytics />', 'GoogleAnalytics component used in layout');
  
  // Check tracking implementation
  log('\n📊 Event Tracking:', 'blue');
  allChecks &= checkFileContent('app/blog/[slug]/BlogPostClient.js', 'useAnalytics', 'Blog post tracking implemented');
  allChecks &= checkFileContent('app/components/ShareButtons.js', 'trackSocialClick', 'Social media tracking implemented');
  allChecks &= checkFileContent('app/components/ProjectsGrid.js', 'trackProjectView', 'Project tracking implemented');
  
  // Check environment configuration
  log('\n⚙️  Configuration:', 'blue');
  allChecks &= checkEnvironmentVariable();
  
  // Summary
  log('\n📋 Summary:', 'bold');
  if (allChecks) {
    log('🎉 All checks passed! Analytics implementation looks good.', 'green');
    log('\n📝 Next steps:', 'blue');
    log('1. Deploy your site: npm run deploy', 'reset');
    log('2. Visit your live site and interact with content', 'reset');
    log('3. Check Google Analytics Real-time reports', 'reset');
    log('4. Wait 24-48 hours for full data to appear', 'reset');
  } else {
    log('⚠️  Some checks failed. Please review the issues above.', 'yellow');
    log('\n🔧 Common fixes:', 'blue');
    log('1. Ensure all files are properly created', 'reset');
    log('2. Set up .env.local with your GA4 Measurement ID', 'reset');
    log('3. Check import statements and component usage', 'reset');
    log('4. Refer to docs/ANALYTICS_IMPLEMENTATION_GUIDE.md', 'reset');
  }

  log('\n📚 Documentation:', 'blue');
  log('- Implementation guide: docs/ANALYTICS_IMPLEMENTATION_GUIDE.md', 'reset');
  log('- Google Analytics: https://analytics.google.com/', 'reset');
  
  process.exit(allChecks ? 0 : 1);
}

if (require.main === module) {
  main();
}

module.exports = { checkFile, checkFileContent, checkEnvironmentVariable };
