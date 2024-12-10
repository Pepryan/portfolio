import Link from 'next/link';
import { FiGithub, FiLinkedin, FiMail, FiGitlab, FiInstagram, FiMessageSquare } from 'react-icons/fi';
import { FaXTwitter, FaTelegram } from 'react-icons/fa6';
import { componentConfig } from '../config/components';

const Hero = () => {
  const { hero, contact } = componentConfig;
  
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
  
  return (
    <div className="text-center py-8 space-y-6">
      <div className="space-y-2 mt-10 animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent 
          bg-gradient-to-r from-neutral-900 to-neutral-600 
          dark:from-neutral-100 dark:to-neutral-400">
          {hero.title}
        </h1>
        
        <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 
          max-w-2xl mx-auto">
          {hero.subtitle}
        </p>
      </div>

      <div className="flex justify-center gap-4">
        {/* Render all enabled social links */}
        {enabledSocials.map(([platform, url]) => (
          socialIcons[platform] && (
            <SocialLink 
              key={platform}
              href={`https://${url}`}
              icon={socialIcons[platform]}
              aria-label={`Visit ${platform} profile`}
              className="transform hover:scale-110 transition-all"
            />
          )
        ))}
        
        {/* Email is handled separately since it uses mailto: */}
        <SocialLink 
          href={`mailto:${contact.email}`} 
          icon={<FiMail />}
          aria-label="Send email"
        />
      </div>

      <Link 
        href="/blog" 
        className="inline-block px-5 py-1.5 text-sm font-medium text-neutral-700 dark:text-neutral-300 
          border border-neutral-300 dark:border-neutral-700 rounded-full hover:bg-neutral-100 
          dark:hover:bg-neutral-800 transition-colors"
      >
        Read Blog
      </Link>
    </div>
  );
};

const SocialLink = ({ href, icon, 'aria-label': ariaLabel }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={ariaLabel}
    className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 
      dark:hover:text-neutral-100 transition-colors"
  >
    <span className="text-xl">{icon}</span>
  </a>
);

export default Hero;
