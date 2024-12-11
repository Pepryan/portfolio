import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export function getPosts() {
  const postsDirectory = path.join(process.cwd(), 'content/posts');
  const files = fs.readdirSync(postsDirectory);

  const posts = files.map((fileName) => {
    const slug = fileName.replace('.mdx', '');
    const filePath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      content,
      ...data,
      tags: Array.isArray(data.tags) ? data.tags : [],
    };
  })
  // Filter out hidden posts and sort by date
  .filter(post => !post.hidden || process.env.NODE_ENV !== 'production')
  .sort((a, b) => new Date(b.date) - new Date(a.date));

  return posts;
}

export async function getPost(slug) {
  try {
    const filePath = path.join(process.cwd(), 'content/posts', `${slug}.mdx`);
    console.log('Reading file:', filePath);
    
    const fileContents = fs.readFileSync(filePath, 'utf8');
    console.log('File contents preview:', fileContents.slice(0, 200) + '...');
    
    const { data, content } = matter(fileContents);
    console.log('Parsed frontmatter:', data);
    
    return {
      data,
      content
    };
  } catch (error) {
    console.error('Error in getPost:', error);
    return null;
  }
}

// Add a new function to get all posts including hidden ones (useful for admin/preview purposes)
export function getAllPosts() {
  const postsDirectory = path.join(process.cwd(), 'content/posts');
  const files = fs.readdirSync(postsDirectory);

  const posts = files.map((fileName) => {
    const slug = fileName.replace('.mdx', '');
    const filePath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug,
      ...data,
      tags: Array.isArray(data.tags) ? data.tags : [],
    };
  }).sort((a, b) => new Date(b.date) - new Date(a.date));

  return posts;
}