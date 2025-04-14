"use client";
import { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { FiAward, FiCalendar, FiBriefcase } from 'react-icons/fi';

// Certifications data
const certificationGroups = {
  'Cloud & DevOps': [
    { 
      title: 'AWS Academy Cloud Architecting', 
      provider: 'AWS', 
      year: '2023',
      icon: '☁️'
    },
    { 
      title: 'Certified DevOps Professional', 
      provider: 'GitLab', 
      year: '2023',
      icon: '🔄'
    },
    { 
      title: 'Certified Security Specialist', 
      provider: 'GitLab', 
      year: '2022',
      icon: '🔒'
    },
    { 
      title: 'Certified CI/CD Associate', 
      provider: 'GitLab', 
      year: '2022',
      icon: '⚙️'
    },
    { 
      title: 'RHCSA Rapid Track Course', 
      provider: 'Btech', 
      year: '2022',
      icon: '🐧'
    },
  ],
  'Development': [
    { 
      title: 'Web Development Node.js', 
      provider: 'Progate', 
      year: '2020',
      icon: '🌐'
    },
    { 
      title: 'Web Development Ruby on Rails', 
      provider: 'Progate', 
      year: '2020',
      icon: '💎'
    },
    { 
      title: 'Memulai Pemrograman dengan Python', 
      provider: 'Dicoding', 
      year: '2020',
      icon: '🐍'
    },
  ],
  'Infrastructure & Networking': [
    { 
      title: 'Network and Infrastructure', 
      provider: 'Kominfo & BNSP', 
      year: '2019',
      icon: '🌐'
    },
    { 
      title: 'Digitalent Junior Network Administrator', 
      provider: 'Kominfo', 
      year: '2019',
      icon: '🖧'
    },
    { 
      title: 'OS Server Linux Ubuntu', 
      provider: 'LepKom Gunadarma', 
      year: '2017',
      icon: '🐧'
    },
  ]
};

// Certification Card Component
const CertificationCard = ({ category, certifications }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);
  
  // Category icons
  const categoryIcons = {
    'Cloud & DevOps': <FiBriefcase className="w-5 h-5" />,
    'Development': <FiAward className="w-5 h-5" />,
    'Infrastructure & Networking': <FiCalendar className="w-5 h-5" />
  };
  
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
        hover:shadow-2xl transition-all duration-300"
    >
      <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-6 pb-2 border-b border-neutral-200 dark:border-neutral-700 flex items-center">
        <span className="text-amber-500 dark:text-amber-400 mr-3">
          {categoryIcons[category]}
        </span>
        {category}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-white/50 dark:bg-neutral-700/50 rounded-xl p-4 border border-neutral-200 dark:border-neutral-600
              hover:border-amber-300 dark:hover:border-amber-500 transition-all duration-300 hover:shadow-md"
          >
            <div className="flex items-start">
              <div className="text-2xl mr-3">{cert.icon}</div>
              <div>
                <div className="text-neutral-900 dark:text-neutral-100 font-medium mb-2">
                  {cert.title}
                </div>
                <div className="text-neutral-600 dark:text-neutral-400 text-sm">
                  <span className="inline-flex items-center">
                    <FiAward className="w-4 h-4 mr-1.5 text-amber-500" />
                    {cert.provider} • {cert.year}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default function CertificationsGrid() {
  return (
    <div className="py-8">
      <div className="text-center mb-12">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-4"
        >
          Professional Certifications
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto"
        >
          Credentials that validate my expertise in cloud technologies, development, and infrastructure management.
        </motion.p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        {Object.entries(certificationGroups).map(([category, certs]) => (
          <CertificationCard key={category} category={category} certifications={certs} />
        ))}
      </div>
    </div>
  );
}
