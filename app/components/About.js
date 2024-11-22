export default function About() {
  return (
    <section className="min-h-full bg-white dark:bg-gray-900 py-16 px-5">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-semibold mb-6 text-center text-gray-900 dark:text-white">
          About Me
        </h2>
        <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
          A motivated, adaptable, fast self-led learner, and problem solver based in Bogor, Indonesia. 
          Passionate about all types of jobs in the IT field, with extensive experience in Web Development 
          and Cloud Computing.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Expertise</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>System Administration</li>
              <li>Cloud Computing</li>
              <li>DevOps</li>
            </ul>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Other Skills</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>Web Development</li>
              <li>Troubleshooting</li>
              <li>Task Management</li>
              <li>Network Administration</li>
              <li>Network Configuration</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
