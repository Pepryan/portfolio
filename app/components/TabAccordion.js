"use client";
import { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import Skills from './Skills';
import Projects from './Projects';
import Certifications from './Certifications';

export default function TabAccordion() {
  const [activeSection, setActiveSection] = useState('skills');
  const [direction, setDirection] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const sections = [
    { id: 'skills', label: 'Skills', component: <Skills /> },
    { id: 'projects', label: 'Projects', component: <Projects /> },
    { id: 'certifications', label: 'Certifications', component: <Certifications /> }
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavigation = (id) => {
    const currentIndex = sections.findIndex(s => s.id === activeSection);
    const newIndex = sections.findIndex(s => s.id === id);
    setDirection(newIndex > currentIndex ? 1 : -1);
    setActiveSection(id);
  };

  // Desktop Circular Navigation
  const DesktopNavigation = () => {
    return (
      <div className="hidden md:block">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Tabs with improved spacing */}
          <div className="grid grid-cols-3 gap-8 mb-12">
            {sections.map((section) => (
              <motion.div
                key={section.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <button
                  onClick={() => handleNavigation(section.id)}
                  className={`
                    w-full h-48 flex flex-col items-center justify-center
                    text-2xl font-semibold text-center rounded-2xl
                    transition-all duration-300 ease-in-out
                    border-2 hover:shadow-lg
                    ${
                      activeSection === section.id
                        ? 'border-blue-500 dark:border-blue-400 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 shadow-lg'
                        : 'border-neutral-200 dark:border-neutral-700 bg-white/80 dark:bg-neutral-800/80 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-700/50'
                    }
                  `}
                >
                  <span className="text-5xl mb-4">
                    {section.id === 'skills' && '💻'}
                    {section.id === 'projects' && '🚀'}
                    {section.id === 'certifications' && '🏅'}
                  </span>
                  <span className="text-xl font-medium">
                    {section.label}
                  </span>
                </button>
              </motion.div>
            ))}
          </div>

          {/* Content Area with improved container */}
            <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
                className="bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm rounded-2xl shadow-xl 
                border border-neutral-200 dark:border-neutral-800 p-8"
            >
              {sections.find(s => s.id === activeSection)?.component}
            </motion.div>
            </AnimatePresence>

        </div>
      </div>
    );
  };

  // Mobile Swipeable Cards
  const MobileNavigation = () => {
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);
    const currentIndex = sections.findIndex(s => s.id === activeSection);

    const minSwipeDistance = 50;

    const onTouchStart = (e) => {
      setTouchEnd(null);
      setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

    const onTouchEnd = () => {
      if (!touchStart || !touchEnd) return;
      const distance = touchStart - touchEnd;
      const isLeftSwipe = distance > minSwipeDistance;
      const isRightSwipe = distance < -minSwipeDistance;

      if (isLeftSwipe) {
        const nextIndex = (currentIndex + 1) % sections.length;
        handleNavigation(sections[nextIndex].id);
      } else if (isRightSwipe) {
        const prevIndex = (currentIndex - 1 + sections.length) % sections.length;
        handleNavigation(sections[prevIndex].id);
      }
    };

    return (
      <div className="md:hidden px-2">
        {/* Static navigation controls - removed from AnimatePresence */}
        <div className="flex justify-between items-center mb-8 px-4 relative z-10">
          <button
            onClick={() => {
              const prevIndex = (currentIndex - 1 + sections.length) % sections.length;
              handleNavigation(sections[prevIndex].id);
            }}
            className="p-3 rounded-xl bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm shadow-md
              hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors
              border border-neutral-200 dark:border-neutral-700"
          >
            <FiChevronLeft className="w-6 h-6 text-neutral-700 dark:text-neutral-200" />
          </button>
          
          <div className="flex-1 mx-4">
            <div className="bg-white/90 dark:bg-neutral-800/90 backdrop-blur-sm rounded-xl p-4
              border border-neutral-200 dark:border-neutral-700 shadow-md">
              <h2 className="text-xl font-semibold text-neutral-800 dark:text-neutral-200 text-center">
                {sections[currentIndex].label}
              </h2>
            </div>
          </div>

          <button
            onClick={() => {
              const nextIndex = (currentIndex + 1) % sections.length;
              handleNavigation(sections[nextIndex].id);
            }}
            className="p-3 rounded-xl bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm shadow-md
              hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors
              border border-neutral-200 dark:border-neutral-700"
          >
            <FiChevronRight className="w-6 h-6 text-neutral-700 dark:text-neutral-200" />
          </button>
        </div>

        {/* Animated content area */}
        <div
          className="relative rounded-2xl bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm 
            shadow-lg border border-neutral-200 dark:border-neutral-700 mx-2 mb-8"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeSection}
              custom={direction}
              initial={{ opacity: 0, x: direction * 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -100 }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 30
              }}
              className="p-6"
            >
              {sections.find(s => s.id === activeSection)?.component}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    );
  };

  // Add custom scrollbar styles
  const styles = `
    .custom-scrollbar::-webkit-scrollbar {
      width: 8px;
    }

    .custom-scrollbar::-webkit-scrollbar-track {
      background: transparent;
    }

    .custom-scrollbar::-webkit-scrollbar-thumb {
      background-color: rgba(156, 163, 175, 0.5);
      border-radius: 4px;
    }

    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
      background-color: rgba(156, 163, 175, 0.7);
    }
  `;

  return (
    <div className="py-4 md:py-12">
      <div className="max-w-7xl mx-auto px-2 md:px-6">
        {isMobile ? <MobileNavigation /> : <DesktopNavigation />}
      </div>
    </div>
  );
}