import { getPosts } from '../lib/getPosts';
import BlogList from '../components/BlogList';

export default async function BlogPage() {
  const posts = getPosts();
  
  return (
    <BlogList initialPosts={posts} />
  );
} 