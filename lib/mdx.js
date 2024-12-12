import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export async function getAllPosts() {
  // Pastikan direktori ada
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  
  const posts = fileNames
    .filter(fileName => fileName.endsWith('.mdx'))
    .map(fileName => {
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);
      
      return {
        slug: fileName.replace(/\.mdx$/, ''),
        ...data,
        date: data.date ? new Date(data.date).toISOString() : null,
        updated: data.updated ? new Date(data.updated).toISOString() : null,
      };
    })
    .sort((a, b) => (new Date(b.date) - new Date(a.date)));

  return posts;
}

export async function getPostBySlug(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  
  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    return {
      slug,
      content,
      ...data,
      date: data.date ? new Date(data.date).toISOString() : null,
      updated: data.updated ? new Date(data.updated).toISOString() : null,
    };
  } catch (error) {
    console.error(`Error reading file ${fullPath}:`, error);
    return null;
  }
} 