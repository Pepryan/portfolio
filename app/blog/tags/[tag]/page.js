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
  const metaImage = latestPost?.thumbnail 
    ? `/images/${latestPost.thumbnail}`
    : '/images/default-og-image.png';
  
  const title = `Posts tagged "${tag}" | Ryan's Blog`;
  const description = `Explore ${postCount} ${postCount === 1 ? 'post' : 'posts'} about ${tag}. Discover insights, tutorials, and thoughts on ${tag} topics.`;
  
  return {
    title,
    description,
    keywords: [tag, 'blog', 'posts', 'tutorial', 'programming', 'technology'],
    authors: [{ name: 'Ryan' }],
    creator: 'Ryan',
    publisher: 'Ryan\'s Blog',
    category: 'Technology',
    metadataBase: new URL('https://ryanpratama.my.id'),
    openGraph: {
      title,
      description,
      url: `/blog/tags/${tag}`,
      siteName: 'Ryan\'s Blog',
      images: [{
        url: metaImage,
        width: 1200,
        height: 630,
        alt: `Posts tagged with ${tag}`,
      }],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [metaImage],
      creator: '@ryanpratama',
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
    alternates: {
      canonical: `/blog/tags/${tag}`,
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