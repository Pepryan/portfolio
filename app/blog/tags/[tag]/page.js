import { getPosts } from '../../../lib/getPosts';
import TagPageClient from './TagPageClient';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

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