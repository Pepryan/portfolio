"use client";
import { useTheme } from '../../context/ThemeContext';
import Link from 'next/link';
import { FiArrowLeft, FiHome, FiSun, FiMoon, FiCalendar } from 'react-icons/fi';
import Header from '../../components/Header';

export default function ArchivePageClient({ groupedPosts }) {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-neutral-900' : 'bg-white'}`}>
      <Header showSearch={false} />

      <div className="max-w-4xl mx-auto p-4 mt-20">
        <h1 className="text-4xl font-bold mb-8 text-neutral-900 dark:text-neutral-100">Blog Archive</h1>
        
        {Object.entries(groupedPosts)
          .sort(([yearA], [yearB]) => yearB - yearA)
          .map(([year, months]) => (
            <div key={year} className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">{year}</h2>
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