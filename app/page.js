// src/app/page.js
"use client";
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Certifications from "./components/Certifications";
import Experience from './components/Experience';
import Education from './components/Education';
import { FiUser, FiBook, FiBriefcase, FiCode, FiAward, FiFolder, FiMail, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from './components/Footer';

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero');
  const [mounted, setMounted] = useState(false);
  const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const sections = [
    { id: 'about', icon: <FiUser />, label: 'About' },
    { id: 'education', icon: <FiBook />, label: 'Education' },
    { id: 'experience', icon: <FiBriefcase />, label: 'Experience' },
    { id: 'skills', icon: <FiCode />, label: 'Skills' },
    { id: 'certifications', icon: <FiAward />, label: 'Certifications' },
    { id: 'projects', icon: <FiFolder />, label: 'Projects' },
    { id: 'contact', icon: <FiMail />, label: 'Contact' },
  ];

  const renderContent = () => {
    const components = {
      hero: <Hero onExplore={() => setActiveSection('about')} />,
      about: <About />,
      education: <Education />,
      experience: <Experience />,
      skills: <Skills />,
      certifications: <Certifications />,
      projects: <Projects />,
      contact: <Contact />,
    };

    return (
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="h-full"
        >
          {components[activeSection]}
        </motion.div>
      </AnimatePresence>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
      <Header setActiveSection={setActiveSection} />
      <div className="flex flex-1 overflow-hidden pt-14">
        {activeSection !== 'hero' && (
          <>
            <motion.nav
              initial={{ width: 0 }}
              animate={{ width: isNavbarCollapsed ? '80px' : '272px' }}
              className="relative bg-gray-50 dark:bg-gray-800 flex-shrink-0 border-r border-gray-200 dark:border-gray-700"
            >
              <div className="sticky top-0 p-4 space-y-2">
                {sections.map((section) => (
                  <motion.button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    whileHover={{ x: 5 }}
                    className={`flex items-center justify-${isNavbarCollapsed ? 'center' : 'start'} w-full p-3 rounded-xl transition-all duration-200 ${
                      activeSection === section.id
                        ? 'bg-blue-500 text-white shadow-lg'
                        : 'text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                    title={section.label}
                  >
                    <span className="text-xl">{section.icon}</span>
                    {!isNavbarCollapsed && (
                      <span className="ml-3 font-medium">{section.label}</span>
                    )}
                  </motion.button>
                ))}
              </div>
              
              <button
                onClick={() => setIsNavbarCollapsed(!isNavbarCollapsed)}
                className="absolute -right-4 top-6 bg-blue-500 text-white p-2 rounded-full shadow-lg hover:bg-blue-600 transition-colors z-10"
                style={{ transform: 'translateX(100%)' }}
              >
                {isNavbarCollapsed ? <FiChevronRight size={16} /> : <FiChevronLeft size={16} />}
              </button>
            </motion.nav>
          </>
        )}

        <main className="flex-1 overflow-y-auto">
          {renderContent()}
          {activeSection !== 'hero' && <Footer />}
        </main>
      </div>
    </div>
  );
}
