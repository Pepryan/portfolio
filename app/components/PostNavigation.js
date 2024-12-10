"use client";
import Link from 'next/link';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

export default function PostNavigation({ prev, next }) {
  return (
    <nav className="mt-16 pt-8 border-t border-neutral-200 dark:border-neutral-800">
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        {prev && (
          <Link
            href={`/blog/${prev.slug}`}
            className="group flex-1 p-4 bg-neutral-50 dark:bg-neutral-800/50 rounded-xl 
              hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          >
            <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400 mb-2">
              <FiArrowLeft className="w-4 h-4" />
              <span>Previous Post</span>
            </div>
            <h4 className="font-medium text-neutral-900 dark:text-neutral-100 
              group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {prev.title}
            </h4>
          </Link>
        )}
        
        {next && (
          <Link
            href={`/blog/${next.slug}`}
            className="group flex-1 p-4 bg-neutral-50 dark:bg-neutral-800/50 rounded-xl 
              hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors text-right"
          >
            <div className="flex items-center justify-end gap-2 text-sm text-neutral-600 dark:text-neutral-400 mb-2">
              <span>Next Post</span>
              <FiArrowRight className="w-4 h-4" />
            </div>
            <h4 className="font-medium text-neutral-900 dark:text-neutral-100 
              group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {next.title}
            </h4>
          </Link>
        )}
      </div>
    </nav>
  );
} 