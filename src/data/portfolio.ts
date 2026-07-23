export const profile = {
  name: 'Thaariq Kurnia Spama',
  shortName: 'Thaariq',
  role: 'Full-Stack Developer',
  email: 'kurniathaariq55@gmail.com',
  phone: '+62 851 564 328 71',
  location: 'Depok, Indonesia',
  availability: 'Open to opportunities',
  github: 'https://github.com/rapunzzz',
  linkedin: 'https://www.linkedin.com/in/thaariqkurnia',
  introduction:
    'I build thoughtful digital systems from interface to infrastructure, combining reliable engineering with clear, human-centered experiences.',
  about:
    'I am a fourth-year Information Systems student at the University of Indonesia who enjoys turning complex requirements into useful software. My work spans product interfaces, backend services, APIs, and databases.',
  philosophy:
    'I care about practical architecture, maintainable code, and products that make a measurable difference for the people using them.',
}

export const signals = [
  { value: 'Curious', label: 'Default mode' },
  { value: 'Build + play', label: 'Creative process' },
  { value: 'Depok, ID', label: 'Current universe' },
  { value: 'Say hello', label: 'Channel is open' },
]

export const skillGroups = [
  {
    title: 'Interface systems',
    description: 'Responsive product experiences with clear interaction and visual structure.',
    skills: ['Vue.js', 'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Figma'],
  },
  {
    title: 'Backend & APIs',
    description:
      'Application logic and services designed around maintainability and real use cases.',
    skills: ['Express.js', 'Django', '.NET', 'Go Fiber', 'REST APIs'],
  },
  {
    title: 'Data & delivery',
    description: 'Reliable data models and pragmatic tools for shipping complete applications.',
    skills: ['PostgreSQL', 'SQL Server', 'SQLite', 'Prisma', 'Git'],
  },
]

export const experiences = [
  {
    title: 'Business Process & Digital Application Intern',
    company: 'PT Kimia Farma Tbk',
    period: 'Jun 2026 - Present',
    type: 'Experience',
    description:
      "Developing and implementing system improvements and feature enhancements based on requests tracked through the company's internal ticketing system. Contributing to the development of an e-catalog platform for the marketing division, including product listing, filtering, and content management flows.",
    impact:
      'Accelerating issue resolution cycles and supporting the marketing team with a structured digital product catalog.',
  },
  {
    title: 'Software Engineer Intern',
    company: 'Panasonic Manufacturing Indonesia',
    period: 'Sep 2025 - Jan 2026',
    type: 'Experience',
    description:
      'Developing a Labor Cost Control System that processes Excel-based business plans and calculates monthly labor needs using SUT data, while assisting with technical troubleshooting across the team.',
    impact: 'Improving planning accuracy and operational visibility.',
  },
  {
    title: 'Business-IT Case Competition Staff',
    company: 'COMPFEST',
    period: 'Apr 2024 - Oct 2024',
    type: 'Organization',
    description:
      'Facilitated registration and onboarding for more than 50 high-school teams and 80 university teams, acting as a primary participant contact throughout the event.',
    impact: 'Supported 130+ teams through a clear onboarding process.',
  },
  {
    title: 'Equipment & Support Staff',
    company: 'Pesta Rakyat Komputer',
    period: 'Mar 2023 - Sep 2023',
    type: 'Organization',
    description:
      'Coordinated event preparation, materials, equipment handling, and post-event operations to keep delivery running smoothly.',
    impact: 'Built hands-on collaboration and operational problem-solving skills.',
  },
]

export const education = [
  {
    degree: 'Bachelor of Information Systems',
    institution: 'University of Indonesia',
    location: 'Depok, Indonesia',
    period: '2022 - Present',
  },
  {
    degree: 'Natural Science',
    institution: 'MAN 2 Kudus',
    location: 'Kudus, Indonesia',
    period: '2019 - 2022',
  },
]

export const projects = [
  {
    title: '70e-Con',
    eyebrow: 'Featured full-stack system',
    description:
      'A learning management system that helps students organize courses, follow academic rankings, and evaluate performance in one focused experience.',
    contribution:
      'Built the product across interface, API, relational data, and deployment layers.',
    outcome: 'A complete learning workflow designed around student visibility and progress.',
    image: '/images/70econ.png',
    tech: ['Next.js', 'Express.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
    live: 'https://70e-con.vercel.app/',
    status: 'Live',
  },
  {
    title: 'PacilFlix',
    eyebrow: 'Web application',
    description:
      'A simplified movie streaming product with catalog discovery, trailers, and subscription management.',
    contribution: 'Designed and implemented core server-rendered product flows and data handling.',
    outcome: 'A cohesive exploration of transactional web application patterns.',
    image: '/images/PacilFlix.png',
    tech: ['Django', 'Python', 'SQLite'],
    live: '',
    status: 'Private build',
  },
  {
    title: 'HistorySphere',
    eyebrow: 'Product design',
    description:
      'An educational application concept that makes learning history more interactive and approachable.',
    contribution:
      'Created the product structure, interaction model, and visual interface in Figma.',
    outcome: 'A user-centered learning concept with a clear and engaging content journey.',
    image: '/images/HistorySphere.png',
    tech: ['Figma', 'UX Design', 'Prototyping'],
    live: '',
    status: 'Case concept',
  },
]

export const labProjects = [
  {
    title: 'DateMate',
    description: 'A playful random date-idea spinner for breaking decision paralysis.',
    url: 'https://datemate-fun.netlify.app/',
  },
  {
    title: 'XBoothX',
    description: 'An interactive browser-based photo booth experience.',
    url: 'https://xboothx.netlify.app/',
  },
]
