import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiGithub, FiLinkedin, FiMail, FiArrowRight, FiGitlab, FiInstagram } from 'react-icons/fi';
import {FaXTwitter} from 'react-icons/fa6';

const Hero = ({ onExplore }) => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="h-full flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="text-center px-4">
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400"
        >
          Febryan Ramadhan
        </motion.h1>
        
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
        >
          Cloud Engineer | DevSecOps | Web
        </motion.p>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center gap-6 mb-12"
        >
          <SocialLink href="https://github.com/Pepryan" icon={<FiGithub />} />
          <SocialLink href="https://gitlab.com/Pepryan" icon={<FiGitlab />} />
          <SocialLink href="https://linkedin.com/in/febryanramadhan" icon={<FiLinkedin />} />
          <SocialLink href="https://instagram.com/nayrbef" icon={<FiInstagram />} />
          <SocialLink href="https://x.com/pepryan" icon={<FaXTwitter />} />
          <SocialLink href="mailto:febryanramadhan@gmail.com" icon={<FiMail />} />
        </motion.div>

        <motion.button
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          onClick={onExplore}
          className="group flex items-center gap-2 mx-auto px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Explore Portfolio
          <FiArrowRight className="group-hover:translate-x-1 transition" />
        </motion.button>
         <motion.button
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="group flex items-center gap-2 mx-auto px-6 py-3 mt-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          <Link href="blog/" className="flex items-center gap-2">
            Blog
            <FiArrowRight className="group-hover:translate-x-1 transition" />
          </Link>
        </motion.button>
      </div>
    </motion.section>
  );
};

const SocialLink = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition"
  >
    <span className="text-2xl">{icon}</span>
  </a>
);

export default Hero;
