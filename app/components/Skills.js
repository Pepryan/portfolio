"use client";
import { motion } from 'framer-motion';
import { FiCode, FiCloud, FiDatabase, FiServer, FiGlobe, FiTool, FiBox, FiLayers, FiRefreshCw, FiTerminal, FiActivity, FiWifi, FiShield, FiGitBranch, FiSettings, FiTrello } from 'react-icons/fi';

const Skills = () => {
  const skillCategories = [
    {
      title: "Cloud & Infrastructure",
      items: [
        { 
          name: "AWS", 
          icon: <FiCloud className="text-orange-500" />,
          details: "EC2, S3, Lambda, RDS" 
        },
        { 
          name: "GCP", 
          icon: <FiCloud className="text-blue-500" />,
          details: "Compute Engine, Cloud Storage" 
        },
        { 
          name: "OpenStack", 
          icon: <FiCloud className="text-purple-500" />,
          details: "Private Cloud Infrastructure" 
        },
        { 
          name: "Kubernetes", 
          icon: <FiLayers className="text-blue-600" />,
          details: "Container Orchestration" 
        },
        { 
          name: "Docker", 
          icon: <FiBox className="text-blue-400" />,
          details: "Containerization" 
        },
      ]
    },
    {
      title: "Development & DevOps",
      items: [
        { 
          name: "Frontend", 
          icon: <FiGlobe className="text-gray-900 dark:text-white" />, 
          details: "HTML, CSS, JavaScript, React" 
        },
        { 
          name: "Backend", 
          icon: <FiServer className="text-gray-900 dark:text-white" />, 
          details: "Python, Node.js, PHP" 
        },
        { 
          name: "Database", 
          icon: <FiDatabase className="text-gray-900 dark:text-white" />, 
          details: "MySQL, PostgreSQL, MariaDB" 
        },
        { 
          name: "CI/CD", 
          icon: <FiRefreshCw className="text-gray-900 dark:text-white" />, 
          details: "GitLab, Jenkins, GitOps" 
        },
      ]
    },
    {
      title: "System & Network",
      items: [
        { 
          name: "Linux", 
          icon: <FiTerminal className="text-gray-900 dark:text-white" />,
          details: "Ubuntu, CentOS, RedHat" 
        },
        { 
          name: "Monitoring", 
          icon: <FiActivity className="text-gray-900 dark:text-white" />,
          details: "Prometheus, Grafana, ELK" 
        },
        { 
          name: "Network", 
          icon: <FiWifi className="text-gray-900 dark:text-white" />,
          details: "Cisco, Routing & Switching" 
        },
        { 
          name: "Security", 
          icon: <FiShield className="text-gray-900 dark:text-white" />,
          details: "Firewalld, Iptables" 
        },
      ]
    },
    {
      title: "Tools & Automation",
      items: [
        { 
          name: "Version Control", 
          icon: <FiGitBranch className="text-gray-900 dark:text-white" />,
          details: "Git, GitHub, GitLab" 
        },
        { 
          name: "Automation", 
          icon: <FiSettings className="text-gray-900 dark:text-white" />,
          details: "Ansible, Shell Script" 
        },
        { 
          name: "Virtualization", 
          icon: <FiLayers className="text-gray-900 dark:text-white" />,
          details: "VirtualBox, KVM, VMware" 
        },
        { 
          name: "Project Tools", 
          icon: <FiTrello className="text-gray-900 dark:text-white" />,
          details: "Jira, GitLab" 
        },
      ]
    }
  ];

  return (
    <section className="min-h-full bg-white dark:bg-gray-900 py-16 px-5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Technical Skills
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="space-y-12">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white text-center">
                {category.title}
              </h3>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: idx * 0.2 }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6"
              >
                {category.items.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5, scale: 1.05 }}
                    className="group bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex flex-col items-center text-center space-y-3">
                      <div className="text-3xl group-hover:scale-110 transition-transform">
                        {skill.icon}
                      </div>
                      <h4 className="font-medium text-gray-900 dark:text-white">
                        {skill.name}
                      </h4>
                      {skill.details && (
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          {skill.details}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
