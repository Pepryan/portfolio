"use client";
import Link from 'next/link';
import { FiArrowLeft, FiHome, FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../../context/ThemeContext';
import TableOfContents from '../../components/TableOfContents';
import { memo, useEffect, useState } from 'react';
import Header from '../../components/Header';
import Head from 'next/head';

// Memoize the entire component
export default memo(function BlogPostLayout({ children, data, readingTime, wordCount, content }) {
  const { darkMode, toggleDarkMode } = useTheme();
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Effect to show/hide the scroll button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) { // Show button after scrolling down 300px
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Head>
        <title>{`${data.title} | Febryan Portfolio`}</title>
        <meta name="description" content={data.summary || data.title} />
        <meta name="keywords" content={data.tags.join(', ')} />
        
        {/* Open Graph */}
        <meta property="og:title" content={data.title} />
        <meta property="og:description" content={data.summary || data.title} />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={data.date} />
        {data.updated && (
          <meta property="article:modified_time" content={data.updated} />
        )}
        {data.tags.map((tag) => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}
      </Head>
      <div className={`min-h-screen ${darkMode ? 'dark bg-neutral-900' : 'bg-white'}`}>
        <Header showSearch={false} isPost={true} />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 overflow-x-hidden">
          <article className="prose dark:prose-invert max-w-none w-full">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-neutral-900 dark:text-neutral-100 break-words">{data.title}</h1>

            <div className="text-neutral-600 dark:text-neutral-400 mb-4">
              <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-2 text-sm sm:text-base">
                <time>Created: {new Date(data.date).toLocaleDateString()}</time>
                {data.updated && (
                  <time>Updated: {new Date(data.updated).toLocaleDateString()}</time>
                )}
                <span className="hidden sm:inline">·</span>
                <span>{readingTime} min read</span>
                <span className="hidden sm:inline">·</span>
                <span>{wordCount} words</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {data.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog/tags/${tag}`}
                    className="text-sm bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-100 px-2 py-1 rounded hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
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
    </>
  );
}, (prevProps, nextProps) => {
  // Custom comparison function
  return (
    prevProps.content === nextProps.content &&
    prevProps.darkMode === nextProps.darkMode &&
    prevProps.data === nextProps.data
  );
});