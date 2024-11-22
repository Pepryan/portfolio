import Link from 'next/link';
import { FiCalendar, FiClock } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

export default function BlogCard({ post }) {
  const { darkMode } = useTheme();

  return (
    <Link href={`/blog/${post.slug}`}>
      <article 
        className={`
          p-6 rounded-lg transition-all duration-300 ease-in-out
          ${darkMode 
            ? 'bg-gray-800 hover:bg-gray-700 hover:shadow-lg hover:shadow-gray-900/50' 
            : 'bg-white hover:shadow-lg hover:shadow-gray-200/50'
          }
          transform hover:-translate-y-1
        `}
      >
        <h2 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">
          {post.title}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
        
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center">
            <FiCalendar className="mr-2" />
            {new Date(post.date).toLocaleDateString()}
          </div>
          {post.updated && (
            <div className="flex items-center">
              <FiClock className="mr-2" />
              Updated: {new Date(post.updated).toLocaleDateString()}
            </div>
          )}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {post.tags.map(tag => (
            <span
              key={tag}
              className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>
      </article>
    </Link>
  );
} 