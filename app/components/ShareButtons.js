"use client";
import { useState, useEffect } from 'react';
import { FiLinkedin, FiLink, FiCheck } from 'react-icons/fi';
import { FaXTwitter } from 'react-icons/fa6';
import { useAnalytics } from './GoogleAnalytics';

export default function ShareButtons({ title, slug }) {
  const [isCopied, setIsCopied] = useState(false);
  const [currentUrl, setCurrentUrl] = useState('');
  const { trackSocialClick } = useAnalytics();

  useEffect(() => {
    // Construct the full URL with the post slug
    const baseUrl = window.location.origin;
    const fullUrl = `${baseUrl}/portfolio/blog/${slug}/`;
    setCurrentUrl(fullUrl);
  }, [slug]);

  const shareOnTwitter = () => {
    trackSocialClick('twitter', 'blog_post');
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(currentUrl)}`,
      '_blank'
    );
  };

  const shareOnLinkedIn = () => {
    trackSocialClick('linkedin', 'blog_post');
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`,
      '_blank'
    );
  };

  const copyLink = async () => {
    try {
      trackSocialClick('copy_link', 'blog_post');
      await navigator.clipboard.writeText(currentUrl);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
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
          rounded-full transition-colors relative"
        aria-label="Copy link"
      >
        {isCopied ? (
          <FiCheck className="w-5 h-5 text-green-500" />
        ) : (
          <FiLink className="w-5 h-5" />
        )}
      </button>
    </div>
  );
} 
