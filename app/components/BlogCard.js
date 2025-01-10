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
            ? 'bg-[#1e2538] hover:bg-[#252b3b] border border-[#2a324a]' 
            : 'bg-white hover:bg-neutral-50 border border-neutral-200'
          }
          transform hover:-translate-y-1
        `}
      >
        <h2 className="text-2xl font-bold mb-2 text-neutral-900 dark:text-neutral-100">
          {post.title}
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 mb-4">{post.excerpt}</p>
        
        <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-500 dark:text-neutral-400">
          <div className="flex items-center gap-2">
            <FiCalendar className="w-4 h-4" />
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </div>
          
          {post.readingTime && (
            <>
              <span>·</span>
              <span>{post.readingTime} min read</span>
            </>
          )}
          
          {post.updated && (
            <div className="flex items-center gap-2">
              <FiClock className="w-4 h-4" />
              Updated: {new Date(post.updated).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
          )}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {post.tags.map(tag => (
            <span
              key={tag}
              className="px-2 py-1 text-xs bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-100 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>
      </article>
    </Link>
  );
} 