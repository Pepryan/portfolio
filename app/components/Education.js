import React from 'react';
import { motion } from 'framer-motion';

const education = [
  {
    degree: 'Bachelor of Information Systems',
    institution: 'Gunadarma University',
    period: '2014 - 2021',
    gpa: '3.63 / 4.00',
    projects: [
      'Website Pesan Jasa WPAP FR Graphics dengan Framework Laravel',
      'Sistem Penjualan Pakaian Muslimah Nalamoera Menggunakan Wordpress dan WooCommerce'
    ]
  },
  {
    degree: 'Computer and Network Engineering',
    institution: 'SMKN 3 Bogor',
    period: '2011 - 2014',
    gpa: '8.5 / 10',
    skills: [
      'Web Development (HTML, CSS, PHP)',
      'System Administration',
      'Linux Server Configuration',
      'Computer Networking'
    ]
  }
];

const Education = () => {
  return (
    <section className="min-h-full bg-white dark:bg-gray-900 py-16 px-5">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          Education
        </h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {edu.degree}
              </h3>
              <p className="text-blue-600 dark:text-blue-400">{edu.institution}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">{edu.period}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">GPA: {edu.gpa}</p>
              
              {edu.projects && (
                <div className="mt-4">
                  <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                    Projects
                  </h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    {edu.projects.map((project, idx) => (
                      <li key={idx}>{project}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              {edu.skills && (
                <div className="mt-4">
                  <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                    Skills
                  </h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    {edu.skills.map((skill, idx) => (
                      <li key={idx}>{skill}</li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
