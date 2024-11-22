import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'Cloud Engineer',
    company: 'PT. Boer Technology (Btech)',
    period: 'February 2022 - Present',
    location: 'DKI Jakarta, Indonesia',
    responsibilities: [
      'Troubleshoot, reconfigure, tuning and manage OpenStack instances with Linux-based operating systems',
      'Manage Kubernetes cluster and assist in troubleshooting',
      'Revolutionizing tasks using bash and python scripting for productivity',
      'Ensuring optimal performance through monitoring using Grafana, Prometheus, alert, victoria metrics, uptime kuma'
    ]
  },
  {
    role: 'Web Developer',
    company: 'PT. Ciptadra Softindo',
    period: 'March 2020 - February 2021',
    location: 'Depok, West Java, Indonesia',
    responsibilities: [
      'Developed Onebox CRM using Phalcon, CodeIgniter, Javascript',
      'Used Jira as project tools and Docker as container',
      'Handled client support and problem resolution',
      'Worked in hybrid setup (office & remote)'
    ]
  },
  {
    role: 'Instructor HTML, CSS, Javascript',
    company: 'Progate (Digitalent Kominfo & Event Ready Set Code!)',
    period: 'June 2020 - November 2020',
    location: 'Bogor, West Java, Indonesia',
    responsibilities: [
      'Mentored students in Online Coding Bootcamp via Discord',
      'Instructed Digital Talent Scholarship Online Academy',
      'Reviewed and graded student projects',
      'Collaborated with other instructors'
    ]
  }
];

const Experience = () => {
  return (
    <section className="min-h-full bg-white dark:bg-gray-900 py-16 px-5">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {experience.role}
              </h3>
              <p className="text-blue-600 dark:text-blue-400 mb-2">{experience.company}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{experience.period}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{experience.location}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                {experience.responsibilities.map((responsibility, idx) => (
                  <li key={idx}>{responsibility}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
