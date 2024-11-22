"use client";
import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Infrastructure Automation with Terraform',
    description: 'Automated cloud infrastructure deployment on AWS using Terraform, improving efficiency and consistency across environments.',
    technologies: ['AWS', 'Terraform', 'CI/CD'],
    link: 'https://github.com/yourusername/terraform-project',
    validationLink: 'https://validator.example.com',
  },
  {
    title: 'Kubernetes Cluster for Microservices',
    description: 'Set up a Kubernetes cluster to manage microservices-based applications, with automated scaling and monitoring using Grafana and Prometheus.',
    technologies: ['Kubernetes', 'Docker', 'Prometheus', 'Grafana'],
    link: 'https://github.com/yourusername/kubernetes-project',
    validationLink: 'https://validator.example.com',
  },
  {
    title: 'CI/CD Pipeline Implementation',
    description: 'Designed and implemented CI/CD pipelines for rapid application deployment using GitLab CI and Jenkins, reducing manual work and errors.',
    technologies: ['GitLab CI', 'Jenkins', 'Docker'],
    link: 'https://github.com/yourusername/ci-cd-project',
    validationLink: 'https://validator.example.com',
  },
  {
    title: 'E-commerce Website Development',
    description: 'Developed an e-commerce website with a responsive UI and REST API integration, leveraging React, Node.js, and MongoDB.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    link: 'https://github.com/yourusername/e-commerce-project',
    validationLink: 'https://validator.example.com',
  },
];

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      {project.image && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="text-sm px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
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
            className="block w-full text-center px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
          >
            View Project
          </a>
        )}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section className="min-h-full bg-white dark:bg-gray-900 py-16 px-5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
