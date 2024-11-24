"use client";
import { useTheme } from '../../../context/ThemeContext';
import Link from 'next/link';
import { FiArrowLeft, FiHome, FiSun, FiMoon } from 'react-icons/fi';
import BlogCard from '../../../components/BlogCard';
import Header from '../../../components/Header';

export default function TagPageClient({ tag, posts }) {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
      <Header showSearch={false} />

      <div className="max-w-4xl mx-auto p-4 mt-20">
        <h1 className="text-4xl font-bold mb-8 dark:text-white">Posts tagged with #{tag}</h1>
        <div className="grid gap-4">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
} 