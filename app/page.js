// src/app/page.js
"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiHome, FiUser, FiBriefcase, FiBook, FiMail, FiAward } from 'react-icons/fi';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Education from './components/Education';
import Footer from './components/Footer';
import TabAccordion from './components/TabAccordion';

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
      
      <main className="max-w-7xl mx-auto px-4 py-8 mb-20">
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

        {/* Main Content Grid */}
        <div className="grid grid-cols-12 gap-8 mt-16">
          {/* Left Column - 8 cols */}
          <div className="col-span-12 lg:col-span-8">
            <section id="experience" className="py-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 75 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="relative text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mb-8
                  before:absolute before:-left-4 before:top-1/2 before:-translate-y-1/2
                  before:w-2 before:h-2 before:bg-blue-500 dark:before:bg-blue-400 
                  before:rounded-full">
                  Experience
                </h2>
                <Experience />
              </motion.div>
            </section>
          </div>

          {/* Right Column - 4 cols */}
          <div className="col-span-12 lg:col-span-4">
            {/* <div className="lg:sticky lg:top-20"> */}
              <section id="education" className="py-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 75 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="relative text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mb-8
                    before:absolute before:-left-4 before:top-1/2 before:-translate-y-1/2
                    before:w-2 before:h-2 before:bg-emerald-500 dark:before:bg-emerald-400 
                    before:rounded-full">
                    Education
                  </h2>
                  <Education />
                </motion.div>
              </section>
            {/* </div> */}
          </div>
        </div>

        {/* Skills & Certifications */}
        <section id="skills" className="py-16">
          <div className="mt-4 mb-8">
            <TabAccordion />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16">
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
                  ? 'bg-neutral-200/80 dark:bg-neutral-700/80 text-neutral-900 dark:text-neutral-100' 
                  : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100/80 dark:hover:bg-neutral-700/80'
                }`}
            >
              <Icon className="w-5 h-5" />
              
              {/* Tooltip */}
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 
                bg-neutral-800/90 dark:bg-neutral-700/90 text-white text-xs rounded 
                opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
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
