"use client";
import { FiLinkedin, FiLink } from 'react-icons/fi';
import { FaXTwitter } from 'react-icons/fa6';

export default function ShareButtons({ title, url }) {
  const shareOnTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
      '_blank'
    );
  };

  const shareOnLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      '_blank'
    );
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      // You might want to add a toast notification here
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={shareOnTwitter}
        className="p-2 text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 
          dark:hover:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 
          rounded-full transition-colors"
        aria-label="Share on X"
      >
        <FaXTwitter className="w-5 h-5" />
      </button>
      
      <button
        onClick={shareOnLinkedIn}
        className="p-2 text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 
          dark:hover:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 
          rounded-full transition-colors"
        aria-label="Share on LinkedIn"
      >
        <FiLinkedin className="w-5 h-5" />
      </button>
      
      <button
        onClick={copyLink}
        className="p-2 text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 
          dark:hover:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 
          rounded-full transition-colors"
        aria-label="Copy link"
      >
        <FiLink className="w-5 h-5" />
      </button>
    </div>
  );
} 