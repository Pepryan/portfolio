"use client";
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

export default function RelatedPosts({ posts }) {
  if (!posts || posts.length === 0) return null;

  return (
    <div className="mt-16 pt-8 border-t border-neutral-200 dark:border-neutral-800">
      <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
        Related Posts
      </h2>
      
      <div className="grid gap-6 sm:grid-cols-2">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block p-4 bg-neutral-50 dark:bg-neutral-800/50 rounded-xl 
              hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          >
            <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 
              group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {post.title}
            </h3>
            
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2">
              {post.excerpt}
            </p>
            
            <div className="mt-4 flex items-center gap-1 text-sm text-blue-600 
              dark:text-blue-400 group-hover:gap-2 transition-all">
              <span>Read more</span>
              <FiArrowRight className="w-4 h-4" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 