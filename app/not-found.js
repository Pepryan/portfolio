"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiHome, FiUser, FiBriefcase, FiAward, FiArrowLeft, FiSearch, FiBookOpen } from 'react-icons/fi';

export default function NotFound() {

  // Navigation items matching the main site
  const quickNavItems = [
    { href: '/#home', icon: FiHome, label: 'Home', description: 'Back to homepage' },
    { href: '/#about', icon: FiUser, label: 'About', description: 'Learn about me' },
    { href: '/#experience', icon: FiBriefcase, label: 'Experience', description: 'My work history' },
    { href: '/#skills', icon: FiAward, label: 'Skills & Projects', description: 'My expertise' },
    { href: '/blog', icon: FiBookOpen, label: 'Blog', description: 'Read my articles' }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 flex items-center justify-center px-4 py-8">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* 404 Number */}
        <motion.div
          className="relative mb-8"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <motion.div
            className="text-8xl md:text-9xl font-bold bg-clip-text text-transparent
              bg-gradient-to-r from-blue-600 to-purple-600
              dark:from-blue-400 dark:to-purple-400 select-none"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            404
          </motion.div>

          {/* Decorative elements */}
          <motion.div
            className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500/20 rounded-full"
            animate={{ scale: [1, 1.2, 1], rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500/20 rounded-full"
            animate={{ scale: [1.2, 1, 1.2], rotate: -360 }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />
        </motion.div>

        {/* Error Message */}
        <motion.div
          className="space-y-4 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-200">
            Oops! Page Not Found
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            The page you&apos;re looking for seems to have wandered off into the digital void.
            Don&apos;t worry, even the best explorers sometimes take a wrong turn!
          </p>
        </motion.div>

        {/* Search Suggestion */}
        <motion.div
          className="bg-neutral-50 dark:bg-neutral-800/50 rounded-2xl p-6 mb-12 border border-neutral-200 dark:border-neutral-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <FiSearch className="w-5 h-5 text-blue-500" />
            <h2 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200">
              What were you looking for?
            </h2>
          </div>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm">
            Try checking the URL for typos, or use the navigation below to find what you need.
          </p>
        </motion.div>

        {/* Quick Navigation Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          {quickNavItems.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href={item.href}
                className="block p-6 bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700
                  hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300
                  hover:shadow-lg dark:hover:shadow-blue-500/10 group"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white
                    group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-neutral-800 dark:text-neutral-200">
                    {item.label}
                  </h3>
                </div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 text-left">
                  {item.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Back to Home Button */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.5 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 text-white
                bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600
                dark:from-blue-600 dark:to-purple-600 dark:hover:from-blue-500 dark:hover:to-purple-500
                rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <FiArrowLeft className="w-4 h-4" />
              Take Me Home
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 text-neutral-700 dark:text-neutral-300
                bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700
                rounded-full border border-neutral-300 dark:border-neutral-600
                hover:border-neutral-400 dark:hover:border-neutral-500
                transition-all duration-300"
            >
              <FiBookOpen className="w-4 h-4" />
              Browse Blog
            </Link>
          </motion.div>
        </motion.div>

        {/* Fun fact or tip */}
        <motion.div
          className="mt-12 p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20
            rounded-lg border border-blue-200 dark:border-blue-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            💡 <strong>Pro tip:</strong> You can use the keyboard shortcut <kbd className="px-2 py-1 bg-neutral-200 dark:bg-neutral-700 rounded text-xs">?</kbd>
            {" "}on any page to see available shortcuts and navigation options.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
