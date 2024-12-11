import { cache } from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import BlogPostClient from './BlogPostClient';
import { getPosts } from '../../lib/getPosts';
import { serialize } from 'next-mdx-remote/serialize';
import remarkGfm from 'remark-gfm';
import rehypePrettyCode from 'rehype-pretty-code';
import { transformerCopyButton } from '@rehype-pretty/transformers';

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

    const words = post.content.trim().split(/\s+/).length;
    const readingTime = Math.ceil(words / 200);

    const mdxSource = await serialize(post.content, {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          [rehypePrettyCode, {
            theme: {
              dark: 'github-dark',
              light: 'github-light',
            },
            keepBackground: true,
            defaultLang: 'plaintext',
            grid: true,
            onVisitLine(node) {
              if (node.children.length === 0) {
                node.children = [{type: 'text', value: ' '}];
              }
            },
            onVisitHighlightedLine(node) {
              node.properties.className = ['highlighted'];
            },
            onVisitHighlightedWord(node) {
              node.properties.className = ['word'];
            },
            transformers: [
              transformerCopyButton({
                visibility: true,
                feedbackDuration: 2000,
              }),
            ],
          }],
        ],
        format: 'mdx',
      },
      parseFrontmatter: true,
    });
    
    const enhancedFrontmatter = {
      ...post.data,
      readingTime,
      wordCount: words,
      rawContent: post.content,
      slug,
    };

    return (
      <BlogPostClient 
        content={mdxSource} 
        frontmatter={enhancedFrontmatter}
      />
    );
  } catch (error) {
    console.error('Error in BlogPost:', error);
    if (process.env.NODE_ENV === 'development') {
      return (
        <div className="p-4 bg-red-50 text-red-900 rounded-lg">
          <h2 className="text-lg font-bold mb-2">Error loading post</h2>
          <pre className="whitespace-pre-wrap">{error.message}</pre>
        </div>
      );
    }
    return <div>Error loading post</div>;
  }
}

export const dynamic = 'force-static';
export const dynamicParams = false;