"use client";
import { useState, useMemo } from 'react';
import { useTheme } from '../context/ThemeContext';
import BlogCard from './BlogCard';
import Link from 'next/link';
import Header from './Header';

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
              ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            : disabled
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }
      `}
    >
      {children}
    </button>
  );
};

export default function BlogList({ initialPosts }) {
  const { darkMode } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  // Filter posts based on search query
  const filteredPosts = useMemo(() => {
    if (!searchQuery.trim()) return initialPosts;

    const query = searchQuery.toLowerCase();
    return initialPosts.filter(post => {
      const titleMatch = post.title?.toLowerCase().includes(query);
      const excerptMatch = post.summary?.toLowerCase().includes(query);
      const tagsMatch = post.tags?.some(tag => tag.toLowerCase().includes(query));
      
      return titleMatch || excerptMatch || tagsMatch;
    });
  }, [initialPosts, searchQuery]);

  const paginatedPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * postsPerPage;
    return filteredPosts.slice(startIndex, startIndex + postsPerPage);
  }, [filteredPosts, currentPage]);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  // Get all unique tags
  const allTags = useMemo(() => {
    const tags = new Set();
    initialPosts.forEach(post => {
      post.tags.forEach(tag => tags.add(tag));
    });
    return Array.from(tags);
  }, [initialPosts]);

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
      <Header 
        showSearch={true} 
        onSearch={setSearchQuery}
      />
      
      <div className="max-w-4xl mx-auto p-4 pt-24">
        {/* Tags filter */}
        <div className="mb-8 flex flex-wrap gap-2">
          {allTags.map(tag => (
            <Link
              key={tag}
              href={`/blog/tags/${tag}`}
              className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 rounded-full 
                hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors dark:text-gray-300"
            >
              #{tag}
            </Link>
          ))}
        </div>

        {/* Search results count */}
        {searchQuery && (
          <p className="mb-4 text-gray-600 dark:text-gray-400">
            Found {filteredPosts.length} result{filteredPosts.length !== 1 ? 's' : ''} 
            for &quot;{searchQuery}&quot;
          </p>
        )}

        {/* Posts grid */}
        <div className="grid gap-4">
          {paginatedPosts.length > 0 ? (
            paginatedPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))
          ) : (
            <p className="text-center text-gray-600 dark:text-gray-400 py-8">
              No posts found matching your search criteria.
            </p>
          )}
        </div>

        {/* Pagination */}
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
      </div>
    </div>
  );
}