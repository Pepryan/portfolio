"use client";
import { useState, useMemo } from 'react';
import { useTheme } from '../context/ThemeContext';
import Link from 'next/link';
import { FiCalendar, FiClock, FiTag, FiArrowLeft } from 'react-icons/fi';
import Header from '../components/Header';

// Add PaginationButton component
const PaginationButton = ({ onClick, disabled, children, active }) => {
  const { darkMode } = useTheme();
  
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        px-4 py-2 rounded transition-colors duration-200
        ${active 
          ? 'bg-blue-500 text-white dark:bg-blue-600'
          : darkMode
            ? disabled
              ? 'bg-neutral-700 text-neutral-500 cursor-not-allowed'
              : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
            : disabled
              ? 'bg-neutral-100 text-neutral-400 cursor-not-allowed'
              : 'bg-neutral-200 text-neutral-700 hover:bg-neutral-300'
        }
      `}
    >
      {children}
    </button>
  );
};

export default function BlogList({ posts }) {
  const { darkMode } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  // Add pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  const filteredPosts = useMemo(() => {
    if (!searchQuery.trim()) return posts;
    
    const query = searchQuery.toLowerCase();
    return posts.filter(post => 
      post.title.toLowerCase().includes(query) ||
      post.tags.some(tag => tag.toLowerCase().includes(query))
    );
  }, [posts, searchQuery]);

  // Add pagination logic
  const paginatedPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * postsPerPage;
    return filteredPosts.slice(startIndex, startIndex + postsPerPage);
  }, [filteredPosts, currentPage]);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const allTags = useMemo(() => {
    const tags = new Set();
    posts.forEach(post => {
      post.tags.forEach(tag => tags.add(tag));
    });
    return Array.from(tags);
  }, [posts]);

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-neutral-900' : 'bg-white'}`}>
      <Header showSearch onSearch={setSearchQuery} />
      
      <main className="max-w-4xl mx-auto px-4 pt-24 pb-16">
        {/* Back to home */}
        <Link 
          href="/"
          className="inline-flex items-center gap-2 mb-8 text-neutral-600 dark:text-neutral-400 
            hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors"
        >
          <FiArrowLeft className="w-4 h-4" />
          Back to home
        </Link>

        {/* Tags filter */}
        <div className="mb-8 flex flex-wrap gap-2">
          {allTags.map(tag => (
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

        {/* Search results count */}
        {searchQuery && (
          <p className="mb-4 text-neutral-600 dark:text-neutral-400">
            Found {filteredPosts.length} result{filteredPosts.length !== 1 ? 's' : ''} 
            for &quot;{searchQuery}&quot;
          </p>
        )}

        {/* Posts list - now using paginatedPosts instead of filteredPosts */}
        <div className="space-y-8">
          {paginatedPosts.map((post) => (
            <article 
              key={post.slug}
              className="group relative bg-neutral-50 dark:bg-neutral-800/50 rounded-xl p-6 
                hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              <Link href={`/blog/${post.slug}`} className="block">
                <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-2 
                  group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h2>
                
                <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-4 text-sm text-neutral-500 dark:text-neutral-400">
                  <div className="flex items-center gap-1">
                    <FiCalendar className="w-4 h-4" />
                    <time>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                  </div>

                  {post.readingTime && (
                    <>
                      <span>·</span>
                      <span>{post.readingTime} min read</span>
                    </>
                  )}
                  
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map(tag => (
                      <span
                        key={tag}
                        className="flex items-center gap-1 px-2 py-0.5 text-xs bg-neutral-200/50 
                          dark:bg-neutral-700/50 rounded-full"
                      >
                        <FiTag className="w-3 h-3" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {/* Add Pagination controls */}
        {totalPages > 1 && (
          <div className="flex justify-center space-x-2 mt-8">
            <PaginationButton
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
            >
              Previous
            </PaginationButton>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <PaginationButton
                key={page}
                onClick={() => setCurrentPage(page)}
                active={currentPage === page}
              >
                {page}
              </PaginationButton>
            ))}
            
            <PaginationButton
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
            >
              Next
            </PaginationButton>
          </div>
        )}
      </main>
    </div>
  );
} 