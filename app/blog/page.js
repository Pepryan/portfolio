import { getPosts } from '../lib/getPosts';
import BlogList from './BlogList';

export async function generateMetadata() {
  const posts = getPosts();
  const publishedPosts = posts.filter(post => !post.draft && !post.hidden);
  const postCount = publishedPosts.length;
  const latestPost = publishedPosts[0];
  
  // Get all unique tags for keywords
  const allTags = new Set();
  publishedPosts.forEach(post => {
    if (post.tags) {
      post.tags.forEach(tag => allTags.add(tag.toLowerCase()));
    }
  });
  const dynamicKeywords = ['blog', 'cloud engineering', 'devops', 'infrastructure', 'automation', ...Array.from(allTags)];
  
  const dynamicDescription = `Explore ${postCount} technical blog posts about cloud engineering, DevOps, infrastructure, automation, and modern web development by Febryan Ramadhan.${latestPost ? ` Latest: ${latestPost.title}` : ''}`;
  
  return {
    title: 'Blog | Febryan Blog',
    description: dynamicDescription,
    keywords: dynamicKeywords,
    authors: [{ name: 'Febryan Ramadhan', url: 'https://pepryan.github.io/portfolio' }],
    creator: 'Febryan Ramadhan',
    publisher: 'Febryan Portfolio',
    metadataBase: new URL('https://pepryan.github.io/portfolio'),
    openGraph: {
      title: 'Blog | Febryan Blog',
      description: dynamicDescription,
      url: 'https://pepryan.github.io/portfolio/blog',
      siteName: 'Febryan Portfolio',
      images: [
        {
          url: latestPost?.thumbnail ? 
            (latestPost.thumbnail.startsWith('http') ? latestPost.thumbnail : `https://pepryan.github.io/portfolio${latestPost.thumbnail.replace('/portfolio', '')}`) : 
            'https://pepryan.github.io/portfolio/images/default-og-image.png',
          width: 1200,
          height: 630,
          alt: latestPost ? `${latestPost.title} - Febryan Portfolio Blog` : 'Febryan Portfolio Blog',
        }
      ],
      locale: 'id_ID',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Blog | Febryan Blog',
      description: dynamicDescription,
      images: [latestPost?.thumbnail ? 
        (latestPost.thumbnail.startsWith('http') ? latestPost.thumbnail : `https://pepryan.github.io/portfolio${latestPost.thumbnail.replace('/portfolio', '')}`) : 
        'https://pepryan.github.io/portfolio/images/default-og-image.png'],
      creator: '@pepryan',
      site: '@pepryan',
    },
    alternates: {
      canonical: 'https://pepryan.github.io/portfolio/blog',
    },
    other: {
      'twitter:domain': 'pepryan.github.io',
      'twitter:url': 'https://pepryan.github.io/portfolio/blog',
      'article:author': 'Febryan Ramadhan',
      'article:section': 'Technology',
      'blog:post_count': postCount.toString(),
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default function BlogPage() {
  const posts = getPosts();
  return <BlogList posts={posts} />;
}