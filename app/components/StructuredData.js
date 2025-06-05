'use client';

export default function StructuredData({ post, baseUrl }) {
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
    difficulty,
    readingTime,
    wordCount,
    slug,
    schema = {}
  } = post;

  const postUrl = `${baseUrl}/blog/${slug}`;
  const authorUrl = baseUrl;
  // Fix thumbnail path - remove /portfolio prefix if it exists
  const cleanThumbnail = thumbnail ? thumbnail.replace('/portfolio', '') : null;
  const imageUrl = cleanThumbnail ? `${baseUrl}${cleanThumbnail}` : `${baseUrl}/images/default-og-image.svg`;
  // Use summary first, then excerpt, then description as fallback
  const metaDescription = summary || excerpt || description || `Read ${title} by ${author}`;

  // Article Schema
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': schema.type || 'TechArticle',
    headline: schema.headline || title,
    description: schema.description || metaDescription,
    image: {
      '@type': 'ImageObject',
      url: imageUrl,
      width: 1200,
      height: 630
    },
    author: {
      '@type': 'Person',
      name: schema.author?.name || author,
      url: schema.author?.url || authorUrl,
      sameAs: [
        'https://twitter.com/pepryan',
        'https://instagram.com/nayrbef',
        'https://linkedin.com/in/febryanramadhan'
      ]
    },
    publisher: {
      '@type': 'Organization',
      name: schema.publisher?.name || 'Febryan Portfolio',
      url: schema.publisher?.url || baseUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/favicon.ico`
      }
    },
    datePublished: schema.datePublished || date,
    dateModified: schema.dateModified || updated || date,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': postUrl
    },
    url: postUrl,
    keywords: tags.join(', '),
    articleSection: category || 'Technology',
    wordCount: wordCount,
    timeRequired: `PT${readingTime || Math.ceil((wordCount || 0) / 200)}M`,
    inLanguage: 'id-ID',
    isAccessibleForFree: true,
    ...(difficulty && {
      educationalLevel: difficulty
    })
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: baseUrl
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: `${baseUrl}/blog`
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: title,
        item: postUrl
      }
    ]
  };

  // Website Schema
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Febryan Portfolio',
    url: baseUrl,
    description: 'Personal portfolio and blog by Febryan',
    author: {
      '@type': 'Person',
      name: author,
      url: authorUrl
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseUrl}/blog?search={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema)
        }}
      />
    </>
  );
}