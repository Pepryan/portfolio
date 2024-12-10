import React from 'react';

const experiences = [
  {
    role: 'Cloud Engineer',
    company: 'PT. Boer Technology (Btech)',
    period: 'February 2022 - Present',
    location: 'Jakarta, Indonesia',
    tools: ['OpenStack', 'Kubernetes', 'Python', 'Bash', 'Grafana', 'Prometheus', 'Linux']
  },
  {
    role: 'Web Developer',
    company: 'PT. Ciptadra Softindo',
    period: 'March 2020 - February 2021',
    location: 'Depok, West Java, Indonesia',
    tools: ['PHP', 'JavaScript', 'Docker', 'Jira', 'Git', 'MySQL']
  },
  {
    role: 'Instructor HTML, CSS, Javascript',
    company: 'Progate (Digitalent Kominfo & Event Ready Set Code!)',
    period: 'June 2020 - November 2020',
    location: 'Bogor, West Java, Indonesia',
    tools: ['HTML', 'CSS', 'JavaScript', 'Discord']
  }
];

const Experience = () => {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b 
        from-neutral-300 dark:from-neutral-700 to-transparent" />
      
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-24">
            {/* Timeline dot */}
            <div className="absolute left-7 top-3 w-3 h-3 rounded-full 
              bg-neutral-300 dark:bg-neutral-700 
              ring-4 ring-white dark:ring-neutral-900" />
            
            {/* Date badge */}
            <div className="absolute left-0 top-2 text-sm font-medium 
              text-neutral-600 dark:text-neutral-400">
              {exp.period.split(' - ')[0]}
            </div>
            
            <div className="hover-card">
              <div className="card-padding space-y-3">
                <div>
                  <h3 className="font-medium text-lg text-neutral-900 dark:text-neutral-100">
                    {exp.role}
                  </h3>
                  <p className="text-base text-neutral-600 dark:text-neutral-400">
                    {exp.company}
                  </p>
                  <p className="text-sm text-neutral-500 dark:text-neutral-500">
                    {exp.location}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {exp.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2.5 py-1 text-xs font-medium bg-neutral-100 
                        dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 
                        rounded-full"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
