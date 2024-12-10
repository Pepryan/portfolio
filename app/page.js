// src/app/page.js
"use client";
import { useState, useEffect } from 'react';
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

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Hero & About Section - Full Width */}
        <div className="mb-2">
          <Hero />
        </div>

        <div className="mb-2">
          <h2 className="text-lg font-medium text-neutral-900 dark:text-neutral-100">About</h2>
          <About />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-12 gap-8">
          {/* Left Column - 8 cols */}
          <div className="col-span-12 lg:col-span-8 space-y-16">
            <section>
              <h2 className="text-lg font-medium mb-6 text-neutral-900 dark:text-neutral-100">Experience</h2>
              <Experience />
            </section>

          </div>

          {/* Right Column - 4 cols */}
          <div className="col-span-12 lg:col-span-4 space-y-16">
            <div className="sticky top-20">
              <section>
                <Contact />
              </section>

              <section className="mb-12">
                <h2 className="text-lg font-medium mb-6 text-neutral-900 dark:text-neutral-100">Education</h2>
                <Education />
              </section>
            </div>
          </div>
        </div>

        {/* Skills & Certifications - Two Columns Full Width */}
        <div className="mt-16">
          <TabAccordion />
        </div>
      </main>

      <Footer />
    </div>
  );
}
