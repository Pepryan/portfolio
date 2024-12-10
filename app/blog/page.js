import { getPosts } from '../lib/getPosts';
import BlogList from './BlogList';

export default function BlogPage() {
  const posts = getPosts();
  return <BlogList posts={posts} />;
} 