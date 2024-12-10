"use client";

export default function Skills() {
  const skills = {
    'Languages': ['Python', 'JavaScript', 'Bash', 'PHP'],
    'Cloud & Infrastructure': ['AWS', 'OpenStack', 'Docker', 'Kubernetes', 'Terraform'],
    'Monitoring & Tools': ['Grafana', 'Prometheus', 'ELK Stack', 'Git', 'Jenkins', 'GitLab CI']
  };

  return (
    <div className="space-y-6">
      {Object.entries(skills).map(([category, items]) => (
        <div key={category}>
          <h3 className="text-sm font-medium text-neutral-900 dark:text-neutral-100 mb-2">
            {category}
          </h3>
          <div className="flex flex-wrap gap-2">
            {items.map((skill) => (
              <span
                key={skill}
                className="px-2 py-1 text-xs bg-neutral-100 dark:bg-neutral-800 
                  text-neutral-600 dark:text-neutral-400 rounded"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
