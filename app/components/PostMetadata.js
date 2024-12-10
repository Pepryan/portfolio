"use client";
import { FiCalendar, FiClock } from 'react-icons/fi';

export default function PostMetadata({ date, updated, readingTime, wordCount }) {
  return (
    <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-500 dark:text-neutral-400">
      <div className="flex items-center gap-2">
        <FiCalendar className="w-4 h-4" />
        {new Date(date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })}
      </div>
      
      {updated && (
        <div className="flex items-center gap-2">
          <FiClock className="w-4 h-4" />
          Updated: {new Date(updated).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </div>
      )}
      
      <span>·</span>
      <span>{readingTime} min read</span>
      
      {wordCount && (
        <>
          <span>·</span>
          <span>{wordCount} words</span>
        </>
      )}
    </div>
  );
} 