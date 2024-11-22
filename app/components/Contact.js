import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiGitlab, FiLinkedin } from 'react-icons/fi';

const Contact = () => {
  const contactInfo = {
    phone: '08888024148',
    email: 'febryanramadhan@gmail.com',
    location: 'Jl. Parkit VII, Ciluar Asri Blok B9 No. 26, Bogor, Indonesia',
    social: {
      linkedin: 'www.linkedin.com/in/febryanramadhan',
      github: 'github.com/Pepryan',
      gitlab: 'gitlab.com/Pepryan',
      blog: 'ryan13-pc.blogspot.com'
    }
  };

  return (
    <section className="min-h-full bg-white dark:bg-gray-900 py-16 px-5">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          Contact Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Contact Information
            </h3>
            <div className="space-y-4">
              <p className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <FiPhone className="text-blue-500" />
                {contactInfo.phone}
              </p>
              <p className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <FiMail className="text-blue-500" />
                {contactInfo.email}
              </p>
              <p className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <FiMapPin className="text-blue-500" />
                {contactInfo.location}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Social Links
            </h3>
            <div className="space-y-4">
              {Object.entries(contactInfo.social).map(([platform, url]) => (
                <a
                  key={platform}
                  href={`https://${url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                >
                  {platform === 'linkedin' && <FiLinkedin className="text-blue-500" />}
                  {platform === 'github' && <FiGithub className="text-blue-500" />}
                  {platform === 'gitlab' && <FiGitlab className="text-blue-500" />}
                  {url}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
