"use client";
import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useAnimation, AnimatePresence } from 'framer-motion';
import { FiCheck, FiGithub, FiExternalLink, FiAward, FiArrowRight, FiCode, FiServer, FiMonitor } from 'react-icons/fi';

// Skills data
const skills = {
  'Languages & Frameworks': [
    { name: 'Python', level: 90, icon: <FiCode /> },
    { name: 'JavaScript', level: 85, icon: <FiCode /> },
    { name: 'React', level: 80, icon: <FiCode /> },
    { name: 'Next.js', level: 85, icon: <FiCode /> },
    { name: 'PHP', level: 75, icon: <FiCode /> },
    { name: 'Bash', level: 90, icon: <FiCode /> },
  ],
  'Cloud & Infrastructure': [
    { name: 'AWS', level: 85, icon: <FiServer /> },
    { name: 'OpenStack', level: 95, icon: <FiServer /> },
    { name: 'Docker', level: 90, icon: <FiServer /> },
    { name: 'Kubernetes', level: 80, icon: <FiServer /> },
    { name: 'Terraform', level: 75, icon: <FiServer /> },
  ],
  'Monitoring & Tools': [
    { name: 'Grafana', level: 85, icon: <FiMonitor /> },
    { name: 'Prometheus', level: 80, icon: <FiMonitor /> },
    { name: 'ELK Stack', level: 75, icon: <FiMonitor /> },
    { name: 'Git', level: 90, icon: <FiMonitor /> },
    { name: 'Jenkins', level: 80, icon: <FiMonitor /> },
    { name: 'GitLab CI', level: 85, icon: <FiMonitor /> },
  ]
};

// Projects data
const projects = [
  {
    title: 'OpenStack Resource Management',
    description: 'Automated OpenStack resource management system using Python and Bash scripts. Includes monitoring, scaling, and optimization features for cloud infrastructure.',
    technologies: ['OpenStack', 'Python', 'Bash', 'Prometheus', 'Grafana'],
    link: 'https://github.com/Pepryan/openstack-resource',
    featured: true
  },
  {
    title: 'Digital Wedding Invitation',
    description: 'Modern digital wedding invitation platform built with Next.js and TailwindCSS. Features RSVP management, guest list tracking, and responsive design.',
    technologies: ['Next.js', 'TailwindCSS', 'React', 'Vercel'],
    link: 'https://github.com/Pepryan/wedding-invitation',
    featured: true
  },
  {
    title: 'Personal Portfolio',
    description: 'Personal portfolio website built with Next.js, featuring blog functionality, dark mode, and MDX support for content management.',
    technologies: ['Next.js', 'TailwindCSS', 'MDX', 'React'],
    link: 'https://github.com/Pepryan/portfolio',
    featured: true
  },
  {
    title: 'Infrastructure Automation Lab',
    description: 'Comprehensive lab environment for automating KVM provisioning and infrastructure management. Features automated VM deployment, configuration management, and monitoring integration.',
    technologies: ['Ansible', 'KVM', 'Linux', 'Bash', 'GitLab CI'],
    link: 'https://gitlab.com/Pepryan/automation-provisioning-kvm-lab-btech'
  },
  {
    title: 'Movies Management System',
    description: 'Full-stack movie management application with features for tracking, rating, and reviewing movies. Built using modern web technologies.',
    technologies: ['Laravel', 'Vue.js', 'PostgreSQL', 'Docker'],
    link: 'https://gitlab.com/Pepryan/movies_ob19'
  },
  {
    title: 'Phalcon Web Application',
    description: 'Web application built with Phalcon PHP framework, demonstrating MVC architecture and efficient database operations.',
    technologies: ['PHP', 'Phalcon', 'MySQL', 'Bootstrap'],
    link: 'https://gitlab.com/Pepryan/phalcon'
  }
];

