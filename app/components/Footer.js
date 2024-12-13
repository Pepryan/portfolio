import { FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800
      bg-white dark:bg-neutral-900">
      <div className="max-w-3xl mx-auto px-4 py-3 text-center">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          © 2024-present | Febryan Ramadhan. All rights reserved.
        </p>
        <p className="flex items-center justify-center gap-2 mt-0.5 
          text-xs text-neutral-500 dark:text-neutral-500">
          <FaHeart className="w-4 h-4" />
          <span>Built with Next.js and Claude AI</span>
        </p>
      </div>
    </footer>
  );
} 