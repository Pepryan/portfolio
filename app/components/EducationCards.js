"use client";
import { useRef, useEffect, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { FiCalendar, FiMapPin, FiAward, FiBookOpen, FiCode } from 'react-icons/fi';

// Education data with more details
const education = [
  {
    degree: 'Bachelor of Information Systems',
    institution: 'Gunadarma University',
    period: '2014 - 2021',
    location: 'Depok, Indonesia',
    description: 'Focused on information systems development, database management, and web technologies.',
    achievements: [
      'Graduated with honors',
      'Developed a comprehensive web-based information system for final project',
      'Participated in campus tech community events'
    ],
    courses: ['Web Development', 'Database Systems', 'System Analysis', 'Project Management', 'Network Security'],
    skills: ['PHP', 'MySQL', 'JavaScript', 'System Design', 'UML']
  },
  {
    degree: 'Computer and Network Engineering',
    institution: 'SMKN 3 Bogor',
    period: '2011 - 2014',
    location: 'Bogor, Indonesia',
    description: 'Vocational high school education focused on computer networking, system administration, and basic programming.',
    achievements: [
      'Ranked in top 5 of graduating class',
      'Participated in regional networking competition',
      'Completed industry internship program'
    ],
    courses: ['Computer Networks', 'System Administration', 'Basic Programming', 'Hardware Maintenance', 'Network Security'],
    skills: ['Networking', 'Linux', 'Windows Server', 'HTML/CSS', 'Hardware Troubleshooting']
  }
];

// Education Card Component
const EducationCard = ({ edu, index }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            delay: index * 0.2
          }
        }
      }}
      className="group"
    >
      <motion.div
        className="p-5 md:p-6 rounded-xl border border-neutral-200/80 dark:border-neutral-800/80
          bg-gradient-to-br from-white/90 to-white/70 dark:from-neutral-800/90 dark:to-neutral-800/70
          backdrop-blur-sm shadow-md
          group-hover:border-emerald-500/30 dark:group-hover:border-emerald-400/30
          group-hover:shadow-xl transition-all duration-300"
        whileHover={{ y: -5 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
            <div>
              <h3 className="font-bold text-lg md:text-xl text-neutral-900 dark:text-neutral-100
                group-hover:text-emerald-600 dark:group-hover:text-emerald-400
                transition-colors flex items-center gap-2">
                <FiAward className="w-5 h-5 text-emerald-500 dark:text-emerald-400 flex-shrink-0" />
                {edu.degree}
              </h3>
              <p className="text-base text-neutral-700 dark:text-neutral-300
                transition-colors flex items-center">
                <FiBookOpen className="mr-1.5 w-3.5 h-3.5 text-emerald-500/70 dark:text-emerald-400/70" />
                {edu.institution}
              </p>
              <p className="text-sm text-neutral-500 dark:text-neutral-500 flex items-center mt-1">
                <FiMapPin className="mr-1.5 w-3.5 h-3.5" />
                {edu.location}
              </p>
            </div>

            <span className="px-3 py-1.5 text-sm font-medium rounded-full
              bg-emerald-50/80 dark:bg-emerald-900/20
              text-emerald-600 dark:text-emerald-400
              border border-emerald-200/50 dark:border-emerald-700/50
              transition-colors flex items-center gap-1 self-start mt-2 md:mt-0">
              <FiCalendar className="w-3.5 h-3.5" />
              {edu.period}
            </span>
          </div>

          <p className="text-neutral-600 dark:text-neutral-400 text-sm md:text-base">
            {edu.description}
          </p>

          {/* Key Achievements */}
          <div className="space-y-2">
            <h4 className="font-medium text-neutral-900 dark:text-neutral-100">Achievements:</h4>
            <ul className="space-y-1 text-sm md:text-base">
              {edu.achievements.map((achievement, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.1 }}
                  className="flex items-start text-neutral-600 dark:text-neutral-400"
                >
                  <span className="text-emerald-500 dark:text-emerald-400 mr-2">•</span>
                  {achievement}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Key Courses */}
          <div className="space-y-2">
            <h4 className="font-medium text-neutral-900 dark:text-neutral-100">Key Courses:</h4>
            <div className="flex flex-wrap gap-2">
              {edu.courses.map((course, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  className="px-2.5 py-1 text-xs font-medium
                    bg-neutral-100/80 dark:bg-neutral-700/80
                    text-neutral-600 dark:text-neutral-400
                    rounded-full border border-neutral-200/50 dark:border-neutral-600/50
                    hover:bg-emerald-50 dark:hover:bg-emerald-900/20
                    hover:text-emerald-600 dark:hover:text-emerald-400
                    transition-colors duration-300"
                >
                  {course}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Skills Acquired */}
          <div className="space-y-2 pt-1">
            <h4 className="font-medium text-neutral-900 dark:text-neutral-100">Skills Acquired:</h4>
            <div className="flex flex-wrap gap-1.5">
              {edu.skills.map((skill, idx) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  className="px-2.5 py-1 text-xs font-medium
                    bg-emerald-50/80 dark:bg-emerald-900/20
                    text-emerald-600 dark:text-emerald-400
                    rounded-full border border-emerald-200/50 dark:border-emerald-700/50
                    hover:bg-emerald-100 dark:hover:bg-emerald-800/30
                    transition-colors duration-300 flex items-center"
                >
                  <FiCode className="mr-1 w-3 h-3" />
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function EducationCards() {
  // Add client-side only check
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (typeof window === 'undefined' || !mounted) {
    return <div className="min-h-[200px] flex items-center justify-center">
      <div className="w-6 h-6 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
    </div>;
  }
  return (
    <div className="space-y-10">
      {education.map((edu, index) => (
        <EducationCard key={index} edu={edu} index={index} />
      ))}
    </div>
  );
}