// Certifications data
const certificationGroups = {
  'Cloud & DevOps': [
    { title: 'AWS Academy Cloud Architecting', provider: 'AWS', year: '2023' },
    { title: 'Certified DevOps Professional', provider: 'GitLab', year: '2023' },
    { title: 'Certified Security Specialist', provider: 'GitLab', year: '2022' },
    { title: 'Certified CI/CD Associate', provider: 'GitLab', year: '2022' },
    { title: 'RHCSA Rapid Track Course', provider: 'Btech', year: '2022' },
  ],
  'Development': [
    { title: 'Web Development Node.js', provider: 'Progate', year: '2020' },
    { title: 'Web Development Ruby on Rails', provider: 'Progate', year: '2020' },
    { title: 'Memulai Pemrograman dengan Python', provider: 'Dicoding', year: '2020' },
  ],
  'Infrastructure & Networking': [
    { title: 'Network and Infrastructure', provider: 'Kominfo & BNSP', year: '2019' },
    { title: 'Digitalent Junior Network Administrator', provider: 'Kominfo', year: '2019' },
    { title: 'OS Server Linux Ubuntu', provider: 'LepKom Gunadarma', year: '2017' },
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
      <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-6 pb-2 border-b border-neutral-200 dark:border-neutral-700">
        {category}
      </h3>
      <div className="space-y-5">
        {items.map((skill, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <span className="text-emerald-500 dark:text-emerald-400">
                  {skill.icon || <FiCheck className="w-5 h-5" />}
                </span>
                <span className="text-base font-medium text-neutral-800 dark:text-neutral-200">
                  {skill.name}
                </span>
              </div>
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

// Project Card Component
const ProjectCard = ({ project, index }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
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
        visible: { 
          opacity: 1, 
          y: 0, 
          transition: { 
            duration: 0.5,
            delay: index * 0.1
          } 
        }
      }}
      className={`group relative overflow-hidden rounded-2xl shadow-lg 
        ${project.featured 
          ? 'md:col-span-2 bg-gradient-to-br from-blue-50 to-emerald-50 dark:from-blue-900/20 dark:to-emerald-900/20' 
          : 'bg-white dark:bg-neutral-800'} 
        border border-neutral-200 dark:border-neutral-700 hover:border-blue-400 dark:hover:border-blue-400
        transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1`}
    >
      <div className="p-6 md:p-8 h-full flex flex-col">
        <div className="flex-1">
          <h3 className="text-xl md:text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-3
            group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-neutral-600 dark:text-neutral-400 mb-4 line-clamp-3">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mt-4">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 text-sm font-medium rounded-full
                  bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300
                  border border-neutral-200 dark:border-neutral-600"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        {project.link && (
          <div className="mt-6 pt-4 border-t border-neutral-200 dark:border-neutral-700">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-base font-medium
                text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300
                transition-colors"
            >
              <FiGithub className="mr-2 w-5 h-5" />
              View Project
              <FiExternalLink className="ml-2 w-5 h-5" />
            </a>
          </div>
        )}
      </div>
    </motion.div>
  );
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
      <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-6 pb-2 border-b border-neutral-200 dark:border-neutral-700">
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
              hover:border-blue-300 dark:hover:border-blue-500 transition-all duration-300 hover:shadow-md"
          >
            <div className="text-neutral-900 dark:text-neutral-100 font-medium mb-2">
              {cert.title}
            </div>
            <div className="text-neutral-600 dark:text-neutral-400 text-sm">
              <span className="inline-flex items-center">
                <FiAward className="w-4 h-4 mr-1.5 text-amber-500" />
                {cert.provider} • {cert.year}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

// Main Component
export default function PortfolioShowcase() {
  const [activeTab, setActiveTab] = useState('all');
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const tabs = [
    { id: 'all', label: 'All' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' }
  ];
  
  // Filter featured projects for the showcase
  const featuredProjects = projects.filter(project => project.featured);
  
  return (
    <div className="py-8 md:py-16">
      {/* Section Header */}
      <div className="text-center mb-12">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-4"
        >
          My Portfolio
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto"
        >
          Explore my skills, projects, and certifications that showcase my expertise in cloud engineering and web development.
        </motion.p>
      </div>
      
      {/* Navigation Tabs - Desktop & Mobile */}
      <div className="mb-12">
        <div className="flex flex-wrap justify-center gap-2 md:gap-4">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-3 md:px-8 md:py-4 rounded-xl text-base md:text-lg font-medium transition-all duration-300
                ${activeTab === tab.id 
                  ? 'bg-gradient-to-r from-blue-500 to-emerald-500 text-white shadow-lg' 
                  : 'bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700'
                }`}
            >
              {tab.label}
            </motion.button>
          ))}
        </div>
      </div>
      
      {/* Content Sections */}
      <div className="space-y-16">
        {/* Skills Section */}
        {(activeTab === 'all' || activeTab === 'skills') && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {activeTab !== 'all' && (
              <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-8 text-center">
                Technical Skills
              </h3>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {Object.entries(skills).map(([category, items]) => (
                <SkillCard key={category} category={category} items={items} />
              ))}
            </div>
          </motion.div>
        )}
        
        {/* Projects Section */}
        {(activeTab === 'all' || activeTab === 'projects') && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {activeTab !== 'all' && (
              <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-8 text-center">
                Featured Projects
              </h3>
            )}
            
            {/* Featured Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
              {(activeTab === 'all' ? featuredProjects : projects).map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
              ))}
            </div>
            
            {activeTab === 'projects' && (
              <div className="text-center mt-8">
                <a 
                  href="https://github.com/Pepryan" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl
                    font-medium transition-colors duration-300 shadow-md hover:shadow-lg"
                >
                  View All Projects
                  <FiArrowRight className="ml-2" />
                </a>
              </div>
            )}
          </motion.div>
        )}
        
        {/* Certifications Section */}
        {(activeTab === 'all' || activeTab === 'certifications') && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {activeTab !== 'all' && (
              <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-8 text-center">
                Professional Certifications
              </h3>
            )}
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
              {Object.entries(certificationGroups).map(([category, certs]) => (
                <CertificationCard key={category} category={category} certifications={certs} />
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
