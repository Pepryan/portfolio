"use client";
import Link from 'next/link';
import { FiTag } from 'react-icons/fi';

export default function TagList({ tags, className = '' }) {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {tags.map(tag => (
        <Link
          key={tag}
          href={`/blog/tags/${tag}`}
          className="flex items-center gap-1 px-3 py-1 text-sm bg-neutral-100 dark:bg-neutral-800 
            text-neutral-700 dark:text-neutral-300 rounded-full hover:bg-neutral-200 
            dark:hover:bg-neutral-700 transition-colors"
        >
          <FiTag className="w-3 h-3" />
          {tag}
        </Link>
      ))}
    </div>
  );
} 