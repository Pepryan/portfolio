"use client";
import { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { FiCode, FiServer, FiMonitor, FiCheck } from 'react-icons/fi';

// Skill category icons
const categoryIcons = {
  'Languages & Frameworks': <FiCode className="w-5 h-5" />,
  'Cloud & Infrastructure': <FiServer className="w-5 h-5" />,
  'Monitoring & Tools': <FiMonitor className="w-5 h-5" />
};

// Skill data with levels
const skills = {
  'Languages & Frameworks': [
    { name: 'Python', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'React', level: 80 },
    { name: 'Next.js', level: 85 },
    { name: 'PHP', level: 75 },
    { name: 'Bash', level: 90 },
  ],
  'Cloud & Infrastructure': [
    { name: 'AWS', level: 85 },
    { name: 'OpenStack', level: 95 },
    { name: 'Docker', level: 90 },
    { name: 'Kubernetes', level: 80 },
    { name: 'Terraform', level: 75 },
  ],
  'Monitoring & Tools': [
    { name: 'Grafana', level: 85 },
    { name: 'Prometheus', level: 80 },
    { name: 'ELK Stack', level: 75 },
    { name: 'Git', level: 90 },
    { name: 'Jenkins', level: 80 },
    { name: 'GitLab CI', level: 85 },
  ]
};

// Skill Card Component
const SkillCard = ({ category, items }) => {
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
      className="bg-gradient-to-br from-white/90 to-white/70 dark:from-neutral-800/90 dark:to-neutral-800/70 
        backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-neutral-200/50 dark:border-neutral-700/50
        hover:shadow-2xl transition-all duration-300 h-full"
    >
      <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-6 pb-2 border-b border-neutral-200 dark:border-neutral-700 flex items-center">
        <span className="text-emerald-500 dark:text-emerald-400 mr-3">
          {categoryIcons[category] || <FiCheck />}
        </span>
        {category}
      </h3>
      <div className="space-y-5">
        {items.map((skill, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-base font-medium text-neutral-800 dark:text-neutral-200">
                {skill.name}
              </span>
              <span className="text-sm text-neutral-500 dark:text-neutral-400">
                {skill.level}%
              </span>
            </div>
            <div className="w-full h-2 bg-neutral-200 dark:bg-neutral-700 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: 0.2 + index * 0.1, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-emerald-500 to-blue-500 dark:from-emerald-400 dark:to-blue-400 rounded-full"
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default function SkillsGrid() {
  return (
    <div className="py-8">
      <div className="text-center mb-12">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-4"
        >
          Technical Skills
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto"
        >
          My expertise spans across various technologies and tools in cloud engineering and web development.
        </motion.p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {Object.entries(skills).map(([category, items]) => (
          <SkillCard key={category} category={category} items={items} />
        ))}
      </div>
    </div>
  );
}
