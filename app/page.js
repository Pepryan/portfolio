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
        <section id="home" className="min-h-screen flex items-center justify-center -mt-16">
          <div className="w-full max-w-3xl mx-auto text-center">
            <Hero />
          </div>
        </section>

        {/* About Section - tambah spacing */}
        <section id="about" className="py-32 mt-16">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mb-8">About</h2>
            <About />
          </motion.div>
        </section>

        {/* Career Section - Experience & Education */}
        <section id="experience" className="py-8 md:py-16 mt-16 md:mt-20 mb-8">
          <CareerSection />
        </section>

        {/* Portfolio Section - Skills, Projects & Certifications */}
        <section id="skills" className="mt-16 md:mt-20 mb-16">
          <PortfolioSection />
        </section>

        {/* Contact Section */}
        <section id="contact">
          <Contact />
        </section>
      </main>

      {/* Floating Navigation */}
      <nav className="fixed bottom-12 left-1/2 -translate-x-1/2 px-4 py-3
        bg-white/50 dark:bg-neutral-800/50 backdrop-blur-sm rounded-full
        shadow-lg border border-neutral-200 dark:border-neutral-700 z-40">
        <motion.div
          className="flex items-center gap-2 sm:gap-4"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {navItems.map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`p-2 rounded-full transition-all duration-300 group relative
                ${activeSection === id
                  ? 'text-neutral-900 dark:text-neutral-100'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200'
                }`}
            >
              <Icon className="w-5 h-5" />

              {/* Tooltip - Hidden on mobile */}
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1
                bg-neutral-800/90 dark:bg-neutral-700/90 text-white text-xs rounded
                opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap
                hidden sm:block">
                {label}
              </span>
            </button>
          ))}
        </motion.div>
      </nav>

      <Footer />
    </div>
  );
}
