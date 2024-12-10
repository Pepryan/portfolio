export const componentConfig = {
  hero: {
    enabled: true,
    title: "Febryan Ramadhan",
    subtitle: "Cloud Engineer | DevSecOps | Web",
  },
  experience: {
    enabled: true,
    title: "Experience",
    items: [
      {
        role: 'Cloud Engineer',
        company: 'PT. Boer Technology',
        period: '2022 - Present',
        location: 'Jakarta',
        responsibilities: [
          'Managed OpenStack and Kubernetes infrastructure',
          'Implemented monitoring solutions with Grafana & Prometheus',
          'Automated tasks using Python and Bash scripting',
          'Maintained high availability for cloud services'
        ]
      },
      {
        role: 'Web Developer',
        company: 'PT. Ciptadra Softindo',
        period: '2020 - 2021',
        location: 'Depok',
        responsibilities: [
          'Developed CRM solutions using PHP frameworks',
          'Implemented Docker containerization',
          'Managed client support and issue resolution',
          'Collaborated in hybrid work environment'
        ]
      }
    ]
  },
  education: {
    enabled: true,
    title: "Education",
    items: [
      {
        degree: 'Bachelor of Information Systems',
        institution: 'Gunadarma University',
        period: '2014 - 2021',
        location: 'Depok'
      },
      {
        degree: 'Computer and Network Engineering',
        institution: 'SMKN 3 Bogor',
        period: '2011 - 2014',
        location: 'Bogor'
      }
    ]
  },
  skills: {
    enabled: true,
    title: "Skills",
    categories: [
      {
        title: "Cloud & Infrastructure",
        items: [
          { name: "AWS", focus: "EC2, S3, RDS, Lambda" },
          { name: "OpenStack", focus: "Private Cloud Management" },
          { name: "Kubernetes", focus: "Container Orchestration" },
          { name: "Docker", focus: "Containerization" }
        ]
      },
      {
        title: "DevOps & Automation",
        items: [
          { name: "CI/CD", focus: "GitLab CI, Jenkins" },
          { name: "Infrastructure as Code", focus: "Terraform, Ansible" },
          { name: "Monitoring", focus: "Prometheus, Grafana" },
          { name: "Scripting", focus: "Python, Bash" }
        ]
      }
    ]
  },
  contact: {
    enabled: true,
    email: 'febryanramadhan@gmail.com',
    location: 'Bogor, Indonesia',
    social: {
      linkedin: 'linkedin.com/in/febryanramadhan',
      github: 'github.com/Pepryan',
      gitlab: 'gitlab.com/Pepryan',
      twitter: 'x.com/pepryan',
      instagram: 'instagram.com/nayrbef',
      telegram: 't.me/febryanramadhan'
      // youtube: 'youtube.com/febryanramadhan',
      // tiktok: 'tiktok.com/febryanramadhan',
      // discord: 'discord.gg/febryanramadhan',
      // whatsapp: 'wa.me/febryanramadhan',
    }
  }
}; 