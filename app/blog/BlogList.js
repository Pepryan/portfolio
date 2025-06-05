"use client";
import { useState, useMemo } from 'react';
import { useTheme } from '../context/ThemeContext';
import Link from 'next/link';
import { FiCalendar, FiClock, FiTag, FiArrowLeft, FiChevronDown, FiX } from 'react-icons/fi';
import Header from '../components/Header';
import Image from 'next/image';

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
  const [selectedTag, setSelectedTag] = useState('');
  const [isTagDropdownOpen, setIsTagDropdownOpen] = useState(false);
  // Add pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  const filteredPosts = useMemo(() => {
    let filtered = posts;
    
    // Filter by selected tag first
    if (selectedTag) {
      filtered = filtered.filter(post => 
        Array.isArray(post.tags) && post.tags.includes(selectedTag)
      );
    }
    
    // Then filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(query) ||
        (Array.isArray(post.tags) && post.tags.some(tag => tag.toLowerCase().includes(query)))
      );
    }
    
    return filtered;
  }, [posts, searchQuery, selectedTag]);

  // Add pagination logic
  const paginatedPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * postsPerPage;
    return filteredPosts.slice(startIndex, startIndex + postsPerPage);
  }, [filteredPosts, currentPage]);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  // Add safety check for tags
  const allTags = useMemo(() => {
    const tags = new Set();
    posts.forEach(post => {
      // Check if post.tags exists before iterating
      if (Array.isArray(post.tags)) {
        post.tags.forEach(tag => tags.add(tag));
      }
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

        {/* Enhanced Tags Filter */}
        <div className="mb-8 flex justify-center">
          {/* Unified Dropdown Design for Mobile and Desktop */}
          <div className="w-full max-w-md">
            <div className="relative">
              <button
                onClick={() => setIsTagDropdownOpen(!isTagDropdownOpen)}
                className="w-full flex items-center justify-between px-4 py-3 bg-white dark:bg-neutral-800 
                  border-2 border-neutral-200 dark:border-neutral-700 rounded-lg shadow-sm 
                  hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-200 
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <div className="flex items-center gap-2">
                  <FiTag className="w-4 h-4 text-neutral-500 dark:text-neutral-400" />
                  <span className="text-neutral-700 dark:text-neutral-300 font-medium">
                    {selectedTag ? `Selected: ${selectedTag}` : 'Filter by tags'}
                  </span>
                </div>
                <FiChevronDown className={`w-4 h-4 text-neutral-500 dark:text-neutral-400 transition-transform duration-200 ${
                  isTagDropdownOpen ? 'rotate-180' : ''
                }`} />
              </button>
              
              {/* Dropdown */}
              {isTagDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-neutral-800 rounded-lg 
                  shadow-xl border border-neutral-200 dark:border-neutral-700 z-50 max-h-64 overflow-y-auto">
                  <div className="p-3">
                    {/* Clear filter option */}
                    {selectedTag && (
                      <button
                        onClick={() => {
                          setSelectedTag('');
                          setIsTagDropdownOpen(false);
                          setCurrentPage(1);
                        }}
                        className="w-full flex items-center gap-2 px-3 py-2 mb-2 text-red-600 dark:text-red-400 
                          bg-red-50 dark:bg-red-900/20 rounded-md hover:bg-red-100 dark:hover:bg-red-900/30 
                          transition-colors text-left"
                      >
                        <FiX className="w-4 h-4" />
                        Clear filter
                      </button>
                    )}
                    
                    {/* Tags Grid - 2 columns for mobile, 3 for desktop */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {allTags.map(tag => (
                        <button
                          key={tag}
                          onClick={() => {
                            setSelectedTag(tag);
                            setIsTagDropdownOpen(false);
                            setCurrentPage(1);
                          }}
                          className={`flex items-center gap-1 px-3 py-2 text-sm rounded-md transition-all duration-200 
                            text-left hover:scale-[1.02] ${
                            selectedTag === tag
                              ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-300 dark:border-blue-600'
                              : 'bg-neutral-50 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-600'
                          }`}
                        >
                          <FiTag className="w-3 h-3 flex-shrink-0" />
                          <span className="truncate text-xs">{tag}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Selected Tag Banner */}
        {selectedTag && (
          <div className="mb-8 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-blue-700 dark:text-blue-300 font-medium">
                Showing posts tagged with &ldquo;{selectedTag}&rdquo;
              </span>
            </div>
            <span className="text-blue-600 dark:text-blue-400 text-sm">
              {filteredPosts.length} post{filteredPosts.length !== 1 ? 's' : ''}
            </span>
          </div>
        )}
        
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
                {/* Add image preview */}
                {post.thumbnail && (
                  <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                    <Image
                      src={post.thumbnail}
                      alt={post.title}
                      fill={true}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      priority={false}
                    />
                  </div>
                )}
                <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-2 
                  group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h2>
                
                <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                  {post.summary || post.excerpt}
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
                    <div className="flex items-center gap-1">
                      <FiClock className="w-4 h-4" />
                      <span>{post.readingTime} min read</span>
                    </div>
                  )}

                  {post.wordCount && (
                    <>
                      <span>·</span>
                      <span>{post.wordCount.toLocaleString()} words</span>
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