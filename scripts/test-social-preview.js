#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

/**
 * Social Media Preview Testing Script
 * Tests how pages will appear when shared on social media platforms
 */

const BASE_URL = 'https://pepryan.github.io/portfolio';
const OUT_DIR = path.join(process.cwd(), 'out');

function extractSocialMetadata(dom) {
  const document = dom.window.document;
  
  // Extract basic metadata
  const title = document.querySelector('title')?.textContent || '';
  const description = document.querySelector('meta[name="description"]')?.getAttribute('content') || '';
  
  // Extract Open Graph metadata
  const ogTitle = document.querySelector('meta[property="og:title"]')?.getAttribute('content') || title;
  const ogDescription = document.querySelector('meta[property="og:description"]')?.getAttribute('content') || description;
  const ogImage = document.querySelector('meta[property="og:image"]')?.getAttribute('content') || '';
  const ogUrl = document.querySelector('meta[property="og:url"]')?.getAttribute('content') || '';
  const ogType = document.querySelector('meta[property="og:type"]')?.getAttribute('content') || 'website';
  const ogSiteName = document.querySelector('meta[property="og:site_name"]')?.getAttribute('content') || '';
  
  // Extract Twitter Card metadata
  const twitterCard = document.querySelector('meta[name="twitter:card"]')?.getAttribute('content') || '';
  const twitterTitle = document.querySelector('meta[name="twitter:title"]')?.getAttribute('content') || ogTitle;
  const twitterDescription = document.querySelector('meta[name="twitter:description"]')?.getAttribute('content') || ogDescription;
  const twitterImage = document.querySelector('meta[name="twitter:image"]')?.getAttribute('content') || ogImage;
  const twitterCreator = document.querySelector('meta[name="twitter:creator"]')?.getAttribute('content') || '';
  const twitterSite = document.querySelector('meta[name="twitter:site"]')?.getAttribute('content') || '';
  
  return {
    basic: { title, description },
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      image: ogImage,
      url: ogUrl,
      type: ogType,
      siteName: ogSiteName
    },
    twitter: {
      card: twitterCard,
      title: twitterTitle,
      description: twitterDescription,
      image: twitterImage,
      creator: twitterCreator,
      site: twitterSite
    }
  };
}

function displaySocialPreview(metadata, platform, filePath) {
  const relativePath = path.relative(OUT_DIR, filePath);
  
  console.log(`\n📱 ${platform.toUpperCase()} PREVIEW - ${relativePath}`);
  console.log('─'.repeat(60));
  
  if (platform === 'facebook' || platform === 'whatsapp') {
    console.log(`🏷️  Title: ${metadata.openGraph.title || 'No title'}`);
    console.log(`📝 Description: ${metadata.openGraph.description || 'No description'}`);
    console.log(`🖼️  Image: ${metadata.openGraph.image || 'No image'}`);
    console.log(`🔗 URL: ${metadata.openGraph.url || 'No URL'}`);
    console.log(`🏢 Site: ${metadata.openGraph.siteName || 'No site name'}`);
    
    // Validation
    const issues = [];
    if (!metadata.openGraph.title) issues.push('Missing og:title');
    if (!metadata.openGraph.description) issues.push('Missing og:description');
    if (!metadata.openGraph.image) issues.push('Missing og:image');
    if (!metadata.openGraph.url) issues.push('Missing og:url');
    if (metadata.openGraph.title && metadata.openGraph.title.length > 95) {
      issues.push(`Title too long (${metadata.openGraph.title.length} chars, recommended: <95)`);
    }
    if (metadata.openGraph.description && metadata.openGraph.description.length > 300) {
      issues.push(`Description too long (${metadata.openGraph.description.length} chars, recommended: <300)`);
    }
    
    if (issues.length > 0) {
      console.log('⚠️  Issues:');
      issues.forEach(issue => console.log(`   • ${issue}`));
    } else {
      console.log('✅ Preview looks good!');
    }
  }
  
  if (platform === 'twitter') {
    console.log(`🏷️  Title: ${metadata.twitter.title || 'No title'}`);
    console.log(`📝 Description: ${metadata.twitter.description || 'No description'}`);
    console.log(`🖼️  Image: ${metadata.twitter.image || 'No image'}`);
    console.log(`🎴 Card Type: ${metadata.twitter.card || 'No card type'}`);
    console.log(`👤 Creator: ${metadata.twitter.creator || 'No creator'}`);
    console.log(`🏢 Site: ${metadata.twitter.site || 'No site'}`);
    
    // Validation
    const issues = [];
    if (!metadata.twitter.title) issues.push('Missing twitter:title');
    if (!metadata.twitter.description) issues.push('Missing twitter:description');
    if (!metadata.twitter.image) issues.push('Missing twitter:image');
    if (!metadata.twitter.card) issues.push('Missing twitter:card');
    if (metadata.twitter.title && metadata.twitter.title.length > 70) {
      issues.push(`Title too long (${metadata.twitter.title.length} chars, recommended: <70)`);
    }
    if (metadata.twitter.description && metadata.twitter.description.length > 200) {
      issues.push(`Description too long (${metadata.twitter.description.length} chars, recommended: <200)`);
    }
    
    if (issues.length > 0) {
      console.log('⚠️  Issues:');
      issues.forEach(issue => console.log(`   • ${issue}`));
    } else {
      console.log('✅ Preview looks good!');
    }
  }
  
  if (platform === 'linkedin') {
    console.log(`🏷️  Title: ${metadata.openGraph.title || 'No title'}`);
    console.log(`📝 Description: ${metadata.openGraph.description || 'No description'}`);
    console.log(`🖼️  Image: ${metadata.openGraph.image || 'No image'}`);
    console.log(`🔗 URL: ${metadata.openGraph.url || 'No URL'}`);
    
    // LinkedIn uses Open Graph tags
    const issues = [];
    if (!metadata.openGraph.title) issues.push('Missing og:title');
    if (!metadata.openGraph.description) issues.push('Missing og:description');
    if (!metadata.openGraph.image) issues.push('Missing og:image');
    if (metadata.openGraph.title && metadata.openGraph.title.length > 120) {
      issues.push(`Title too long (${metadata.openGraph.title.length} chars, recommended: <120)`);
    }
    if (metadata.openGraph.description && metadata.openGraph.description.length > 300) {
      issues.push(`Description too long (${metadata.openGraph.description.length} chars, recommended: <300)`);
    }
    
    if (issues.length > 0) {
      console.log('⚠️  Issues:');
      issues.forEach(issue => console.log(`   • ${issue}`));
    } else {
      console.log('✅ Preview looks good!');
    }
  }
}

