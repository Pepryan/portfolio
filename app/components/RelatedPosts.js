"use client";
import Link from 'next/link';
import { FiArrowRight, FiCalendar, FiClock } from 'react-icons/fi';
import Image from 'next/image';

export default function RelatedPosts({ currentPost, posts }) {
  if (!currentPost?.tags || !Array.isArray(posts)) {
    return null;
  }

  const relatedPosts = posts
    .filter(post => 
      post?.slug && 
      post?.tags && 
      Array.isArray(post.tags) &&
      post.slug !== currentPost.slug && 
      post.tags.some(tag => currentPost.tags.includes(tag))
    )
    .slice(0, 3);

  if (relatedPosts.length === 0) {
    return null;
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="border-t border-neutral-200 dark:border-neutral-800 pt-12">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
            Related Posts
          </h3>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {relatedPosts.map(post => (
            <Link 
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group relative flex flex-col h-full overflow-hidden rounded-xl 
                bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200/50 
                dark:border-neutral-700/50 hover:border-neutral-300 dark:hover:border-neutral-600 
                transition-all duration-300 hover:shadow-lg"
            >
              <div className="p-6 flex flex-col h-full">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 2).map(tag => (
                    <span 
                      key={tag}
                      className="px-2 py-1 text-xs rounded-full bg-neutral-200/50 
                        dark:bg-neutral-700/50 text-neutral-600 dark:text-neutral-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h4 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 
                  group-hover:text-blue-500 transition-colors mb-3">
                  {post.title}
                </h4>

                {/* Excerpt */}
                <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2 mb-4">
                  {post.summary}
                </p>

                {/* Add image if post has one */}
                {post.image && (
                  <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill={true}
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                      priority={false}
                    />
                  </div>
                )}

                {/* Metadata */}
                <div className="mt-auto flex items-center gap-4 text-xs text-neutral-500 dark:text-neutral-500">
                  <div className="flex items-center gap-1">
                    <FiCalendar className="w-3 h-3" />
                    <time>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </time>
                  </div>
                  {post.readingTime && (
                    <div className="flex items-center gap-1">
                      <FiClock className="w-3 h-3" />
                      <span>{post.readingTime} min read</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Hover indicator */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 
                transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}