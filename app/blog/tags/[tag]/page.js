import { getPosts } from '../../../lib/getPosts';
import TagPageClient from './TagPageClient';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export async function generateMetadata({ params }) {
  const { tag } = await params;
  const allPosts = getPosts();
  const filteredPosts = allPosts.filter(post => post.tags.includes(tag));
  const postCount = filteredPosts.length;
  
  // Ambil post terbaru untuk gambar preview
  const latestPost = filteredPosts.sort((a, b) => new Date(b.date) - new Date(a.date))[0];
  const baseUrl = 'https://pepryan.github.io/portfolio';
  const metaImage = latestPost?.thumbnail 
    ? (latestPost.thumbnail.startsWith('http') ? latestPost.thumbnail : `${baseUrl}${latestPost.thumbnail.replace('/portfolio', '')}`)
    : `${baseUrl}/images/default-og-image.png`;
  
  const title = `Posts tagged "${tag}" | Febryan Blog`;
  const description = `Explore ${postCount} ${postCount === 1 ? 'post' : 'posts'} about ${tag}. Discover insights, tutorials, and thoughts on ${tag} topics by Febryan Ramadhan.`;
  
  return {
    title,
    description,
    keywords: [tag, 'blog', 'posts', 'tutorial', 'programming', 'technology', 'febryan portfolio'],
    authors: [{ name: 'Febryan Ramadhan', url: baseUrl }],
    creator: 'Febryan Ramadhan',
    publisher: 'Febryan Portfolio',
    category: 'Technology',
    metadataBase: new URL(baseUrl),
    openGraph: {
      title,
      description,
      url: `${baseUrl}/blog/tags/${tag}`,
      siteName: 'Febryan Portfolio',
      images: [{
        url: metaImage,
        width: 1200,
        height: 630,
        alt: `Posts tagged with ${tag} - Febryan Portfolio`,
      }],
      locale: 'id_ID',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [metaImage],
      creator: '@pepryan',
      site: '@pepryan',
    },
    alternates: {
      canonical: `${baseUrl}/blog/tags/${tag}`,
    },
    other: {
      'twitter:domain': 'pepryan.github.io',
      'twitter:url': `${baseUrl}/blog/tags/${tag}`,
      'article:section': 'Technology',
      'tag:post_count': postCount.toString(),
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

export async function generateStaticParams() {
  const posts = getPosts();
  const tags = new Set(posts.flatMap(post => post.tags));
  
  return Array.from(tags).map((tag) => ({
    tag: tag,
  }));
}

export default async function TagPage({ params }) {
  const { tag } = await params;
  const allPosts = getPosts();
  
  // Hitung reading time untuk setiap post
  const postsWithReadingTime = allPosts.map(post => {
    // Baca konten file MDX
    const filePath = path.join(process.cwd(), 'content/posts', `${post.slug}.mdx`);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { content } = matter(fileContents);
    
    // Hitung reading time
    const words = content.trim().split(/\s+/).length;
    const readingTime = Math.ceil(words / 200);
    
    return {
      ...post,
      readingTime
    };
  });

  const filteredPosts = postsWithReadingTime.filter(post => post.tags.includes(tag));
  
  return <TagPageClient tag={tag} posts={filteredPosts} />;
}

export const dynamic = 'force-static';
export const dynamicParams = false;