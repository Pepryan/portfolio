"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

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
    <div className="pb-28">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="border border-neutral-200 dark:border-neutral-800 
            rounded-lg bg-white dark:bg-neutral-900 p-4 hover:border-neutral-300 
            dark:hover:border-neutral-700 transition-all duration-300">
            <div className="space-y-3">
              <div>
                <h3 className="font-medium text-base text-neutral-900 dark:text-neutral-100">
                  {project.title}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                  {project.description}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech, idx) => (
                  <span 
                    key={idx}
                    className="px-2 py-0.5 text-xs bg-neutral-100 
                      dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 
                      rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-medium 
                    text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 
                    dark:hover:text-neutral-200 transition-colors"
                >
                  View Project →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
