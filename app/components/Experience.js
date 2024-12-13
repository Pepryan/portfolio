import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const experiences = [
  {
    role: 'Cloud Engineer',
    company: 'PT. Boer Technology (Btech)',
    link: 'https://btech.id',
    period: 'February 2022 - Present',
    isPresent: true,
    location: 'Jakarta, Indonesia',
    tools: ['OpenStack', 'Kubernetes', 'Python', 'Bash', 'Grafana', 'Prometheus', 'Linux']
  },
  {
    role: 'Web Developer',
    company: 'PT. Ciptadra Softindo',
    link: 'https://onebox.co.id',
    period: 'March 2020 - February 2021',
    location: 'Depok, West Java, Indonesia',
    tools: ['PHP', 'JavaScript', 'Docker', 'Jira', 'Git', 'MySQL']
  },
  {
    role: 'Instructor HTML, CSS, Javascript',
    company: 'Progate (Digitalent Kominfo & Event Ready Set Code!)',
    link: 'https://digitalent.kominfo.go.id/',
    period: 'June 2020 - November 2020',
    location: 'Bogor, West Java, Indonesia',
    tools: ['HTML', 'CSS', 'JavaScript', 'Discord']
  }
];

export default function Experience() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative">
      {/* Progress Indicator */}
      <motion.div
        style={{ scaleY }}
        className="absolute left-8 top-0 bottom-0 w-px origin-top
          bg-blue-500/20 dark:bg-blue-400/20"
      />
      
      {/* Timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b 
        from-blue-500/20 dark:from-blue-400/20 via-neutral-300 dark:via-neutral-700 
        to-transparent" />
      
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative pl-24 group"
          >
            {/* Timeline dot with animation */}
            <div className="absolute left-7 top-3 w-3 h-3 rounded-full 
              bg-blue-500 dark:bg-blue-400
              ring-4 ring-white dark:ring-neutral-900
              group-hover:scale-125 transition-transform duration-300" />
            
            {/* Date badge with enhanced style */}
            <div className="absolute left-0 top-7 text-sm font-medium 
              text-blue-600 dark:text-blue-400 transition-colors">
              {exp.period.split(' - ')[0]}<br></br>
              {exp.isPresent && (
                <span className="ml-2 px-2 py-0.5 text-[10px] font-semibold 
                  bg-blue-100 dark:bg-blue-900/30 
                  text-blue-600 dark:text-blue-400 
                  rounded-full">
                  Present
                </span>
              )}
            </div>
            
            <div className="p-6 rounded-xl border border-neutral-200/80 dark:border-neutral-800/80
              bg-white/50 dark:bg-neutral-800/50 backdrop-blur-sm
              group-hover:border-blue-500/20 dark:group-hover:border-blue-400/20
              group-hover:shadow-lg transition-all duration-300">
              <div className="space-y-3">
                <div>
                  <h3 className="font-medium text-lg text-neutral-900 dark:text-neutral-100">
                    {exp.role}
                  </h3>
                  <p className="text-base text-neutral-600 dark:text-neutral-400
                    group-hover:text-blue-600 dark:group-hover:text-blue-400 
                    transition-colors">
                    <a href={exp.link} target="_blank" rel="noopener noreferrer" 
                      className="hover:underline">
                      {exp.company}
                    </a>
                  </p>
                  <p className="text-sm text-neutral-500 dark:text-neutral-500">
                    {exp.location}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-1.5">
                  {exp.tools.map((tool, idx) => (
                    <motion.span
                      key={tool}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.1 }}
                      className="px-2 py-0.5 text-xs font-medium 
                        bg-neutral-100/80 dark:bg-neutral-700/80
                        text-neutral-600 dark:text-neutral-400 
                        rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/20
                        hover:text-blue-600 dark:hover:text-blue-400
                        transition-colors duration-300"
                    >
                      {tool}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
