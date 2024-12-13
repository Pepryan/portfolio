"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiMapPin, FiGithub, FiGitlab, FiLinkedin, FiInstagram, FiX, FiMessageSquare } from 'react-icons/fi';
import { FaTelegram, FaXTwitter } from 'react-icons/fa6';

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false);

  const contactInfo = {
    email: 'febryanramadhan@gmail.com',
    location: 'Bogor, Indonesia',
    social: [
      { name: 'GitHub', icon: FiGithub, url: 'github.com/pepryan', color: 'hover:text-[#333]' },
      { name: 'GitLab', icon: FiGitlab, url: 'gitlab.com/pepryan', color: 'hover:text-[#FC6D26]' },
      { name: 'LinkedIn', icon: FiLinkedin, url: 'linkedin.com/in/pepryan', color: 'hover:text-[#0A66C2]' },
      { name: 'x.com', icon: FaXTwitter, url: 'x.com/pepryan', color: 'hover:text-[#1DA1F2]' },
      // { name: 'Instagram', icon: FiInstagram, url: 'instagram.com/nayrbef', color: 'hover:text-[#E4405F]' },
      // { name: 'Telegram', icon: FaTelegram, url: 't.me/febryanramadhan', color: 'hover:text-[#26A5E4]' },
    ]
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95, x: 20 },
    visible: { opacity: 1, scale: 1, x: 0 }
  };

  return (
    <>
      {/* Contact Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 p-3 rounded-full 
          bg-white/50 dark:bg-neutral-800/50 backdrop-blur-sm
          border border-neutral-200 dark:border-neutral-700
          text-neutral-600 dark:text-neutral-400
          shadow-lg hover:scale-105 transition-transform duration-200
          z-40"
        aria-label="Open contact information"
      >
        <FiMessageSquare className="w-5 h-5" />
      </button>

      {/* Modal Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-sm z-50"
            />

            {/* Modal Content */}
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="fixed right-6 bottom-20 z-50 w-80"
            >
              <div className="p-6 rounded-2xl bg-white/50 dark:bg-neutral-800/50 
                backdrop-blur-sm border border-neutral-200 dark:border-neutral-700
                shadow-xl">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg font-medium text-neutral-900 dark:text-neutral-100">
                    Contact Information
                  </h2>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-700 
                      text-neutral-500 dark:text-neutral-400 transition-colors"
                    aria-label="Close modal"
                  >
                    <FiX className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-6">
                  {/* Email */}
                  <div className="group">
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="flex items-center gap-3 text-neutral-600 dark:text-neutral-400 
                        hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors"
                    >
                      <div className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-700/50 
                        group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-colors">
                        <FiMail className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Email</p>
                        <p className="text-xs">{contactInfo.email}</p>
                      </div>
                    </a>
                  </div>

                  {/* Location */}
                  <div className="group">
                    <div className="flex items-center gap-3 text-neutral-600 dark:text-neutral-400">
                      <div className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-700/50 
                        group-hover:bg-emerald-50 dark:group-hover:bg-emerald-900/20 transition-colors">
                        <FiMapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Location</p>
                        <p className="text-xs">{contactInfo.location}</p>
                      </div>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="pt-4 border-t border-neutral-200 dark:border-neutral-700">
                    <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100 mb-4">
                      Social Links
                    </p>
                    <div className="grid grid-cols-3 gap-3">
                      {contactInfo.social.map((platform) => (
                        <a
                          key={platform.name}
                          href={`https://${platform.url}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex flex-col items-center gap-2 p-3 rounded-lg
                            bg-neutral-100 dark:bg-neutral-700/50 
                            text-neutral-600 dark:text-neutral-400
                            hover:bg-neutral-200 dark:hover:bg-neutral-600/50
                            ${platform.color} transition-all duration-300
                            transform hover:scale-105`}
                          title={platform.name}
                        >
                          <platform.icon className="w-5 h-5" />
                          <span className="text-[10px] font-medium">{platform.name}</span>
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Download CV Button */}
                  <div className="pt-4">
                    <a
                      href="/cv.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-2.5 
                        bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 
                        rounded-lg font-medium text-sm hover:opacity-90 transition-opacity"
                    >
                      Download CV
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
