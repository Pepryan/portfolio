"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from '../../context/ThemeContext';
import TableOfContents from '../../components/TableOfContents';
import { useMemo } from 'react';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import rehypeHighlight from 'rehype-highlight';
import Header from '../../components/Header';

export default function BlogPostContent({ content, data }) {
  const { darkMode } = useTheme();

  // Calculate reading time
  const { readingTime, wordCount } = useMemo(() => {
    const wordsPerMinute = 200;
    const wordCount = content.trim().split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / wordsPerMinute);
    return { readingTime, wordCount };
  }, [content]);

  // Serialize MDX content
  const mdxSource = useMemo(async () => {
    return await serialize(content, {
      mdxOptions: {
        rehypePlugins: [rehypeHighlight]
      }
    });
  }, [content]);

  const components = {
    img: ({ src, alt }) => {
      // Pastikan path dimulai dengan '/'
      const imageSrc = src.startsWith('/') ? src : `/${src}`;
      
      return (
        <div className="my-8">
          <img
            src={imageSrc}
            alt={alt}
            className="rounded-lg w-full"
            loading="lazy"
            onError={(e) => {
              console.error('Image failed to load:', imageSrc);
            }}
          />
        </div>
      );
    },
    pre: ({ children }) => (
      <div className="relative">
        <button
          onClick={() => {
            navigator.clipboard.writeText(children.props.children);
          }}
          className="absolute top-2 right-2 px-2 py-1 text-sm bg-gray-700 text-white rounded hover:bg-gray-600"
        >
          Copy
        </button>
        <pre>{children}</pre>
      </div>
    ),
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
      <Header showSearch={false} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <article className="pt-32">
          <h1 className="text-4xl font-bold mb-4 dark:text-white">{data.title}</h1>
          
          {/* Table of Contents */}
          <div className="mb-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <h2 className="text-xl font-bold mb-4 dark:text-white">Table of Contents</h2>
            <TableOfContents content={content} />
          </div>

          <div className="text-gray-600 dark:text-gray-300 mb-4">
            <div className="flex flex-wrap items-center gap-4 mb-2">
              <time>Created: {new Date(data.date).toLocaleDateString()}</time>
              {data.updated && (
                <time>Updated: {new Date(data.updated).toLocaleDateString()}</time>
              )}
              <span>·</span>
              <span>{readingTime} min read</span>
              <span>·</span>
              <span>{wordCount} words</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {data.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/blog/tags/${tag}`}
                  className="text-sm bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  #{tag}
                </Link>
              ))}
            </div>
          </div>

          <div className="prose dark:prose-invert max-w-none">
            {mdxSource && (
              <MDXRemote 
                {...mdxSource}
                components={components}
              />
            )}
          </div>
        </article>
      </div>
    </div>
  );
} 