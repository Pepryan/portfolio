"use client";
import Link from 'next/link';
import { FiArrowLeft, FiHome } from 'react-icons/fi';
import { useTheme } from '../../context/ThemeContext';
import TableOfContents from '../../components/TableOfContents';
import { useMemo } from 'react';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import rehypeHighlight from 'rehype-highlight';

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

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
      <nav className="bg-white dark:bg-gray-800 shadow-md mb-8">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center space-x-4">
            <Link 
              href="/" 
              className="inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-500"
            >
              <FiHome className="mr-2" /> Home
            </Link>
            <Link 
              href="/blog" 
              className="inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-500"
            >
              <FiArrowLeft className="mr-2" /> Back to Blog
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto p-4">
        <article>
          <h1 className="text-4xl font-bold mb-4 dark:text-white">{data.title}</h1>
          
          {/* Table of Contents */}
          <div className="mb-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <h2 className="text-xl font-bold mb-4 dark:text-white">Table of Contents</h2>
            <TableOfContents content={content} />
          </div>

          <div className="text-gray-600 dark:text-gray-300 mb-4">
            <div className="flex items-center gap-4 mb-2">
              <time>Created: {new Date(data.date).toLocaleDateString()}</time>
              {data.updated && (
                <time>Updated: {new Date(data.updated).toLocaleDateString()}</time>
              )}
              <span>·</span>
              <span>{readingTime} min read</span>
              <span>·</span>
              <span>{wordCount} words</span>
            </div>
            <div className="flex gap-2">
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
                components={{
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
                }}
              />
            )}
          </div>
        </article>
      </div>
    </div>
  );
} 