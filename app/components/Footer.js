import { FiCoffee } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col items-center justify-center space-y-2 text-sm text-gray-600 dark:text-gray-400">
          <p className="flex items-center gap-2">
            <span>© 2024 Febryan Ramadhan. All rights reserved.</span>
          </p>
          <p className="flex items-center gap-2">
            <FiCoffee className="text-blue-500" />
            <span>Built with Next.js, Tailwind CSS, and</span>
            <a 
              href="https://www.anthropic.com/claude" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
            >
              Claude AI
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 