"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Projects() {
  const projects = [
    {
      title: 'Infrastructure Automation with Terraform',
      description: 'Automated cloud infrastructure deployment on AWS using Terraform, improving efficiency and consistency across environments.',
      technologies: ['AWS', 'Terraform', 'CI/CD'],
      link: 'https://github.com/yourusername/terraform-project'
    },
    {
      title: 'Kubernetes Cluster for Microservices',
      description: 'Set up a Kubernetes cluster to manage microservices-based applications, with automated scaling and monitoring.',
      technologies: ['Kubernetes', 'Docker', 'Prometheus', 'Grafana'],
      link: 'https://github.com/yourusername/kubernetes-project'
    },
    {
      title: 'CI/CD Pipeline Implementation',
      description: 'Designed and implemented CI/CD pipelines for rapid application deployment using GitLab CI and Jenkins.',
      technologies: ['GitLab CI', 'Jenkins', 'Docker'],
      link: 'https://github.com/yourusername/ci-cd-project'
    }
  ];

  return (
    <div className="pb-28">
      <div className="space-y-4">
        {projects.map((project, index) => (
          <div key={index} className="border border-neutral-200 dark:border-neutral-800 
            rounded-lg bg-white dark:bg-neutral-900 p-4">
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
                    text-neutral-600 dark:text-neutral-400"
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
