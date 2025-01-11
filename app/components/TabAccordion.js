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
          {/* Section Tabs */}
          <div className="grid grid-cols-3 gap-6 mb-16">
            {sections.map((section) => (
              <motion.div
                key={section.id}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <button
                  onClick={() => handleNavigation(section.id)}
                  className={`
                    w-full h-40 flex flex-col items-center justify-center
                    text-2xl font-semibold text-center rounded-3xl
                    transition-all duration-200
                    border-2
                    ${
                      activeSection === section.id
                        ? 'border-blue-600 dark:border-blue-400 bg-blue-600/10 dark:bg-blue-400/10 text-blue-600 dark:text-blue-400 shadow-lg'
                        : 'border-neutral-200/50 dark:border-neutral-700/50 bg-white/30 dark:bg-neutral-800/30 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100/50 dark:hover:bg-neutral-700/30 backdrop-blur-sm'
                    }
                  `}
                >
                  <span className="text-4xl mb-3">
                    {section.id === 'skills' && '💻'}
                    {section.id === 'projects' && '🚀'}
                    {section.id === 'certifications' && '🏅'}
                  </span>
                  <span className="text-lg font-medium">
                    {section.label}
                  </span>
                </button>
              </motion.div>
            ))}
          </div>

          {/* Content Area */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-neutral-900 rounded-2xl shadow-lg border border-neutral-100 dark:border-neutral-800 p-8"
            >
              <div className="h-[60vh] overflow-y-auto">
                {sections.find(s => s.id === activeSection)?.component}
              </div>
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
      <div className="md:hidden">
        {/* Section Selector */}
        <div className="flex justify-between items-center mb-10 px-6">
          <button
            onClick={() => {
              const prevIndex = (currentIndex - 1 + sections.length) % sections.length;
              handleNavigation(sections[prevIndex].id);
            }}
            className="p-3 rounded-xl hover:bg-neutral-100/50 dark:hover:bg-neutral-700/30 text-neutral-700 dark:text-neutral-300 transition-colors"
          >
            <FiChevronLeft className="w-6 h-6" />
          </button>
          
          <div className="flex-1 mx-6">
            <div className="bg-white/60 dark:bg-neutral-800/60 backdrop-blur-sm rounded-xl p-3 border border-neutral-100/50 dark:border-neutral-700/50">
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
            className="p-3 rounded-xl hover:bg-neutral-100/50 dark:hover:bg-neutral-700/30 text-neutral-700 dark:text-neutral-300 transition-colors"
          >
            <FiChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Content Area */}
        <div
          className="relative rounded-2xl bg-white dark:bg-neutral-900 shadow-lg border border-neutral-100 dark:border-neutral-700 mx-4 mb-4"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <AnimatePresence custom={direction}>
            <motion.div
              key={activeSection}
              custom={direction}
              initial={{ opacity: 0, x: direction * 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -100 }}
              transition={{
                type: 'tween',
                ease: 'easeInOut',
                duration: 0.3
              }}
              className="p-6"
              style={{ willChange: 'transform, opacity' }}
            >
              {sections.find(s => s.id === activeSection)?.component}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    );
  };

  return (
    <div className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6">
        {isMobile ? <MobileNavigation /> : <DesktopNavigation />}
      </div>
    </div>
  );
}