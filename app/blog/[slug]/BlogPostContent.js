"use client";
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { useState, useEffect } from 'react';
import MDXComponents from '../../components/MDXComponents';
import remarkGfm from 'remark-gfm';
import rehypePrettyCode from 'rehype-pretty-code';

const shikiConfig = {
  theme: {
    dark: 'night-owl',
    light: 'github-light'
  },
  keepBackground: false,
  defaultLang: 'plaintext',
  transformers: []
};

const mdxOptions = {
  remarkPlugins: [remarkGfm],
  rehypePlugins: [
    [rehypePrettyCode, shikiConfig],
  ],
  format: 'mdx',
};

export default function BlogPostContent({ content }) {
  const [mdxSource, setMdxSource] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const serializeContent = async () => {
      try {
        if (typeof content === 'string') {
          // Raw MDX content - serialize it
          const serialized = await serialize(content, {
            mdxOptions,
            parseFrontmatter: true,
          });
          setMdxSource(serialized);
        } else if (content?.compiledSource) {
          // Already serialized content
          setMdxSource(content);
        }
        setIsLoading(false);
      } catch (err) {
        console.error('Error serializing MDX:', err);
        setError(err);
        setIsLoading(false);
      }
    };

    if (content) {
      serializeContent();
    }
  }, [content]);

  if (isLoading) {
    return <div className="animate-pulse">Loading content...</div>;
  }

  if (error) {
    return <div className="text-red-500">Error loading content: {error.message}</div>;
  }

  if (!mdxSource?.compiledSource) {
    return <div>No content available</div>;
  }

  return (
    <MDXRemote
      {...mdxSource}
      components={MDXComponents}
    />
  );
}