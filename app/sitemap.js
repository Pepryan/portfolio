import { getAllPosts } from '../lib/mdx';

export default async function sitemap() {
  const posts = await getAllPosts();
  const baseUrl = 'https://pepryan.github.io/portfolio';
  
  // Generate routes untuk blog posts
  const blogPosts = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.updated || post.date,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // Generate routes untuk tags
  const tags = [...new Set(posts.flatMap(post => post.tags))];
  const tagRoutes = tags.map((tag) => ({
    url: `${baseUrl}/blog/tags/${tag}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: 0.5,
  }));

  // Static routes
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date().toISOString(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/archive`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.6,
    },
  ];

  return [...staticRoutes, ...blogPosts, ...tagRoutes];
}

export const dynamic = 'force-static'; 