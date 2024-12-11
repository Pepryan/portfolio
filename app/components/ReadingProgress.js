"use client";
import { useState, useEffect } from 'react';
import { FiArrowUp } from 'react-icons/fi';

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const updateProgress = () => {
      const main = document.querySelector('main');
      if (!main) return;

      // Get the total scrollable height (including elements after article)
      const totalHeight = main.clientHeight - window.innerHeight;
      const scrolled = window.scrollY - main.offsetTop;
      
      // Calculate progress as percentage of total scrollable content
      const progress = Math.min(Math.max((scrolled / totalHeight) * 100, 0), 100);
      
      setProgress(progress);
      setShowBackToTop(window.scrollY > 300);
    };

    // Initial check
    updateProgress();
    window.addEventListener('scroll', updateProgress);
    window.addEventListener('resize', updateProgress);

    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* Reading Progress Bar */}
      <div className="fixed top-16 left-0 w-full h-1 bg-neutral-200 dark:bg-neutral-800 z-40">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed right-4 md:right-8 bottom-4 md:bottom-8 p-3 rounded-full 
          bg-blue-500 hover:bg-blue-600 text-white shadow-lg transition-all duration-300 
          z-50 group ${showBackToTop 
            ? 'translate-y-0 opacity-100' 
            : 'translate-y-16 opacity-0 pointer-events-none'
          }`}
        aria-label="Back to top"
      >
        <FiArrowUp className="w-5 h-5" />
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 
          bg-neutral-800/90 text-white text-xs rounded opacity-0 
          group-hover:opacity-100 transition-opacity whitespace-nowrap 
          pointer-events-none">
          Back to top
        </div>
      </button>
    </>
  );
} 