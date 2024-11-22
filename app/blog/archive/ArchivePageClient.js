"use client";
import { useTheme } from '../../context/ThemeContext';
import Link from 'next/link';
import { FiArrowLeft, FiHome, FiSun, FiMoon, FiCalendar } from 'react-icons/fi';

export default function ArchivePageClient({ groupedPosts }) {
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
        <h1 className="text-4xl font-bold mb-8 dark:text-white">Blog Archive</h1>
        
        {Object.entries(groupedPosts)
          .sort(([yearA], [yearB]) => yearB - yearA)
          .map(([year, months]) => (
            <div key={year} className="mb-8">
              <h2 className="text-2xl font-bold mb-4 dark:text-white">{year}</h2>
              {Object.entries(months)
                .sort(([monthA], [monthB]) => {
                  const dateA = new Date(`${monthA} 1, 2000`);
                  const dateB = new Date(`${monthB} 1, 2000`);
                  return dateB - dateA;
                })
                .map(([month, posts]) => (
                  <div key={`${year}-${month}`} className="mb-6">
                    <h3 className="text-xl font-semibold mb-3 dark:text-gray-300 flex items-center">
                      <FiCalendar className="mr-2" />
                      {month}
                    </h3>
                    <ul className="space-y-2">
                      {posts
                        .sort((a, b) => new Date(b.date) - new Date(a.date))
                        .map((post) => (
                          <li key={post.slug} className="ml-6">
                            <Link
                              href={`/blog/${post.slug}`}
                              className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                            >
                              <span className="text-gray-500 dark:text-gray-400 mr-2">
                                {new Date(post.date).getDate().toString().padStart(2, '0')} -
                              </span>
                              {post.title}
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </div>
                ))}
            </div>
          ))}
      </div>
    </div>
  );
} 