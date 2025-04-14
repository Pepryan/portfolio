"use client";
import { motion } from 'framer-motion';
import { FiCode, FiServer, FiCloud, FiActivity, FiHeart, FiBookOpen, FiMapPin } from 'react-icons/fi';

export default function About() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // Current focus items with icons
  const focusItems = [
    { text: 'Cloud Architecture', icon: <FiCloud /> },
    { text: 'Infrastructure Automation', icon: <FiServer /> },
    { text: 'Web Development', icon: <FiCode /> },
    { text: 'Cloud-Native Apps', icon: <FiActivity /> }
  ];

  // Hobbies with icons
  const hobbies = [
    { text: 'New Technologies', icon: <FiCode /> },
    { text: 'Trekking & Nature', icon: <FiMapPin /> },
    { text: 'Reading', icon: <FiBookOpen /> }
  ];

  return (
    <motion.div
      className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 py-8 md:py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <motion.div className="lg:col-span-2 space-y-8" variants={itemVariants}>
        <motion.div
          className="prose dark:prose-invert max-w-none"
          variants={itemVariants}
        >
          <motion.div
            className="p-6 bg-white/80 dark:bg-neutral-800/80 rounded-xl shadow-sm border border-neutral-200 dark:border-neutral-700"
            variants={itemVariants}
          >
            <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
              Hello, and welcome to my blog!<br/><br/>

              My name is <span className="font-semibold text-blue-600 dark:text-blue-400">Ryan</span> a tech enthusiast living in <span className="font-semibold text-blue-600 dark:text-blue-400">Bogor, Indonesia</span>. My main interest in <span className="font-semibold text-blue-600 dark:text-blue-400">Information Technology</span> started since I was at <span className="font-semibold text-blue-600 dark:text-blue-400">junior high school</span>. That time, I had built some PCs, over-clocked them, enjoyed some gaming, and hardware optimization.
            </p>
          </motion.div>

          <motion.div
            className="p-6 mt-6 bg-white/80 dark:bg-neutral-800/80 rounded-xl shadow-sm border border-neutral-200 dark:border-neutral-700"
            variants={itemVariants}
          >
            <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
              Later on, in high school at <span className="font-semibold text-blue-600 dark:text-blue-400">SMKN 3 Bogor</span>, I majored in <span className="font-semibold text-blue-600 dark:text-blue-400">Computer and Network Engineering</span>. I competed in the most prestigious <span className="font-semibold text-blue-600 dark:text-blue-400">CISCO Netriders Competition</span> in Semarang and represented my school at national level.<br/><br/>

              In high school, I was introduced to coding through <span className="font-semibold text-blue-600 dark:text-blue-400">PHP</span>, which further deepened my interest and continued through college. I am not an expert, but I learn and improve every day.
            </p>
          </motion.div>

          <motion.div
            className="p-6 mt-6 bg-white/80 dark:bg-neutral-800/80 rounded-xl shadow-sm border border-neutral-200 dark:border-neutral-700"
            variants={itemVariants}
          >
            <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-200 mb-4 flex items-center">
              <FiServer className="mr-2 text-blue-500" /> My Key Strengths
            </h3>
            <ul className="space-y-3 text-neutral-600 dark:text-neutral-400">
              <li className="flex items-start">
                <span className="text-blue-500 dark:text-blue-400 mr-2 mt-1">•</span>
                <span>Designing efficient logic flows for <span className="font-semibold text-blue-600 dark:text-blue-400">automation</span> and systems</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 dark:text-blue-400 mr-2 mt-1">•</span>
                <span><span className="font-semibold text-blue-600 dark:text-blue-400">CI/CD</span> pipeline creation</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 dark:text-blue-400 mr-2 mt-1">•</span>
                <span>Troubleshooting and analyzing <span className="font-semibold text-blue-600 dark:text-blue-400">Linux server</span> issues</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 dark:text-blue-400 mr-2 mt-1">•</span>
                <span>Analysis and optimization of <span className="font-semibold text-blue-600 dark:text-blue-400">system workflows</span></span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 dark:text-blue-400 mr-2 mt-1">•</span>
                <span><span className="font-semibold text-blue-600 dark:text-blue-400">Web development</span>, creating responsive, scalable applications</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 dark:text-blue-400 mr-2 mt-1">•</span>
                <span>Problem-solving through in-depth analysis and debugging</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div className="space-y-8" variants={itemVariants}>
        {/* Current Focus Card */}
        <motion.div
          className="p-6 bg-white/80 dark:bg-neutral-800/80 rounded-xl shadow-sm border border-neutral-200 dark:border-neutral-700"
          variants={itemVariants}
        >
          <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-200 mb-4 flex items-center">
            <FiActivity className="mr-2 text-blue-500" /> Current Focus
          </h3>
          <div className="space-y-3">
            {focusItems.map((item, index) => (
              <motion.div
                key={item.text}
                className="flex items-center p-3 bg-blue-50/50 dark:bg-blue-900/20 rounded-lg"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <span className="p-2 bg-blue-100 dark:bg-blue-800/30 rounded-full text-blue-600 dark:text-blue-400 mr-3">
                  {item.icon}
                </span>
                <span className="text-neutral-700 dark:text-neutral-300">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Hobbies Card */}
        <motion.div
          className="p-6 bg-white/80 dark:bg-neutral-800/80 rounded-xl shadow-sm border border-neutral-200 dark:border-neutral-700"
          variants={itemVariants}
        >
          <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-200 mb-4 flex items-center">
            <FiHeart className="mr-2 text-red-500" /> In My Free Time
          </h3>
          <div className="space-y-3">
            {hobbies.map((hobby, index) => (
              <motion.div
                key={hobby.text}
                className="flex items-center p-3 bg-red-50/50 dark:bg-red-900/10 rounded-lg"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <span className="p-2 bg-red-100 dark:bg-red-800/30 rounded-full text-red-600 dark:text-red-400 mr-3">
                  {hobby.icon}
                </span>
                <span className="text-neutral-700 dark:text-neutral-300">{hobby.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Closing Statement */}
        <motion.div
          className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl shadow-sm border border-blue-100 dark:border-blue-800/30"
          variants={itemVariants}
        >
          <p className="text-neutral-700 dark:text-neutral-300 text-center">
            I believe in <span className="font-semibold text-blue-600 dark:text-blue-400">growth</span>, both personal and professional, and in creating <span className="font-semibold text-purple-600 dark:text-purple-400">solutions</span> that will actually bring a change.
          </p>
          <p className="text-neutral-700 dark:text-neutral-300 text-center mt-4">
            Let's <span className="font-semibold text-blue-600 dark:text-blue-400">innovate</span> and <span className="font-semibold text-purple-600 dark:text-purple-400">grow together</span>!
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
