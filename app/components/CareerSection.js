"use client";
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiBriefcase, FiAward, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import ExperienceTimeline from './ExperienceTimeline';
import EducationCards from './EducationCards';

export default function CareerSection() {
  const [activeTab, setActiveTab] = useState('experience');
  const ref = useRef(null);

  // We're now handling mobile/desktop view directly in the render function

  // Set default to mobile for SSR
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Removed animation control effect since we're using static opacity now

  // For mobile, we'll show a collapsible section
  // For desktop, we'll show a tabbed interface

  // Mobile Collapsible Section
  const MobileView = () => {
    // Default to expanded for better UX
    const [expExpanded, setExpExpanded] = useState(true);

    return (
      <div className="space-y-8">
        {/* Section Header */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
            Professional Journey
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm">
            My career path and educational background
          </p>
        </div>

        {/* Experience Section */}
        <div className="space-y-4">
          <div
            className="flex items-center justify-between p-4 bg-white/80 dark:bg-neutral-800/80
              rounded-xl border border-neutral-200 dark:border-neutral-700 shadow-sm"
            onClick={() => setExpExpanded(!expExpanded)}
          >
            <div className="flex items-center">
              <FiBriefcase className="mr-3 text-blue-500 dark:text-blue-400 w-5 h-5" />
              <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100">
                Work Experience
              </h3>
            </div>
            <button className="p-2 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-500 dark:text-blue-400">
              {expExpanded ? <FiChevronUp /> : <FiChevronDown />}
            </button>
          </div>

          {/* Experience content - always visible initially for better UX */}
          <div className={`overflow-hidden px-1 ${expExpanded ? 'block' : 'hidden'}`}>
            <ExperienceTimeline />
          </div>

          {/* Education Section - Always visible on mobile */}
          <div className="mt-8">
            <div className="flex items-center mb-4 p-4 bg-white/80 dark:bg-neutral-800/80
              rounded-xl border border-neutral-200 dark:border-neutral-700 shadow-sm">
              <FiAward className="mr-3 text-emerald-500 dark:text-emerald-400 w-5 h-5" />
              <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100">
                Education
              </h3>
            </div>
            <div className="px-1">
              <EducationCards />
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Desktop Tabbed Interface
  const DesktopView = () => (
    <div className="space-y-8">
      <motion.div
        ref={ref}
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-4 text-center">
          Professional Journey
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto text-center mb-8">
          My career path and educational background
        </p>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 rounded-xl bg-neutral-100 dark:bg-neutral-800 shadow-inner">
            <button
              onClick={() => setActiveTab('experience')}
              className={`px-6 py-3 rounded-lg font-medium text-base flex items-center
                transition-all duration-300
                ${activeTab === 'experience'
                  ? 'bg-white dark:bg-neutral-700 text-blue-600 dark:text-blue-400 shadow-md'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-blue-500 dark:hover:text-blue-300'
                }`}
            >
              <FiBriefcase className={`mr-2 ${activeTab === 'experience' ? 'text-blue-500 dark:text-blue-400' : ''}`} />
              Experience
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`px-6 py-3 rounded-lg font-medium text-base flex items-center
                transition-all duration-300
                ${activeTab === 'education'
                  ? 'bg-white dark:bg-neutral-700 text-emerald-600 dark:text-emerald-400 shadow-md'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-emerald-500 dark:hover:text-emerald-300'
                }`}
            >
              <FiAward className={`mr-2 ${activeTab === 'education' ? 'text-emerald-500 dark:text-emerald-400' : ''}`} />
              Education
            </button>
          </div>
        </div>
      </motion.div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === 'experience' ? <ExperienceTimeline /> : <EducationCards />}
        </motion.div>
      </AnimatePresence>
    </div>
  );

  // Don't render anything until after client-side hydration
  if (!mounted) {
    return <div className="min-h-[300px] flex items-center justify-center">
      <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div>;
  }

  // Use window.innerWidth directly for the initial render after mounting
  const isMobileView = typeof window !== 'undefined' ? window.innerWidth < 768 : false;
  return isMobileView ? <MobileView /> : <DesktopView />;
}
