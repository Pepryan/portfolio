'use client';

import { useMemo } from 'react';

/**
 * Hook to convert Next.js metadata format to CustomHead props
 * This ensures compatibility between the metadata API and static HTML rendering
 */
export function useMetadata(metadata = {}) {
  return useMemo(() => {
    const baseUrl = 'https://pepryan.github.io/portfolio';
    
    // Extract basic metadata
    const title = typeof metadata.title === 'string' 
      ? metadata.title 
      : metadata.title?.default || metadata.title?.template?.replace('%s | ', '') || '';
    
    const description = metadata.description || '';
    const keywords = metadata.keywords || [];
    const author = metadata.authors?.[0]?.name || metadata.creator || 'Febryan Ramadhan';
    const creator = metadata.creator || 'Febryan Ramadhan';
    const publisher = metadata.publisher || 'Febryan Portfolio';
    
    // Extract canonical URL
    const canonical = metadata.alternates?.canonical || 
                     metadata.metadataBase?.href || 
                     baseUrl;
    
    // Extract Open Graph metadata
    const openGraph = {
      title: metadata.openGraph?.title || title,
      description: metadata.openGraph?.description || description,
      image: metadata.openGraph?.images?.[0]?.url || 
             metadata.openGraph?.images?.[0] || 
             `${baseUrl}/images/default-og-image.png`,
      url: metadata.openGraph?.url || canonical,
      type: metadata.openGraph?.type || 'website',
      siteName: metadata.openGraph?.siteName || 'Febryan Portfolio',
      locale: metadata.openGraph?.locale || 'id_ID',
      publishedTime: metadata.openGraph?.publishedTime,
      modifiedTime: metadata.openGraph?.modifiedTime,
      authors: metadata.openGraph?.authors || [],
      tags: metadata.openGraph?.tags || [],
      section: metadata.openGraph?.section
    };
    
    // Extract Twitter metadata
    const twitter = {
      card: metadata.twitter?.card || 'summary_large_image',
      title: metadata.twitter?.title || openGraph.title,
      description: metadata.twitter?.description || openGraph.description,
      image: metadata.twitter?.images?.[0] || 
             metadata.twitter?.image || 
             openGraph.image,
      creator: metadata.twitter?.creator || '@pepryan',
      site: metadata.twitter?.site || '@pepryan'
    };
    
    // Extract robots metadata
    const robots = {
      index: metadata.robots?.index !== false,
      follow: metadata.robots?.follow !== false,
      googleBot: metadata.robots?.googleBot
    };
    
    // Extract other metadata
    const other = metadata.other || {};
    
    // Extract structured data
    let structuredData = null;
    if (other['application/ld+json']) {
      try {
        structuredData = typeof other['application/ld+json'] === 'string' 
          ? JSON.parse(other['application/ld+json'])
          : other['application/ld+json'];
      } catch (e) {
        console.warn('Invalid structured data:', e);
      }
    }
    
    return {
      title,
      description,
      keywords,
      author,
      creator,
      publisher,
      canonical,
      openGraph,
      twitter,
      other,
      robots,
      structuredData
    };
  }, [metadata]);
}

/**
 * Hook to create metadata for blog posts
 */
export function useBlogPostMetadata(post, baseUrl = 'https://pepryan.github.io/portfolio') {
  return useMemo(() => {
    if (!post) return {};
    
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
    
    const postUrl = `${baseUrl}/blog/${slug}`;
    const metaDescription = summary || excerpt || description || `Read ${title} by ${author}`;
    const metaKeywords = [...new Set([...keywords, ...tags, 'blog', 'tutorial', 'programming'])];
    const metaImage = thumbnail 
      ? (thumbnail.startsWith('http') ? thumbnail : `${baseUrl}${thumbnail.replace('/portfolio', '')}`)
      : `${baseUrl}/images/default-og-image.png`;
    
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
      structuredData: createBlogPostStructuredData(post, baseUrl)
    };
  }, [post, baseUrl]);
}

/**
 * Create structured data for blog posts
 */
function createBlogPostStructuredData(post, baseUrl) {
  if (!post) return null;
  
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
    category,
    slug
  } = post;
  
  const postUrl = `${baseUrl}/blog/${slug}`;
  const metaDescription = summary || excerpt || description || `Read ${title} by ${author}`;
  const imageUrl = thumbnail 
    ? (thumbnail.startsWith('http') ? thumbnail : `${baseUrl}${thumbnail.replace('/portfolio', '')}`)
    : `${baseUrl}/images/default-og-image.png`;
  
  return {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: title,
    description: metaDescription,
    image: {
      '@type': 'ImageObject',
      url: imageUrl,
      width: 1200,
      height: 630
    },
    author: {
      '@type': 'Person',
      name: author,
      url: baseUrl,
      sameAs: [
        'https://twitter.com/pepryan',
        'https://instagram.com/nayrbef',
        'https://linkedin.com/in/febryanramadhan'
      ]
    },
    publisher: {
      '@type': 'Organization',
      name: 'Febryan Portfolio',
      url: baseUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/favicon.ico`
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
  };
}
