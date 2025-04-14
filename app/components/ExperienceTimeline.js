"use client";
import { useRef, useEffect, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { FiExternalLink, FiMapPin, FiCalendar, FiBriefcase, FiCode } from 'react-icons/fi';

// Experience data
const experiences = [
  {
    role: 'Cloud Engineer',
    company: 'PT. Boer Technology (Btech)',
    link: 'https://btech.id',
    period: 'February 2022 - Present',
    isPresent: true,
    location: 'Jakarta, Indonesia',
    description: 'Managing OpenStack cloud infrastructure, implementing monitoring solutions, and automating deployment processes.',
    achievements: [
      'Reduced resource provisioning time by 70% through automation',
      'Implemented comprehensive monitoring with Grafana & Prometheus',
      'Optimized cloud resource utilization saving 25% in infrastructure costs',
      'Developed CI/CD pipelines for streamlined deployments'
    ],
    tools: ['OpenStack', 'Kubernetes', 'Python', 'Bash', 'Grafana', 'Prometheus', 'Linux']
  },
  {
    role: 'Web Developer',
    company: 'PT. Ciptadra Softindo',
    link: 'https://onebox.co.id',
    period: 'March 2020 - February 2021',
    location: 'Depok, West Java, Indonesia',
    description: 'Developed and maintained web applications for clients, focusing on CRM solutions and custom business applications.',
    achievements: [
      'Delivered 5+ client projects on time and within budget',
      'Implemented Docker containerization for consistent deployments',
      'Optimized database queries improving application performance by 40%',
      'Collaborated in a hybrid work environment during the pandemic'
    ],
    tools: ['PHP', 'JavaScript', 'Docker', 'Jira', 'Git', 'MySQL']
  },
  {
    role: 'Instructor HTML, CSS, Javascript',
    company: 'Progate (Digitalent Kominfo & Event Ready Set Code!)',
    link: 'https://digitalent.kominfo.go.id/',
    period: 'June 2020 - November 2020',
    location: 'Bogor, West Java, Indonesia',
    description: 'Taught web development fundamentals to students as part of government digital talent initiative.',
    achievements: [
      'Trained 100+ students in web development fundamentals',
      'Created custom learning materials and coding exercises',
      'Achieved 90% student satisfaction rating',
      'Mentored students on real-world projects'
    ],
    tools: ['HTML', 'CSS', 'JavaScript', 'Discord']
  }
];

// Experience Card Component
const ExperienceCard = ({ experience, index, isLast }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.2 });
  const controls = useAnimation();
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <div className="relative">
      {/* Desktop timeline elements */}
      <div className="hidden md:block absolute left-0 top-0 bottom-0 w-12 z-10">
        {/* Timeline dot */}
        <div className="absolute left-5 top-6 w-4 h-4 rounded-full
          bg-blue-500 dark:bg-blue-400
          ring-4 ring-white dark:ring-neutral-900
          group-hover:scale-125 transition-transform duration-300" />

        {/* Timeline line */}
        {!isLast && (
          <div className="absolute left-7 top-10 bottom-0 w-0.5
            bg-gradient-to-b from-blue-500 dark:from-blue-400
            to-blue-500/20 dark:to-blue-400/20" />
        )}

        {/* Date badge */}
        <div className="absolute -left-2 top-16 w-20 text-center text-sm font-medium
          text-blue-600 dark:text-blue-400">
          <div className="font-bold">{experience.period.split(' - ')[0]}</div>
          {experience.isPresent ? (
            <span className="inline-block mt-1 px-2 py-0.5 text-[10px] font-semibold
              bg-blue-100 dark:bg-blue-900/30
              text-blue-600 dark:text-blue-400
              rounded-full">
              Present
            </span>
          ) : (
            <div className="mt-1">{experience.period.split(' - ')[1]}</div>
          )}
        </div>
      </div>

      {/* Mobile timeline elements */}
      <div className="md:hidden absolute left-0 top-0 h-full w-6 z-10">
        <div className="absolute left-1 top-6 w-4 h-4 rounded-full
          bg-blue-500 dark:bg-blue-400
          ring-2 ring-white dark:ring-neutral-900" />

        {!isLast && (
          <div className="absolute left-3 top-10 bottom-0 w-0.5
            bg-gradient-to-b from-blue-500 dark:from-blue-400
            to-blue-500/20 dark:to-blue-400/20" />
        )}
      </div>

      {/* Card content */}
      <motion.div
        ref={cardRef}
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
        className="relative ml-10 md:ml-24 group"
      >
        <motion.div
          className={`p-5 md:p-6 rounded-xl border border-neutral-200/80 dark:border-neutral-800/80
            bg-gradient-to-br from-white/90 to-white/70 dark:from-neutral-800/90 dark:to-neutral-800/70
            backdrop-blur-sm shadow-md
            group-hover:border-blue-500/30 dark:group-hover:border-blue-400/30
            group-hover:shadow-xl transition-all duration-300
            ${isExpanded ? 'ring-2 ring-blue-500/20 dark:ring-blue-400/20' : ''}`}
          whileHover={{ y: -5 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div className="space-y-4">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
              <div>
                <h3 className="font-bold text-lg md:text-xl text-neutral-900 dark:text-neutral-100
                  group-hover:text-blue-600 dark:group-hover:text-blue-400
                  transition-colors flex items-center gap-2">
                  <FiBriefcase className="w-5 h-5 text-blue-500 dark:text-blue-400 flex-shrink-0" />
                  {experience.role}
                </h3>
                <p className="text-base text-neutral-700 dark:text-neutral-300
                  group-hover:text-blue-600 dark:group-hover:text-blue-400
                  transition-colors">
                  <a href={experience.link} target="_blank" rel="noopener noreferrer"
                    className="hover:underline flex items-center">
                    {experience.company}
                    <FiExternalLink className="ml-1.5 w-3.5 h-3.5" />
                  </a>
                </p>
                <p className="text-sm text-neutral-500 dark:text-neutral-500 flex items-center mt-1">
                  <FiMapPin className="mr-1.5 w-3.5 h-3.5" />
                  {experience.location}
                </p>
              </div>

              <div className="md:hidden flex items-center text-sm text-neutral-500 dark:text-neutral-500 mt-1">
                <FiCalendar className="mr-1.5 w-3.5 h-3.5" />
                {experience.period}
              </div>
            </div>

            <p className="text-neutral-600 dark:text-neutral-400 text-sm md:text-base">
              {experience.description}
            </p>

            {/* Achievements - Expandable on mobile */}
            <div className={`space-y-2 ${isExpanded ? 'block' : 'hidden md:block'}`}>
            {/* Use client-side only rendering for achievements */}
            {typeof window !== 'undefined' && (
              <>
                <h4 className="font-medium text-neutral-900 dark:text-neutral-100">Key Achievements:</h4>
                <ul className="space-y-1 text-sm md:text-base">
                  {experience.achievements.map((achievement, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + idx * 0.1 }}
                      className="flex items-start text-neutral-600 dark:text-neutral-400"
                    >
                      <span className="text-blue-500 dark:text-blue-400 mr-2">•</span>
                      {achievement}
                    </motion.li>
                  ))}
                </ul>
              </>
            )}
            </div>

            {/* Tools & Technologies */}
            <div className="flex flex-wrap gap-1.5 pt-2">
              {/* Use client-side only rendering for tools */}
              {typeof window !== 'undefined' && (
                <>
                  {experience.tools.map((tool, idx) => (
                    <motion.span
                      key={tool}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.05 }}
                      className="px-2.5 py-1 text-xs font-medium
                        bg-blue-50/80 dark:bg-blue-900/20
                        text-blue-600 dark:text-blue-400
                        rounded-full border border-blue-200/50 dark:border-blue-700/50
                        hover:bg-blue-100 dark:hover:bg-blue-800/30
                        transition-colors duration-300 flex items-center"
                    >
                      <FiCode className="mr-1 w-3 h-3" />
                      {tool}
                    </motion.span>
                  ))}
                </>
              )}
            </div>

            {/* Mobile expand/collapse button */}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="md:hidden mt-2 text-sm text-blue-500 dark:text-blue-400 font-medium"
            >
              {isExpanded ? 'Show less' : 'Show more'}
            </button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default function ExperienceTimeline() {
  // Add client-side only check
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (typeof window === 'undefined' || !mounted) {
    return <div className="min-h-[200px] flex items-center justify-center">
      <div className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div>;
  }
  return (
    <div className="relative py-4">
      <div className="space-y-16">
        {experiences.map((exp, index) => (
          <ExperienceCard
            key={index}
            experience={exp}
            index={index}
            isLast={index === experiences.length - 1}
          />
        ))}
      </div>
    </div>
  );
}
