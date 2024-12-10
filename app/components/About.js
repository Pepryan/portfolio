export default function About() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 py-16">
      <div className="lg:col-span-2 space-y-6">
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
            A motivated Cloud Engineer with expertise in DevSecOps and web development. 
            Experienced in managing cloud infrastructure, implementing security best practices, 
            and developing scalable solutions.
          </p>
          
          <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
            Currently focused on cloud architecture, infrastructure automation, and 
            helping organizations build secure and efficient cloud-native applications.
          </p>
        </div>
      </div>

      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-medium mb-4 text-neutral-800 dark:text-neutral-300">Current Focus</h3>
          <div className="flex flex-wrap gap-2">
            {[
              'Cloud Architecture',
              'Infrastructure Automation',
              'Security Practices',
              'Cloud-Native Apps'
            ].map((focus) => (
              <span 
                key={focus}
                className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 
                  text-neutral-600 dark:text-neutral-400 rounded-full text-sm"
              >
                {focus}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
