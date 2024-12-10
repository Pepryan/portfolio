import React from 'react';
import { motion } from 'framer-motion';

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
        <div 
          key={index} 
          className="p-4 rounded-lg border border-neutral-200 dark:border-neutral-800 
            hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors"
        >
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="font-medium text-neutral-900 dark:text-neutral-100">
                {edu.degree}
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {edu.institution}
              </p>
            </div>
            <span className="text-xs text-neutral-500 dark:text-neutral-500">
              {edu.period}
            </span>
          </div>
          
          <div className="flex flex-wrap gap-1.5 mt-3">
            {edu.focus.map((item, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 text-xs bg-neutral-100 dark:bg-neutral-800 
                  text-neutral-600 dark:text-neutral-400 rounded-full"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
