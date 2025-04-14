"use client";
import { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { FiArrowDown } from 'react-icons/fi';

// Import our grid components
import SkillsGrid from './SkillsGrid';
import ProjectsGrid from './ProjectsGrid';
import CertificationsGrid from './CertificationsGrid';

// Section divider component
const SectionDivider = ({ title }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);
  
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
      }}
      className="flex items-center justify-center my-16 md:my-24"
    >
      <div className="w-full max-w-xs md:max-w-md flex items-center">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent"></div>
        <div className="px-4 py-2 bg-gradient-to-r from-blue-500 to-emerald-500 text-white rounded-full font-bold text-lg md:text-xl mx-4">
          {title}
        </div>
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent"></div>
      </div>
    </motion.div>
  );
};

// Scroll indicator component
const ScrollIndicator = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ 
        opacity: [0, 1, 0],
        y: [0, 10, 0]
      }}
      transition={{ 
        duration: 2,
        repeat: Infinity,
        repeatType: "loop"
      }}
      className="flex flex-col items-center justify-center mt-8 mb-16"
    >
      <p className="text-neutral-600 dark:text-neutral-400 mb-2">Scroll to explore</p>
      <FiArrowDown className="w-6 h-6 text-blue-500 dark:text-blue-400" />
    </motion.div>
  );
};

export default function PortfolioUnified() {
  return (
    <div className="py-8 md:py-16">
      {/* Main Header */}
      <div className="text-center mb-12">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100 mb-4"
        >
          My Portfolio
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto text-lg"
        >
          A showcase of my skills, projects, and professional certifications
        </motion.p>
        
        <ScrollIndicator />
      </div>
      
      {/* Skills Section */}
      <section>
        <SectionDivider title="Skills" />
        <SkillsGrid />
      </section>
      
      {/* Projects Section */}
      <section>
        <SectionDivider title="Projects" />
        <ProjectsGrid />
      </section>
      
      {/* Certifications Section */}
      <section>
        <SectionDivider title="Certifications" />
        <CertificationsGrid />
      </section>
    </div>
  );
}
