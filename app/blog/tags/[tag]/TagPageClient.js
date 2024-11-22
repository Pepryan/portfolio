"use client";
import { useTheme } from '../../../context/ThemeContext';
import Link from 'next/link';
import { FiArrowLeft, FiHome, FiSun, FiMoon } from 'react-icons/fi';
import BlogCard from '../../../components/BlogCard';

export default function TagPageClient({ tag, posts }) {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
      <nav className="bg-white dark:bg-gray-800 shadow-md mb-8">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
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
        <h1 className="text-4xl font-bold mb-8 dark:text-white">Posts tagged with #{tag}</h1>
        <div className="grid gap-4">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
} 