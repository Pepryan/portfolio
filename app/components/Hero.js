"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiGitlab, FiInstagram, FiArrowDown } from 'react-icons/fi';
import { FaXTwitter, FaTelegram } from 'react-icons/fa6';
import { componentConfig } from '../config/components';
import { useEffect, useState } from 'react';

const Hero = () => {
  const { hero, contact } = componentConfig;
  const [scrollIndicator, setScrollIndicator] = useState(true);

  // Hide scroll indicator when user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrollIndicator(false);
      } else {
        setScrollIndicator(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Define social icons mapping
  const socialIcons = {
    github: <FiGithub />,
    gitlab: <FiGitlab />,
    linkedin: <FiLinkedin />,
    twitter: <FaXTwitter />,
    instagram: <FiInstagram />,
    telegram: <FaTelegram />
  };

  // Filter out disabled or undefined social links
  const enabledSocials = Object.entries(contact.social || {}).filter(([_, value]) => value);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      className="text-center py-8 space-y-8 relative"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        className="space-y-4 mt-10"
        variants={itemVariants}
      >
        <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent
          bg-gradient-to-r from-blue-600 to-purple-600
          dark:from-blue-400 dark:to-purple-400 px-4">
          {hero.title}
        </h1>

        <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400
          max-w-2xl mx-auto px-4">
          {hero.subtitle}
        </p>
      </motion.div>

      <motion.div
        className="flex justify-center px-4 my-6"
        variants={itemVariants}
      >
        <div className="inline-flex items-center bg-white/30 dark:bg-neutral-800/30 backdrop-blur-sm rounded-full px-4 py-2">
          {/* Render all enabled social links */}
          {enabledSocials.map(([platform, url], index) => (
            socialIcons[platform] && (
              <motion.div
                key={platform}
                variants={itemVariants}
                transition={{ delay: index * 0.1 }}
              >
                <SocialLink
                  href={`https://${url}`}
                  icon={socialIcons[platform]}
                  aria-label={`Visit ${platform} profile`}
                  platform={platform}
                />
              </motion.div>
            )
          ))}

          {/* Email is handled separately since it uses mailto: */}
          <motion.div variants={itemVariants}>
            <SocialLink
              href={`mailto:${contact.email}`}
              icon={<FiMail />}
              aria-label="Send email"
              platform="email"
            />
          </motion.div>
        </div>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Link
          href="/blog"
          className="inline-block px-6 py-2.5 text-sm font-medium text-white
            bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600
            dark:from-blue-600 dark:to-purple-600 dark:hover:from-blue-500 dark:hover:to-purple-500
            rounded-full shadow-md hover:shadow-lg transition-all duration-300"
        >
          Read Blog
        </Link>
      </motion.div>

      {/* Scroll indicator */}
      {scrollIndicator && (
        <motion.div
          className="w-full flex justify-center mt-12 mb-4 md:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="text-blue-500 dark:text-blue-400 flex justify-center"
          >
            <FiArrowDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

const SocialLink = ({ href, icon, 'aria-label': ariaLabel, platform }) => {
  // Platform-specific colors
  const colors = {
    github: 'hover:text-neutral-900 dark:hover:text-white',
    gitlab: 'hover:text-orange-600 dark:hover:text-orange-400',
    linkedin: 'hover:text-blue-600 dark:hover:text-blue-400',
    twitter: 'hover:text-blue-400 dark:hover:text-blue-400',
    instagram: 'hover:text-pink-600 dark:hover:text-pink-400',
    telegram: 'hover:text-blue-500 dark:hover:text-blue-400',
    email: 'hover:text-red-500 dark:hover:text-red-400'
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={`p-3 mx-1 text-neutral-600 dark:text-neutral-400 ${colors[platform] || ''}
        hover:transform hover:scale-110 transition-all duration-300`}
    >
      <span className="text-xl">{icon}</span>
    </a>
  );
};

export default Hero;
