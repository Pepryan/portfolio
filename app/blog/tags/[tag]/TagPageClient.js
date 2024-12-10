"use client";
import { useTheme } from '../../../context/ThemeContext';
import Link from 'next/link';
import { FiArrowLeft, FiHome, FiSun, FiMoon } from 'react-icons/fi';
import BlogCard from '../../../components/BlogCard';
import Header from '../../../components/Header';

export default function TagPageClient({ tag, posts }) {
  const { darkMode } = useTheme();

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-neutral-900' : 'bg-white'}`}>
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 pt-24 pb-16">
        {/* Back to blog */}
        <Link 
          href="/blog"
          className="inline-flex items-center gap-2 mb-8 text-neutral-600 dark:text-neutral-400 
            hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors"
        >
          <FiArrowLeft className="w-4 h-4" />
          Back to all posts
        </Link>

        <h1 className="text-3xl font-bold mb-8 text-neutral-900 dark:text-neutral-100">
          Posts tagged with <span className="text-blue-600 dark:text-blue-400">#{tag}</span>
        </h1>

        {/* Posts list */}
        <div className="space-y-8">
          {posts.map((post) => (
            <article 
              key={post.slug}
              className="group relative bg-neutral-50 dark:bg-neutral-800/50 rounded-xl p-6 
                hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              <Link href={`/blog/${post.slug}`}>
                <h2 className="text-xl font-semibold mb-2 text-neutral-900 dark:text-neutral-100
                  group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h2>
                
                <p className="text-neutral-600 dark:text-neutral-400 mb-4 line-clamp-2">
                  {post.description || post.excerpt}
                </p>

                <div className="flex items-center gap-4 text-sm text-neutral-500 dark:text-neutral-500">
                  <time>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                  <span>·</span>
                  <span>{post.readingTime} min read</span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {post.tags.map(postTag => (
                    <span
                      key={postTag}
                      className={`text-xs px-2 py-1 rounded-full
                        ${postTag === tag 
                          ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                          : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400'
                        }`}
                    >
                      #{postTag}
                    </span>
                  ))}
                </div>
              </Link>
            </article>
          ))}
        </div>

        {/* Show message if no posts */}
        {posts.length === 0 && (
          <p className="text-center text-neutral-600 dark:text-neutral-400 py-8">
            No posts found with tag #{tag}
          </p>
        )}
      </main>
    </div>
  );
} 