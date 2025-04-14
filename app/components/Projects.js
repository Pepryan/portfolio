"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiGithub, FiExternalLink } from 'react-icons/fi';

export default function Projects() {
  const projects = [
    {
      title: 'OpenStack Resource Management',
      description: 'Automated OpenStack resource management system using Python and Bash scripts. Includes monitoring, scaling, and optimization features for cloud infrastructure.',
      technologies: ['OpenStack', 'Python', 'Bash', 'Prometheus', 'Grafana'],
      link: 'https://github.com/Pepryan/openstack-resource'
    },
    {
      title: 'Digital Wedding Invitation',
      description: 'Modern digital wedding invitation platform built with Next.js and TailwindCSS. Features RSVP management, guest list tracking, and responsive design.',
      technologies: ['Next.js', 'TailwindCSS', 'React', 'Vercel'],
      link: 'https://github.com/Pepryan/wedding-invitation'
    },
    {
      title: 'Personal Portfolio',
      description: 'Personal portfolio website built with Next.js, featuring blog functionality, dark mode, and MDX support for content management.',
      technologies: ['Next.js', 'TailwindCSS', 'MDX', 'React'],
      link: 'https://github.com/Pepryan/portfolio'
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

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="group relative bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm rounded-lg
              border border-neutral-200 dark:border-neutral-700 hover:border-blue-500 dark:hover:border-blue-400
              transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
          >
            <div className="p-4 md:p-8">
              <div className="flex flex-col h-full">
                <div className="flex-1 space-y-3">
                  <h3 className="text-lg md:text-xl font-semibold text-neutral-900 dark:text-neutral-100
                    group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-3">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-xs md:text-sm font-medium bg-neutral-100/70
                          dark:bg-neutral-700/70 text-neutral-700 dark:text-neutral-300
                          rounded-full border border-neutral-200 dark:border-neutral-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {project.link && (
                  <div className="mt-4 pt-3 border-t border-neutral-200 dark:border-neutral-700">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm md:text-base font-medium
                        text-neutral-700 dark:text-neutral-300 hover:text-blue-500
                        dark:hover:text-blue-400 transition-colors"
                    >
                      <FiGithub className="mr-2 w-4 h-4 md:w-5 md:h-5" />
                      View Project
                      <FiExternalLink className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
