"use client";
import { useRef, useEffect, useState } from 'react';
import { motion, useInView, useAnimation, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiArrowRight, FiFilter } from 'react-icons/fi';

// Projects data
const projects = [
  {
    title: 'OpenStack Resource Management',
    description: 'Automated OpenStack resource management system using Python and Bash scripts. Includes monitoring, scaling, and optimization features for cloud infrastructure.',
    technologies: ['OpenStack', 'Python', 'Bash', 'Prometheus', 'Grafana'],
    link: 'https://github.com/Pepryan/openstack-resource',
    category: 'cloud',
    featured: true
  },
  {
    title: 'Digital Wedding Invitation',
    description: 'Modern digital wedding invitation platform built with Next.js and TailwindCSS. Features RSVP management, guest list tracking, and responsive design.',
    technologies: ['Next.js', 'TailwindCSS', 'React', 'Vercel'],
    link: 'https://github.com/Pepryan/wedding-invitation',
    category: 'web',
    featured: true
  },
  {
    title: 'Personal Portfolio',
    description: 'Personal portfolio website built with Next.js, featuring blog functionality, dark mode, and MDX support for content management.',
    technologies: ['Next.js', 'TailwindCSS', 'MDX', 'React'],
    link: 'https://github.com/Pepryan/portfolio',
    category: 'web',
    featured: true
  },
  {
    title: 'Infrastructure Automation Lab',
    description: 'Comprehensive lab environment for automating KVM provisioning and infrastructure management. Features automated VM deployment, configuration management, and monitoring integration.',
    technologies: ['Ansible', 'KVM', 'Linux', 'Bash', 'GitLab CI'],
    link: 'https://gitlab.com/Pepryan/automation-provisioning-kvm-lab-btech',
    category: 'cloud',
    featured: false
  },
  {
    title: 'Movies Management System',
    description: 'Full-stack movie management application with features for tracking, rating, and reviewing movies. Built using modern web technologies.',
    technologies: ['Laravel', 'Vue.js', 'PostgreSQL', 'Docker'],
    link: 'https://gitlab.com/Pepryan/movies_ob19',
    category: 'web',
    featured: false
  },
  {
    title: 'Phalcon Web Application',
    description: 'Web application built with Phalcon PHP framework, demonstrating MVC architecture and efficient database operations.',
    technologies: ['PHP', 'Phalcon', 'MySQL', 'Bootstrap'],
    link: 'https://gitlab.com/Pepryan/phalcon',
    category: 'web',
    featured: false
  }
];

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

export default function ProjectsGrid() {
  const [filter, setFilter] = useState('all');
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : filter === 'featured' 
      ? projects.filter(p => p.featured) 
      : projects.filter(p => p.category === filter);
  
  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'featured', label: 'Featured' },
    { id: 'web', label: 'Web Dev' },
    { id: 'cloud', label: 'Cloud & DevOps' }
  ];
  
  return (
    <div className="py-8">
      <div className="text-center mb-12">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-4"
        >
          My Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mb-8"
        >
          A collection of my work in cloud engineering, infrastructure automation, and web development.
        </motion.p>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
          {filters.map((item) => (
            <motion.button
              key={item.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(item.id)}
              className={`px-4 py-2 md:px-6 md:py-3 rounded-xl text-sm md:text-base font-medium transition-all duration-300
                ${filter === item.id 
                  ? 'bg-gradient-to-r from-blue-500 to-emerald-500 text-white shadow-lg' 
                  : 'bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700'
                }`}
            >
              {item.id === 'all' && <FiFilter className="inline mr-2" />}
              {item.label}
            </motion.button>
          ))}
        </div>
      </div>
      
      <AnimatePresence mode="wait">
        <motion.div
          key={filter}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </motion.div>
      </AnimatePresence>
      
      <div className="text-center mt-12">
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
    </div>
  );
}
