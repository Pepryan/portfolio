"use client";
import { useState, useEffect, useRef } from 'react';
import { FiSearch, FiX } from 'react-icons/fi';

export default function SearchInput({ onSearch }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  const handleClear = () => {
    setQuery('');
    onSearch('');
    inputRef.current?.focus();
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      onSearch(query);
    }, 300);

    return () => clearTimeout(handler);
  }, [query, onSearch]);

  return (
    <div className="relative">
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search posts..."
          className="w-full px-4 py-2 pl-10 pr-10 bg-white dark:bg-neutral-800 
            border border-neutral-200 dark:border-neutral-700 rounded-lg
            text-neutral-900 dark:text-neutral-100 placeholder-neutral-500
            focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 
          text-neutral-500" />
        {query && (
          <button
            onClick={handleClear}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1 
              hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded-full"
          >
            <FiX className="w-4 h-4 text-neutral-500" />
          </button>
        )}
      </div>
    </div>
  );
} 