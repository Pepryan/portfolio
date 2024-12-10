import { useState } from 'react';
import { FiMail, FiMapPin, FiX, FiMessageSquare } from 'react-icons/fi';
import { componentConfig } from '../config/components';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(true);
  
  const contactInfo = {
    email: componentConfig.contact.email,
    location: componentConfig.contact.location
  };

  return (
    <>
      {/* Hidden Contact Button */}
      {!isVisible && (
        <button
          onClick={() => setIsVisible(true)}
          className="fixed bottom-4 right-8 z-50 bg-neutral-800 dark:bg-neutral-700 
            text-white px-4 py-2 rounded-t-lg shadow-lg hover:bg-neutral-700 
            dark:hover:bg-neutral-600 transition-all duration-200"
        >
          <div className="flex items-center gap-2">
            <FiMessageSquare className="w-4 h-4" />
            <span className="text-sm">Contact Info</span>
          </div>
        </button>
      )}

      {/* Contact Card */}
      <div className={`
        fixed bottom-0 right-8 z-50 transition-all duration-300 ease-in-out
        ${isVisible ? 'translate-y-0' : 'translate-y-full'}
      `}>
        <div className="bg-white dark:bg-neutral-800 rounded-t-lg shadow-lg p-4 
          border border-neutral-200 dark:border-neutral-700 max-w-sm">
          
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-medium text-neutral-900 dark:text-neutral-100">
              Contact Information
            </h3>
            <button 
              onClick={() => setIsVisible(false)}
              className="text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 
                dark:hover:text-neutral-200 p-1"
            >
              <FiX className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3 text-sm text-neutral-600 dark:text-neutral-400">
              <FiMail className="flex-shrink-0 w-4 h-4" />
              <a href={`mailto:${contactInfo.email}`} 
                className="hover:text-neutral-900 dark:hover:text-neutral-100">
                {contactInfo.email}
              </a>
            </div>

            <div className="flex items-center gap-3 text-sm text-neutral-600 dark:text-neutral-400">
              <FiMapPin className="flex-shrink-0 w-4 h-4" />
              <span>{contactInfo.location}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
