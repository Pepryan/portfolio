#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

// Import getPosts function
function getPosts() {
  const postsDirectory = path.join(process.cwd(), 'content/posts');
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames
    .filter(name => name.endsWith('.mdx'))
    .map(name => {
      const filePath = path.join(postsDirectory, name);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const matter = require('gray-matter');
      const { data, content } = matter(fileContents);

      return {
        ...data,
        content,
        slug: name.replace(/\.mdx$/, '')
      };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  return posts;
}

/**
 * Post-build script to inject proper meta tags into static HTML files
 * This ensures social media crawlers can read the meta tags
 */

const BASE_URL = 'https://pepryan.github.io/portfolio';
const OUT_DIR = path.join(process.cwd(), 'out');

function createMetaTags(metadata) {
  const tags = [];
  
  // Basic meta tags
  if (metadata.title) {
    tags.push(`<title>${escapeHtml(metadata.title)}</title>`);
  }
  if (metadata.description) {
    tags.push(`<meta name="description" content="${escapeHtml(metadata.description)}" />`);
  }
  if (metadata.keywords && metadata.keywords.length > 0) {
    const keywordsStr = Array.isArray(metadata.keywords) ? metadata.keywords.join(', ') : metadata.keywords;
    tags.push(`<meta name="keywords" content="${escapeHtml(keywordsStr)}" />`);
  }
  if (metadata.author) {
    tags.push(`<meta name="author" content="${escapeHtml(metadata.author)}" />`);
  }
  if (metadata.creator) {
    tags.push(`<meta name="creator" content="${escapeHtml(metadata.creator)}" />`);
  }
  if (metadata.publisher) {
    tags.push(`<meta name="publisher" content="${escapeHtml(metadata.publisher)}" />`);
  }
  
  // Robots
  const robotsIndex = metadata.robots?.index !== false;
  const robotsFollow = metadata.robots?.follow !== false;
  const robotsContent = `${robotsIndex ? 'index' : 'noindex'}, ${robotsFollow ? 'follow' : 'nofollow'}`;
  tags.push(`<meta name="robots" content="${robotsContent}" />`);
  
  // Canonical URL
  if (metadata.canonical) {
    tags.push(`<link rel="canonical" href="${escapeHtml(metadata.canonical)}" />`);
  }
  
  // Open Graph tags
  if (metadata.openGraph) {
    const og = metadata.openGraph;
    if (og.title) tags.push(`<meta property="og:title" content="${escapeHtml(og.title)}" />`);
    if (og.description) tags.push(`<meta property="og:description" content="${escapeHtml(og.description)}" />`);
    if (og.image) tags.push(`<meta property="og:image" content="${escapeHtml(og.image)}" />`);
    if (og.url) tags.push(`<meta property="og:url" content="${escapeHtml(og.url)}" />`);
    if (og.type) tags.push(`<meta property="og:type" content="${escapeHtml(og.type)}" />`);
    if (og.siteName) tags.push(`<meta property="og:site_name" content="${escapeHtml(og.siteName)}" />`);
    if (og.locale) tags.push(`<meta property="og:locale" content="${escapeHtml(og.locale)}" />`);
    
    // Image details
    tags.push(`<meta property="og:image:width" content="1200" />`);
    tags.push(`<meta property="og:image:height" content="630" />`);
    tags.push(`<meta property="og:image:type" content="image/png" />`);
    if (og.title) tags.push(`<meta property="og:image:alt" content="${escapeHtml(og.title)}" />`);
    
    // Article specific
    if (og.type === 'article') {
      if (og.publishedTime) tags.push(`<meta property="article:published_time" content="${escapeHtml(og.publishedTime)}" />`);
      if (og.modifiedTime) tags.push(`<meta property="article:modified_time" content="${escapeHtml(og.modifiedTime)}" />`);
      if (og.authors && og.authors.length > 0) {
        og.authors.forEach(author => {
          tags.push(`<meta property="article:author" content="${escapeHtml(author)}" />`);
        });
      }
      if (og.tags && og.tags.length > 0) {
        og.tags.forEach(tag => {
          tags.push(`<meta property="article:tag" content="${escapeHtml(tag)}" />`);
        });
      }
      if (og.section) tags.push(`<meta property="article:section" content="${escapeHtml(og.section)}" />`);
    }
  }
  
  // Twitter Card tags
  if (metadata.twitter) {
    const tw = metadata.twitter;
    if (tw.card) tags.push(`<meta name="twitter:card" content="${escapeHtml(tw.card)}" />`);
    if (tw.title) tags.push(`<meta name="twitter:title" content="${escapeHtml(tw.title)}" />`);
    if (tw.description) tags.push(`<meta name="twitter:description" content="${escapeHtml(tw.description)}" />`);
    if (tw.image) tags.push(`<meta name="twitter:image" content="${escapeHtml(tw.image)}" />`);
    if (tw.creator) tags.push(`<meta name="twitter:creator" content="${escapeHtml(tw.creator)}" />`);
    if (tw.site) tags.push(`<meta name="twitter:site" content="${escapeHtml(tw.site)}" />`);
    tags.push(`<meta name="twitter:domain" content="pepryan.github.io" />`);
    if (metadata.openGraph?.url) tags.push(`<meta name="twitter:url" content="${escapeHtml(metadata.openGraph.url)}" />`);
  }
  
  // Additional meta tags
  if (metadata.other) {
    Object.entries(metadata.other).forEach(([key, value]) => {
      if (key !== 'application/ld+json' && value) {
        tags.push(`<meta name="${escapeHtml(key)}" content="${escapeHtml(value)}" />`);
      }
    });
  }
  
  // Google Bot specific
  tags.push(`<meta name="googlebot" content="${robotsContent}, max-video-preview:-1, max-image-preview:large, max-snippet:-1" />`);
  
  // Structured data
  if (metadata.structuredData) {
    tags.push(`<script type="application/ld+json">${JSON.stringify(metadata.structuredData)}</script>`);
  }
  
  return tags.join('\n    ');
}

function escapeHtml(text) {
  if (typeof text !== 'string') return text;
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function getBlogPostMetadata(post) {
  const {
    title,
    summary,
    excerpt,
    description,
    thumbnail,
    author = 'Febryan Ramadhan',
    date,
    updated,
    tags = [],
    keywords = [],
    category,
    difficulty,
    slug
  } = post;
  
  const postUrl = `${BASE_URL}/blog/${slug}`;
  const metaDescription = summary || excerpt || description || `Read ${title} by ${author}`;
  const metaKeywords = [...new Set([...keywords, ...tags, 'blog', 'tutorial', 'programming'])];
  const metaImage = thumbnail 
    ? (thumbnail.startsWith('http') ? thumbnail : `${BASE_URL}${thumbnail.replace('/portfolio', '')}`)
    : `${BASE_URL}/images/default-og-image.png`;
  
  return {
    title,
    description: metaDescription,
    keywords: metaKeywords,
    author,
    creator: author,
    publisher: 'Febryan Portfolio',
    canonical: postUrl,
    openGraph: {
      title,
      description: metaDescription,
      image: metaImage,
      url: postUrl,
      type: 'article',
      siteName: 'Febryan Portfolio',
      locale: 'id_ID',
      publishedTime: date,
      modifiedTime: updated || date,
      authors: [author],
      tags: tags,
      section: category || 'Technology'
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: metaDescription,
      image: metaImage,
      creator: '@pepryan',
      site: '@pepryan'
    },
    other: {
      'twitter:domain': 'pepryan.github.io',
      'twitter:url': postUrl,
      'article:author': author,
      'article:published_time': date,
      'article:modified_time': updated || date,
      'article:section': category || 'Technology',
      'article:tag': tags.join(', '),
      'difficulty': difficulty,
      'reading-time': `${Math.ceil((post.content?.split(' ').length || 0) / 200)} minutes`
    },
    robots: {
      index: !post.draft,
      follow: !post.draft
    },
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: title,
      description: metaDescription,
      image: {
        '@type': 'ImageObject',
        url: metaImage,
        width: 1200,
        height: 630
      },
      author: {
        '@type': 'Person',
        name: author,
        url: BASE_URL,
        sameAs: [
          'https://twitter.com/pepryan',
          'https://instagram.com/nayrbef',
          'https://linkedin.com/in/febryanramadhan'
        ]
      },
      publisher: {
        '@type': 'Organization',
        name: 'Febryan Portfolio',
        url: BASE_URL,
        logo: {
          '@type': 'ImageObject',
          url: `${BASE_URL}/favicon.ico`
        }
      },
      datePublished: date,
      dateModified: updated || date,
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': postUrl
      },
      url: postUrl,
      keywords: tags.join(', '),
      articleSection: category || 'Technology',
      inLanguage: 'id-ID',
      isAccessibleForFree: true
    }
  };
}

function injectMetaTags(filePath, metadata) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove existing meta tags that we want to replace
    content = content.replace(/<title>.*?<\/title>/g, '');
    content = content.replace(/<meta\s+name="description"[^>]*>/g, '');
    content = content.replace(/<meta\s+name="keywords"[^>]*>/g, '');
    content = content.replace(/<meta\s+property="og:[^"]*"[^>]*>/g, '');
    content = content.replace(/<meta\s+name="twitter:[^"]*"[^>]*>/g, '');
    content = content.replace(/<link\s+rel="canonical"[^>]*>/g, '');
    content = content.replace(/<script\s+type="application\/ld\+json"[^>]*>.*?<\/script>/gs, '');
    
    // Inject new meta tags
    const metaTags = createMetaTags(metadata);
    content = content.replace(
      /<meta name="viewport"[^>]*>/,
      `<meta name="viewport" content="width=device-width, initial-scale=1" />\n    ${metaTags}`
    );
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Injected meta tags into ${path.relative(OUT_DIR, filePath)}`);
  } catch (error) {
    console.error(`❌ Error injecting meta tags into ${filePath}:`, error.message);
  }
}

function main() {
  console.log('🔧 Injecting SEO meta tags into static HTML files...');
  console.log('='.repeat(60));
  
  if (!fs.existsSync(OUT_DIR)) {
    console.error('❌ Build output directory not found. Run "npm run build" first.');
    process.exit(1);
  }
  
  try {
    // Get all posts for blog metadata
    const posts = getPosts();
    
    // Process blog posts
    posts.forEach(post => {
      const postPath = path.join(OUT_DIR, 'blog', post.slug, 'index.html');
      if (fs.existsSync(postPath)) {
        const metadata = getBlogPostMetadata(post);
        injectMetaTags(postPath, metadata);
      }
    });
    
    console.log('\n✅ Meta tag injection completed!');
    console.log('📱 Social media previews should now work correctly.');
  } catch (error) {
    console.error('❌ Error during meta tag injection:', error.message);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { injectMetaTags, getBlogPostMetadata, createMetaTags };
