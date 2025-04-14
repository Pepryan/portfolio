// src/app/page.js
"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiHome, FiUser, FiBriefcase, FiAward } from 'react-icons/fi';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import CareerSection from './components/CareerSection';
import Footer from './components/Footer';
import PortfolioSection from './components/PortfolioSection';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    setMounted(true);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const threshold = entry.target.id === 'home' ? 0.8 : 0.2;
          if (entry.intersectionRatio > threshold) {
            setActiveSection(entry.target.id);
          }
        }
      });
    }, {
      threshold: [0.2, 0.8],
      rootMargin: '-20% 0px -20% 0px'
    });

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  if (!mounted) return null;

  const navItems = [
    { id: 'home', icon: FiHome, label: 'Home' },
    { id: 'about', icon: FiUser, label: 'About' },
    { id: 'experience', icon: FiBriefcase, label: 'Experience-Education' },
    // { id: 'education', icon: FiBook, label: 'Education' },
    { id: 'skills', icon: FiAward, label: 'Skills-Project-Cert' }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-4 mb-10">
        {/* Hero Section - full height */}
        <section id="home" className="min-h-[90vh] sm:min-h-screen flex items-center justify-center -mt-16 px-4">
          <div className="w-full max-w-4xl mx-auto">
            <Hero />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 sm:py-24 mt-8 sm:mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.1 }}
          >

            <About />
          </motion.div>
        </section>

        {/* Career Section - Experience & Education */}
        <section id="experience" className="py-16 sm:py-24 mt-8 sm:mt-16 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.1 }}
          >

            <CareerSection />
          </motion.div>
        </section>

        {/* Portfolio Section - Skills, Projects & Certifications */}
        <section id="skills" className="py-16 sm:py-24 mt-8 sm:mt-16 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.1 }}
          >

            <PortfolioSection />
          </motion.div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 sm:py-24 mt-8 sm:mt-16">
            <Contact />
        </section>
      </main>

      {/* Floating Navigation */}
      <nav className="fixed bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 px-3 py-3 sm:px-4 sm:py-3
        bg-white/70 dark:bg-neutral-800/70 backdrop-blur-md rounded-full
        shadow-lg border border-neutral-200 dark:border-neutral-700 z-40">
        <motion.div
          className="flex items-center gap-3 sm:gap-4"
          initial={{ scale: 0.8, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ delay: 0.5, type: 'spring', stiffness: 200, damping: 20 }}
        >
          {navItems.map(({ id, icon: Icon, label }) => {
            const isActive = activeSection === id;
            return (
              <motion.button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`relative p-2 sm:p-2.5 rounded-full transition-all duration-300 group
                  ${isActive
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md'
                    : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-700/70'
                  }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-5 h-5" />

                {/* Active indicator dot for mobile */}
                {isActive && (
                  <motion.span
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full sm:hidden"
                    layoutId="activeIndicator"
                  />
                )}

                {/* Tooltip - Hidden on mobile */}
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1
                  bg-neutral-800/90 dark:bg-neutral-700/90 text-white text-xs rounded
                  opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap
                  hidden sm:block">
                  {label}
                </span>
              </motion.button>
            );
          })}
        </motion.div>
      </nav>

      <Footer />
    </div>
  );
}