function testSocialPreviews(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const dom = new JSDOM(content);
    const metadata = extractSocialMetadata(dom);
    
    // Test previews for different platforms
    displaySocialPreview(metadata, 'facebook', filePath);
    displaySocialPreview(metadata, 'whatsapp', filePath);
    displaySocialPreview(metadata, 'twitter', filePath);
    displaySocialPreview(metadata, 'linkedin', filePath);
    
    return metadata;
  } catch (error) {
    console.error(`Error testing ${filePath}:`, error.message);
    return null;
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
  console.log('📱 Social Media Preview Testing');
  console.log('='.repeat(60));
  
  if (!fs.existsSync(OUT_DIR)) {
    console.error('❌ Build output directory not found. Run "npm run build" first.');
    process.exit(1);
  }
  
  const htmlFiles = findHtmlFiles(OUT_DIR);
  
  if (htmlFiles.length === 0) {
    console.error('❌ No HTML files found in build output.');
    process.exit(1);
  }
  
  // Test key pages
  const keyPages = [
    path.join(OUT_DIR, 'index.html'), // Homepage
    path.join(OUT_DIR, 'blog/index.html'), // Blog listing
  ];
  
  // Find and test a blog post
  const blogPost = htmlFiles.find(file => 
    file.includes('/blog/') && 
    !file.includes('/tags/') && 
    !file.includes('/archive/') &&
    file !== path.join(OUT_DIR, 'blog/index.html')
  );
  
  if (blogPost) {
    keyPages.push(blogPost);
  }
  
  const filesToTest = keyPages.filter(fs.existsSync);
  
  for (const file of filesToTest) {
    testSocialPreviews(file);
  }
  
  console.log('\n📊 TESTING COMPLETE');
  console.log('='.repeat(60));
  console.log(`Files tested: ${filesToTest.length}`);
  console.log('\n💡 Tips for better social media previews:');
  console.log('• Use high-quality images (1200x630px for best results)');
  console.log('• Keep titles under 95 characters for Facebook/WhatsApp');
  console.log('• Keep titles under 70 characters for Twitter');
  console.log('• Keep descriptions under 300 characters for Facebook/LinkedIn');
  console.log('• Keep descriptions under 200 characters for Twitter');
  console.log('• Always use absolute URLs for images');
  console.log('• Test your URLs with platform-specific tools:');
  console.log('  - Facebook: https://developers.facebook.com/tools/debug/');
  console.log('  - Twitter: https://cards-dev.twitter.com/validator');
  console.log('  - LinkedIn: https://www.linkedin.com/post-inspector/');
}

if (require.main === module) {
  main();
}

module.exports = { extractSocialMetadata, testSocialPreviews };
