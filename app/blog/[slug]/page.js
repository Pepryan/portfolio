import { cache } from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import BlogPostClient from './BlogPostClient';
import { getPosts } from '../../lib/getPosts';
import { serialize } from 'next-mdx-remote/serialize';
import remarkGfm from 'remark-gfm';
import rehypePrettyCode from 'rehype-pretty-code';
// import { transformerCopyButton } from '@rehype-pretty/transformers';

const getPost = cache(async (slug) => {
  const filePath = path.join(process.cwd(), 'content/posts', `${slug}.mdx`);
  if (!fs.existsSync(filePath)) {
    return null;
  }
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return matter(fileContents);
});

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const allPosts = getPosts();
  const post = allPosts.find(post => post.slug === slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.'
    };
  }

  const baseUrl = 'https://pepryan.github.io/portfolio';
  const postUrl = `${baseUrl}/blog/${slug}`;
  const defaultImage = `${baseUrl}/images/default-og-image.png`;
  
  // Extract metadata from frontmatter
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
    openGraph = {},
    twitter = {},
    schema = {}
  } = post;

  // Use summary first, then excerpt, then description as fallback
  const metaDescription = summary || excerpt || description || `Read ${title} by ${author}`;
  // Fix thumbnail path - remove /portfolio prefix if it exists
  const cleanThumbnail = thumbnail ? thumbnail.replace('/portfolio', '') : null;
  const metaImage = cleanThumbnail ? `${baseUrl}${cleanThumbnail}` : defaultImage;
  const metaKeywords = [...tags, ...keywords, 'blog', 'tutorial', 'febryan portfolio'];

  return {
    title: `${title} | Febryan Blog`,
    description: metaDescription,
    keywords: metaKeywords,
    authors: [{ name: author, url: baseUrl }],
    creator: author,
    publisher: 'Febryan Portfolio',
    category: category || 'Blog',
    metadataBase: new URL(baseUrl),
    
    // Open Graph
    openGraph: {
      title: openGraph.title || title,
      description: openGraph.description || metaDescription,
      url: openGraph.url || postUrl,
      siteName: 'Febryan Portfolio',
      images: [
        {
          url: openGraph.image ? (openGraph.image.startsWith('http') ? openGraph.image : `${baseUrl}${openGraph.image.replace('/portfolio', '')}`) : metaImage,
          width: 1200,
          height: 630,
          alt: openGraph.title || title,
        }
      ],
      locale: 'id_ID',
      type: 'article',
      publishedTime: date,
      modifiedTime: updated || date,
      authors: [author],
      tags: tags,
    },
    
    // Twitter
    twitter: {
      card: twitter.card || 'summary_large_image',
      title: twitter.title || title,
      description: twitter.description || metaDescription,
      images: [twitter.image ? (twitter.image.startsWith('http') ? twitter.image : `${baseUrl}${twitter.image.replace('/portfolio', '')}`) : metaImage],
      creator: '@pepryan',
      site: '@pepryan',
    },
    
    // Additional meta tags for social sharing
    other: {
      'twitter:domain': 'pepryan.github.io',
      'twitter:url': postUrl,
      'article:author': author,
      'article:published_time': date,
      'article:modified_time': updated || date,
      'article:section': category || 'Technology',
      'article:tag': tags.join(', '),
      'difficulty': difficulty,
      'reading-time': `${Math.ceil((post.content?.split(' ').length || 0) / 200)} minutes`,
      'og:image:width': '1200',
      'og:image:height': '630',
      'og:image:type': 'image/png',
    },
    
    // Robots
    robots: {
      index: !post.draft,
      follow: !post.draft,
      googleBot: {
        index: !post.draft,
        follow: !post.draft,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    
    // Canonical URL
    alternates: {
      canonical: postUrl,
    },
  };
}

export async function generateStaticParams() {
  const posts = getPosts();
  // Filter out draft posts, hidden posts, and template files in production
  const filteredPosts = process.env.NODE_ENV === 'production' 
    ? posts.filter(post => !post.draft && !post.hidden && !post.slug.startsWith('_'))
    : posts.filter(post => !post.slug.startsWith('_')); // Always filter template files
  return filteredPosts.map((post) => ({
    slug: post.slug,
  }));
}

const shikiConfig = {
  keepBackground: true,
  defaultLang: 'plaintext',
  grid: true,
  // theme: {
  //   dark: "github-dark-dimmed",
  //   light: "github-light",
  // },
  // theme: 'material-theme',
  theme: 'night-owl',
  // theme:'vitesse-black',
  // transformers: [
  //   transformerCopyButton({
  //     visibility: 'always',
  //     feedbackDuration: 3_000,
  //   }),
  // ],
  onVisitLine(node) {
    if (node.children.length === 0) {
      node.children = [{type: 'text', value: ' '}];
    }
  },
  onVisitHighlightedLine(node) {
    node.properties.className = ['highlighted'];
  },
  onVisitHighlightedWord(node) {
    node.properties.className = ['word'];
  },
  cacheDir: path.join(process.cwd(), '.cache/rehype-pretty-code'),
};

const mdxOptions = {
  remarkPlugins: [remarkGfm],
  rehypePlugins: [
    [rehypePrettyCode, shikiConfig],
  ],
  format: 'mdx',
};

export default async function BlogPost({ params }) {
  try {
    const { slug } = await params;
    const allPosts = getPosts();
    const post = allPosts.find(post => post.slug === slug);
    
    if (!post) {
      return <div>Post not found</div>;
    }

    if ((post.draft || post.hidden) && process.env.NODE_ENV === 'production') {
      return <div>Post not found</div>;
    }

    const words = post.content ? post.content.trim().split(/\s+/).length : 0;
    const readingTime = Math.ceil(words / 200);

    // Pass raw content instead of serialized to avoid SSR issues
    const enhancedFrontmatter = {
      ...post,
      readingTime,
      wordCount: words,
      rawContent: post.content,
      slug,
    };

    // Generate structured data for the blog post
    const baseUrl = 'https://pepryan.github.io/portfolio';
    const postUrl = `${baseUrl}/blog/${slug}`;
    const cleanThumbnail = post.thumbnail ? post.thumbnail.replace('/portfolio', '') : null;
    const metaImage = cleanThumbnail ? `${baseUrl}${cleanThumbnail}` : `${baseUrl}/images/default-og-image.png`;
    
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "@id": `${postUrl}#article`,
      "headline": post.title,
      "description": post.summary || post.excerpt || post.description || `Read ${post.title} by ${post.author || 'Febryan Ramadhan'}`,
      "image": {
        "@type": "ImageObject",
        "url": metaImage,
        "width": 1200,
        "height": 630
      },
      "author": {
        "@type": "Person",
        "name": post.author || "Febryan Ramadhan",
        "url": baseUrl
      },
      "publisher": {
        "@type": "Organization",
        "name": "Febryan Portfolio",
        "logo": {
          "@type": "ImageObject",
          "url": `${baseUrl}/images/default-og-image.png`,
          "width": 1200,
          "height": 630
        }
      },
      "datePublished": post.date,
      "dateModified": post.updated || post.date,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": postUrl
      },
      "url": postUrl,
      "keywords": [...(post.tags || []), ...(post.keywords || [])].join(', '),
      "articleSection": post.category || "Technology",
      "wordCount": post.content?.split(' ').length || 0,
      "timeRequired": `PT${Math.ceil((post.content?.split(' ').length || 0) / 200)}M`,
      "inLanguage": "id-ID"
    };

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <BlogPostClient
          content={post.content}
          frontmatter={enhancedFrontmatter}
          allPosts={allPosts}
        />
      </>
    );
  } catch (error) {
    console.error('Error in BlogPost:', error);
    if (process.env.NODE_ENV === 'development') {
      return (
        <div className="p-4 bg-red-50 text-red-900 rounded-lg">
          <h2 className="text-lg font-bold mb-2">Error loading post</h2>
          <pre className="whitespace-pre-wrap">{error.message}</pre>
        </div>
      );
    }
    return <div>Error loading post</div>;
  }
}

export const dynamic = 'force-static';
export const dynamicParams = false;