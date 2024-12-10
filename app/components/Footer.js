import { FiCoffee } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 py-6 text-sm text-neutral-600 dark:text-neutral-400">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <p>© 2024 Febryan Ramadhan. All rights reserved.</p>
        <p className="flex items-center justify-center gap-1 mt-1">
          <FiCoffee />
          <span>Built with Next.js and Claude AI</span>
        </p>
      </div>
    </footer>
  );
} 