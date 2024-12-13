import React from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiMapPin } from 'react-icons/fi';

export default function Education() {
  const education = [
    {
      degree: 'Bachelor of Information Systems',
      institution: 'Gunadarma University',
      period: '2014 - 2021',
      focus: ['Web Development', 'System Analysis', 'Database Management']
    },
    {
      degree: 'Computer and Network Engineering',
      institution: 'SMKN 3 Bogor',
      period: '2011 - 2014',
      focus: ['Networking', 'System Administration', 'Web Development']
    }
  ];

  return (
    <div className="space-y-6">
      {education.map((edu, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="group"
        >
          <div className="p-5 rounded-xl border border-neutral-200/80 dark:border-neutral-800/80
            bg-white/50 dark:bg-neutral-800/50 backdrop-blur-sm
            group-hover:border-emerald-500/20 dark:group-hover:border-emerald-400/20
            group-hover:shadow-lg transition-all duration-300">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-medium text-neutral-900 dark:text-neutral-100
                  group-hover:text-emerald-600 dark:group-hover:text-emerald-400
                  transition-colors">
                  {edu.degree}
                </h3>
                <div className="flex items-center gap-1 text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                  <FiMapPin className="w-3.5 h-3.5" />
                  <p>{edu.institution}</p>
                </div>
              </div>
              <span className="px-3 py-1 text-xs font-medium rounded-full
                bg-neutral-100/80 dark:bg-neutral-700/80
                text-neutral-600 dark:text-neutral-400
                group-hover:bg-emerald-50 dark:group-hover:bg-emerald-900/20
                group-hover:text-emerald-600 dark:group-hover:text-emerald-400
                transition-colors flex items-center gap-1">
                <FiCalendar className="w-3 h-3" />
                {edu.period}
              </span>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-4">
              {edu.focus.map((item, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 text-xs font-medium
                    bg-neutral-100/80 dark:bg-neutral-700/80
                    text-neutral-600 dark:text-neutral-400 
                    rounded-full hover:bg-emerald-50 dark:hover:bg-emerald-900/20
                    hover:text-emerald-600 dark:hover:text-emerald-400
                    transition-colors duration-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
