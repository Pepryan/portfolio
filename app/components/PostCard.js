"use client";
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import TagList from './TagList';
import PostMetadata from './PostMetadata';

export default function PostCard({ post }) {
  const { readingTime, wordCount } = post;

  return (
    <article className="group relative bg-white dark:bg-neutral-800/50 rounded-xl p-6 
      hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors border border-neutral-200 
      dark:border-neutral-700">
      <Link href={`/blog/${post.slug}`} className="block">
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-2 
          group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {post.title}
        </h2>
        
        <p className="text-neutral-600 dark:text-neutral-400 mb-4 line-clamp-2">
          {post.excerpt}
        </p>

        <PostMetadata
          date={post.date}
          updated={post.updated}
          readingTime={readingTime}
          wordCount={wordCount}
        />

        <TagList tags={post.tags} className="mt-4" />

        <div className="mt-4 flex items-center gap-2 text-blue-600 dark:text-blue-400 
          group-hover:gap-3 transition-all">
          <span>Read more</span>
          <FiArrowRight className="w-4 h-4" />
        </div>
      </Link>
    </article>
  );
}