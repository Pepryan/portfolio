"use client";
import { motion } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';

export default function Skills() {
  const skills = {
    'Languages': ['Python', 'JavaScript', 'Bash', 'PHP'],
    'Cloud & Infrastructure': ['AWS', 'OpenStack', 'Docker', 'Kubernetes', 'Terraform'],
    'Monitoring & Tools': ['Grafana', 'Prometheus', 'ELK Stack', 'Git', 'Jenkins', 'GitLab CI']
  };

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-6">
      {Object.entries(skills).map(([category, items]) => (
      <motion.div
      key={category}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm rounded-xl p-4 md:p-6
        border border-neutral-200 dark:border-neutral-700 hover:shadow-lg transition-shadow"
      >
      <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-3">
        {category}
      </h3>
      <div className="space-y-2">
        {items.map((skill) => (
        <div
          key={skill}
          className="flex items-center space-x-2 text-neutral-700 dark:text-neutral-300
          p-2 rounded-lg hover:bg-neutral-100/50 dark:hover:bg-neutral-700/50 transition-colors"
        >

          <FiCheck className="w-4 h-4 text-emerald-500 dark:text-emerald-400 flex-shrink-0" />
          <span className="text-sm md:text-base">{skill}</span>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
