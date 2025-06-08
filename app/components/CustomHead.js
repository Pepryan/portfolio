'use client';

import Head from 'next/head';

/**
 * Custom Head component for proper SEO meta tag rendering in static export
 * This ensures meta tags are rendered as static HTML rather than JavaScript
 */
export default function CustomHead({ 
  title,
  description,
  keywords = [],
  author = 'Febryan Ramadhan',
  creator = 'Febryan Ramadhan',
  publisher = 'Febryan Portfolio',
  canonical,
  openGraph = {},
  twitter = {},
  other = {},
  robots = {},
  structuredData = null
}) {
  const baseUrl = 'https://pepryan.github.io/portfolio';
  
  // Default values
  const defaultTitle = 'Febryan Portfolio - Cloud Engineer & DevOps Specialist';
  const defaultDescription = 'Personal portfolio and technical blog by Febryan Ramadhan. Cloud Engineer specializing in DevOps, Infrastructure, and Automation.';
  const defaultImage = `${baseUrl}/images/default-og-image.png`;
  
  // Prepare meta values
  const metaTitle = title || defaultTitle;
  const metaDescription = description || defaultDescription;
  const metaKeywords = Array.isArray(keywords) ? keywords.join(', ') : keywords;
  const canonicalUrl = canonical || baseUrl;
  
  // Open Graph defaults
  const ogTitle = openGraph.title || metaTitle;
  const ogDescription = openGraph.description || metaDescription;
  const ogImage = openGraph.image || defaultImage;
  const ogUrl = openGraph.url || canonicalUrl;
  const ogType = openGraph.type || 'website';
  const ogSiteName = openGraph.siteName || 'Febryan Portfolio';
  const ogLocale = openGraph.locale || 'id_ID';
  
  // Twitter Card defaults
  const twitterCard = twitter.card || 'summary_large_image';
  const twitterTitle = twitter.title || ogTitle;
  const twitterDescription = twitter.description || ogDescription;
  const twitterImage = twitter.image || ogImage;
  const twitterCreator = twitter.creator || '@pepryan';
  const twitterSite = twitter.site || '@pepryan';
  
  // Robots defaults
  const robotsIndex = robots.index !== false;
  const robotsFollow = robots.follow !== false;
  const robotsContent = `${robotsIndex ? 'index' : 'noindex'}, ${robotsFollow ? 'follow' : 'nofollow'}`;

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      {metaKeywords && <meta name="keywords" content={metaKeywords} />}
      <meta name="author" content={author} />
      <meta name="creator" content={creator} />
      <meta name="publisher" content={publisher} />
      <meta name="robots" content={robotsContent} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={ogSiteName} />
      <meta property="og:locale" content={ogLocale} />
      
      {/* Open Graph Image Details */}
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:alt" content={ogTitle} />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={twitterTitle} />
      <meta name="twitter:description" content={twitterDescription} />
      <meta name="twitter:image" content={twitterImage} />
      <meta name="twitter:creator" content={twitterCreator} />
      <meta name="twitter:site" content={twitterSite} />
      <meta name="twitter:domain" content="pepryan.github.io" />
      <meta name="twitter:url" content={ogUrl} />
      
      {/* Additional Open Graph for Articles */}
      {ogType === 'article' && openGraph.publishedTime && (
        <meta property="article:published_time" content={openGraph.publishedTime} />
      )}
      {ogType === 'article' && openGraph.modifiedTime && (
        <meta property="article:modified_time" content={openGraph.modifiedTime} />
      )}
      {ogType === 'article' && openGraph.authors && openGraph.authors.length > 0 && (
        openGraph.authors.map((authorName, index) => (
          <meta key={index} property="article:author" content={authorName} />
        ))
      )}
      {ogType === 'article' && openGraph.tags && openGraph.tags.length > 0 && (
        openGraph.tags.map((tag, index) => (
          <meta key={index} property="article:tag" content={tag} />
        ))
      )}
      {ogType === 'article' && openGraph.section && (
        <meta property="article:section" content={openGraph.section} />
      )}
      
      {/* Additional Meta Tags */}
      {Object.entries(other).map(([key, value]) => {
        if (key === 'application/ld+json') {
          return null; // Handle structured data separately
        }
        return <meta key={key} name={key} content={value} />;
      })}
      
      {/* Theme and App Meta Tags */}
      <meta name="theme-color" content="#000000" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* Google Bot Specific */}
      <meta name="googlebot" content={`${robotsIndex ? 'index' : 'noindex'}, ${robotsFollow ? 'follow' : 'nofollow'}, max-video-preview:-1, max-image-preview:large, max-snippet:-1`} />
      
      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
      )}
    </Head>
  );
}
