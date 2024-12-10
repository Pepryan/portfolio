"use client";
import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import Skills from './Skills';
import Projects from './Projects';
import Certifications from './Certifications';

export default function TabAccordion() {
  const [activeTab, setActiveTab] = useState('skills');
  const [activeAccordion, setActiveAccordion] = useState('skills');

  const sections = [
    { id: 'skills', label: 'Skills', component: <Skills /> },
    { id: 'projects', label: 'Projects', component: <Projects /> },
    { id: 'certifications', label: 'Certifications', component: <Certifications /> }
  ];

  // Desktop Tabs
  const DesktopTabs = () => (
    <div className="hidden md:block">
      <div className="flex space-x-1 border-b border-neutral-200 dark:border-neutral-800">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => setActiveTab(section.id)}
            className={`
              px-4 py-2 text-sm font-medium
              ${activeTab === section.id 
                ? 'text-neutral-900 dark:text-neutral-100 border-b-2 border-neutral-900 dark:border-neutral-100' 
                : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100'}
            `}
          >
            {section.label}
          </button>
        ))}
      </div>
      <div className="mt-6">
        {sections.find(s => s.id === activeTab)?.component}
      </div>
    </div>
  );

  // Mobile Accordion
  const MobileAccordion = () => (
    <div className="md:hidden space-y-2">
      {sections.map((section) => (
        <div key={section.id} className="border-b border-neutral-200 dark:border-neutral-800">
          <button
            onClick={() => setActiveAccordion(activeAccordion === section.id ? '' : section.id)}
            className="flex items-center justify-between w-full py-3 text-left"
          >
            <span className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
              {section.label}
            </span>
            <FiChevronDown 
              className={`w-4 h-4 text-neutral-600 dark:text-neutral-400 transition-transform
                ${activeAccordion === section.id ? 'rotate-180' : ''}`}
            />
          </button>
          {activeAccordion === section.id && (
            <div className="pb-4">
              {section.component}
            </div>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div className="py-8">
      <DesktopTabs />
      <MobileAccordion />
    </div>
  );
} 