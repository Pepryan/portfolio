"use client";
import Link from 'next/link';
import { FiArrowLeft, FiHome, FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../../context/ThemeContext';
import TableOfContents from '../../components/TableOfContents';
import { memo } from 'react';

// Memoize the entire component
export default memo(function BlogPostLayout({ children, data, readingTime, wordCount, content }) {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
      <nav className="bg-white dark:bg-gray-800 shadow-md mb-8">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-500">
                <FiHome className="mr-2" /> Home
              </Link>
              <Link href="/blog" className="inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-500">
                <FiArrowLeft className="mr-2" /> Back to Blog
              </Link>
            </div>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle theme"
            >
              {darkMode ? 
                <FiSun className="w-5 h-5 text-gray-600 dark:text-gray-300" /> : 
                <FiMoon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              }
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto p-4">
        <article>
          <h1 className="text-4xl font-bold mb-4 dark:text-white">{data.title}</h1>

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

          <div className="mb-8 inline-block">
            <TableOfContents content={content} />
          </div>

          {children}
        </article>
      </div>
    </div>
  );
}, (prevProps, nextProps) => {
  // Custom comparison function
  return (
    prevProps.content === nextProps.content &&
    prevProps.darkMode === nextProps.darkMode &&
    prevProps.data === nextProps.data
  );
}); 