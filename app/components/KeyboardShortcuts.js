"use client";
import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useTheme } from '../context/ThemeContext';

export default function KeyboardShortcuts({ onToggleShortcuts }) {
  const router = useRouter();
  const pathname = usePathname();
  const { toggleDarkMode } = useTheme();

  useEffect(() => {
    const handleKeyPress = (e) => {
      // Ignore if meta or control key is pressed (browser shortcuts)
      if (e.metaKey || e.ctrlKey) return;
      
      // Only trigger if no input/textarea is focused
      if (['input', 'textarea'].includes(e.target?.tagName?.toLowerCase())) {
        return;
      }

      // Get current page context
      const isBlogList = pathname === '/blog' || pathname === '/blog/';
      const isBlogPost = pathname.startsWith('/blog/') && pathname !== '/blog' && pathname !== '/blog/';

      switch(e.key) {
        case 'h':
          e.preventDefault(); // Prevent browser's history
          router.push('/');
          break;
        case 'b':
          e.preventDefault();
          router.push('/blog');
          break;
        case 't':
          e.preventDefault();
          toggleDarkMode();
          break;
        case 'k':
          if (isBlogList) {
            e.preventDefault();
            const searchButton = document.querySelector('[data-search-trigger]');
            if (searchButton instanceof HTMLElement) {
              searchButton.click();
            }
          }
          break;
        case 'ArrowLeft':
          if (isBlogPost) {
            e.preventDefault();
            const prevButton = document.querySelector('[data-prev-post]');
            if (prevButton instanceof HTMLElement) {
              prevButton.click();
            }
          }
          break;
        case 'ArrowRight':
          if (isBlogPost) {
            e.preventDefault();
            const nextButton = document.querySelector('[data-next-post]');
            if (nextButton instanceof HTMLElement) {
              nextButton.click();
            }
          }
          break;
        case '?':
          e.preventDefault();
          if (onToggleShortcuts) onToggleShortcuts();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [router, pathname, toggleDarkMode, onToggleShortcuts]);

  return null;
} 