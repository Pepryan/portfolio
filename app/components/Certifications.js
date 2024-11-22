"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiAward } from 'react-icons/fi';
import Image from 'next/image';

const certificationGroups = {
  'Cloud & DevOps': [
    { title: 'AWS Academy Cloud Architecting', provider: 'AWS', year: '2023', badge: '/aws-badge.png' },
    { title: 'Certified DevOps Professional', provider: 'GitLab', year: '2023', badge: '/gitlab-badge.png' },
    { title: 'Certified Security Specialist', provider: 'GitLab', year: '2022', badge: '/gitlab-badge.png' },
    { title: 'Certified CI/CD Associate', provider: 'GitLab', year: '2022', badge: '/gitlab-badge.png' },
    { title: 'RHCSA Rapid Track Course', provider: 'Btech', year: '2022', badge: '/redhat-badge.png' },
  ],
  'Development': [
    { title: 'Web Development Node.js', provider: 'Progate', year: '2020' },
    { title: 'Web Development Ruby on Rails', provider: 'Progate', year: '2020' },
    { title: 'Memulai Pemrograman dengan Python', provider: 'Dicoding', year: '2020' },
    { title: 'Web Programming C#', provider: 'LepKom Gunadarma', year: '2017' },
  ],
  'Infrastructure & Networking': [
    { title: 'Network and Infrastructure', provider: 'Kominfo & BNSP', year: '2019' },
    { title: 'Digitalent Junior Network Administrator', provider: 'Kominfo', year: '2019' },
    { title: 'OS Server Linux Ubuntu', provider: 'LepKom Gunadarma', year: '2017' },
    { title: 'Cisco Certified Network Associate (CCNA)', provider: 'Cisco', year: '2013' },
  ]
};

const Certifications = () => {
  return (
    <section className="min-h-full bg-white dark:bg-gray-900 py-16 px-5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Professional Certifications
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Professional achievements and qualifications
          </p>
        </motion.div>

        <div className="space-y-6">
          {Object.entries(certificationGroups).map(([group, certs]) => (
            <CertificationGroup key={group} title={group} certifications={certs} />
          ))}
        </div>
      </div>
    </section>
  );
};

const CertificationGroup = ({ title, certifications }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg"
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between p-6 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
      >
        <div className="flex items-center gap-3">
          <FiAward className="text-2xl text-blue-500" />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
        </div>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <FiChevronDown className="text-xl text-gray-500 dark:text-gray-400" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="border-t border-gray-200 dark:border-gray-700"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
              {certifications.map((cert, index) => (
                <CertificationCard key={index} cert={cert} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const CertificationCard = ({ cert }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300"
    >
      <div className="p-6">
        <div className="flex justify-between items-start gap-4">
          <div className="flex-1">
            <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">
              {cert.title}
            </h4>
            <p className="text-sm text-blue-500 dark:text-blue-400 mt-1">
              {cert.provider}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              {cert.year}
            </p>
            {cert.validationId && (
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                ID: {cert.validationId}
              </p>
            )}
          </div>
          {cert.badge && (
            <Image 
              src={cert.badge} 
              alt={`${cert.title} badge`} 
              width={64}
              height={64}
              className="object-contain transform group-hover:scale-110 transition-transform duration-300"
            />
          )}
        </div>
        
        <div className="mt-4 flex gap-2">
          {cert.validationLink && (
            <a
              href={cert.validationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors text-sm"
            >
              Verify Certificate
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Certifications;
