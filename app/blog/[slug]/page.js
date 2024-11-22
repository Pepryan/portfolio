import { cache } from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import BlogPostLayout from './BlogPostLayout';
import { getPosts } from '../../lib/getPosts';

const getPost = cache(async (slug) => {
  const filePath = path.join(process.cwd(), 'content/posts', `${slug}.mdx`);
  if (!fs.existsSync(filePath)) {
    return null;
  }
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return matter(fileContents);
});

export async function generateStaticParams() {
  const posts = getPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }) {
  try {
    const { slug } = await params;
    const post = await getPost(slug);
    
    if (!post) {
      return <div>Post not found</div>;
    }

    const { data, content } = post;
    const wordsPerMinute = 200;
    const wordCount = content.trim().split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / wordsPerMinute);

    const MdxContent = () => (
      <article className="prose dark:prose-invert max-w-none">
        <MDXRemote source={content} />
      </article>
    );

    return (
      <BlogPostLayout 
        data={data} 
        readingTime={readingTime} 
        wordCount={wordCount}
        content={content}
      >
        <MdxContent />
      </BlogPostLayout>
    );
  } catch (error) {
    console.error('Error in BlogPost:', error);
    return <div>Error loading post</div>;
  }
}

export const dynamic = 'force-static';
export const dynamicParams = false; 