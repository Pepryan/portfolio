import { getPosts } from '../../lib/getPosts';
import ArchivePageClient from './ArchivePageClient';

export default function ArchivePage() {
  const posts = getPosts();
  
  // Group posts by year and month
  const groupedPosts = posts.reduce((acc, post) => {
    const date = new Date(post.date);
    const year = date.getFullYear();
    const month = date.toLocaleString('default', { month: 'long' });
    
    if (!acc[year]) {
      acc[year] = {};
    }
    if (!acc[year][month]) {
      acc[year][month] = [];
    }
    acc[year][month].push(post);
    
    return acc;
  }, {});

  return <ArchivePageClient groupedPosts={groupedPosts} />;
} 