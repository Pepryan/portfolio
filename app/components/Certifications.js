"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiAward } from 'react-icons/fi';
import Image from 'next/image';

const certificationGroups = {
  'Cloud & DevOps': [
    { title: 'AWS Academy Cloud Architecting', provider: 'AWS', year: '2023' },
    { title: 'Certified DevOps Professional', provider: 'GitLab', year: '2023' },
    { title: 'Certified Security Specialist', provider: 'GitLab', year: '2022' },
    { title: 'Certified CI/CD Associate', provider: 'GitLab', year: '2022' },
    { title: 'RHCSA Rapid Track Course', provider: 'Btech', year: '2022' },
  ],
  'Development': [
    { title: 'Web Development Node.js', provider: 'Progate', year: '2020' },
    { title: 'Web Development Ruby on Rails', provider: 'Progate', year: '2020' },
    { title: 'Memulai Pemrograman dengan Python', provider: 'Dicoding', year: '2020' },
  ],
  'Infrastructure & Networking': [
    { title: 'Network and Infrastructure', provider: 'Kominfo & BNSP', year: '2019' },
    { title: 'Digitalent Junior Network Administrator', provider: 'Kominfo', year: '2019' },
    { title: 'OS Server Linux Ubuntu', provider: 'LepKom Gunadarma', year: '2017' },
  ]
};

const Certifications = () => {
  return (
    <div className="space-y-8 max-h-[70vh] overflow-y-auto">
      {Object.entries(certificationGroups).map(([category, certs]) => (
        <div key={category} className="bg-white dark:bg-neutral-900 rounded-xl p-6 shadow-sm border border-neutral-100 dark:border-neutral-800">
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
            {category}
          </h3>
          <div className="space-y-4">
            {certs.map((cert, index) => (
              <div key={index} className="text-sm">
                <div className="text-neutral-900 dark:text-neutral-100 font-medium">
                  {cert.title}
                </div>
                <div className="text-neutral-600 dark:text-neutral-400 mt-1">
                  <span className="inline-flex items-center">
                    <FiAward className="w-4 h-4 mr-1.5" />
                    {cert.provider} • {cert.year}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Certifications;
