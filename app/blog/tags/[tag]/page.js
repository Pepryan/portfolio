import { getPosts } from '../../../lib/getPosts';
import TagPageClient from './TagPageClient';

export async function generateStaticParams() {
  const posts = getPosts();
  const tags = new Set(posts.flatMap(post => post.tags));
  
  return Array.from(tags).map((tag) => ({
    tag: tag,
  }));
}

export default function TagPage({ params }) {
  const { tag } = params;
  const allPosts = getPosts();
  const filteredPosts = allPosts.filter(post => post.tags.includes(tag));
  
  return <TagPageClient tag={tag} posts={filteredPosts} />;
} 