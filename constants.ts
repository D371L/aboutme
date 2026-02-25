import { Project, Certification, TechCategory } from './types';

export const HERO_TITLE = "D371L";
export const HERO_SUBTITLE = "ψ Forged in Hell\nI walk unseen, I code unheard\nYet fire marks my path";

export const MANIFESTO_TEXT = [
  "I am a self-made entrepreneur forged through years of relentless pursuit.",
  "As a developer I rose without masters, teaching myself every craft, every discipline, turning obstacles into fuel.",
  "I have built and led countless projects, many bound to IT, each a spark that became flame.",
  "What I create is born from silence and pressure, shaped in chaos, carried forward with unbroken will, sealed in fire."
];

export const EXPERIENCE_TEXT = [
  "Through years I have carried fire into code and projects.",
  "Some were forged into lasting creations, others burned as trials, but each left its mark in me."
];

export const SCRIPTURES_TEXT = "Marks I earned through fire, silence, and persistence.\nEach seal a proof of trial, each page a fragment of the abyss.";

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'BILLCLICK',
    description: 'Smart building committee management platform with full transparency. Services include cleaning, elevators, gardening, insurance, and more. Professional management and billing in one place.',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'SEO'],
    link: 'https://billclick.co.il/',
    imageUrl: '/aboutme/assets/billclick_screen.webp',
  },
  {
    id: '2',
    title: 'ICEKING_COURSES',
    description: 'Boikov Mindset — digital courses platform for mental coaching. Features course catalog, workshops, personal coach profiles, and student enrollment system.',
    techStack: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS', 'Recharts'],
    link: 'https://courses.iceking.guru/',
    imageUrl: '/aboutme/assets/courses_iceking_screen.webp',
  },
  {
    id: '3',
    title: 'ICEKING_MINDSET',
    description: 'Boikov Mindset — landing page for a certified NLP mental coach. Mental training and peak performance. Practical tools for self-control, resilience, and achieving goals.',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS', 'Google Analytics'],
    link: 'https://mindset.iceking.guru/',
    imageUrl: '/aboutme/assets/mindset_iceking_screen.webp',
  },
  {
    id: '4',
    title: 'DEV_CONSOLE',
    description: 'Secure access portal and developer dashboard with neon cyberpunk aesthetic. Role-based authentication, admin and developer panels, and dark/light mode with customizable accent colors.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    link: 'https://d371l.github.io/devconsole/#/login',
    imageUrl: '/aboutme/assets/devconsole_screen.webp',
  },
  {
    id: '5',
    title: 'VAADBIT',
    description: 'Building committee payment management app. Simple, secure, and fast payments with full data transparency and real-time updates. Available on iOS and Android.',
    techStack: ['WordPress', 'Elementor', 'PHP', 'Mobile App'],
    link: 'https://vaadbit.com/',
    imageUrl: '/aboutme/assets/vaadbit_screen.webp',
  },
  {
    id: '6',
    title: 'VAADBOT',
    description: 'Building committee management app with Alexy AI digital assistant. Management, collections, discussions, tenant meetings, and supplier management with full report transparency.',
    techStack: ['WordPress', 'Elementor', 'PHP', 'AI', 'Mobile App'],
    link: 'https://vaadbot.com/',
    imageUrl: '/aboutme/assets/vaadbot_screen.webp',
  },
  {
    id: '7',
    title: 'MORAL_TOGETHER',
    description: 'Social organization connecting good forces. An ecosystem that links people, initiatives, and nonprofits to create a reality of abundance and hope. 500+ participants.',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'FontAwesome'],
    link: 'https://moraltogether.com/',
    imageUrl: '/aboutme/assets/moraltogether_screen.webp',
  },
  {
    id: '8',
    title: 'NURSES_ACADEMY',
    description: 'Academic nursing school website for Dr. J. Zeideh at Bnai Zion Medical Center. Course programs, faculty staff, registration, news, and events for nursing students.',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    link: 'https://nurses.co.il/',
    imageUrl: '/aboutme/assets/nurses_screen.webp',
  },
  {
    id: '9',
    title: 'GODS_WILL',
    description: 'Social network platform for a faith-based community. Create groups, add photos, connect with friends, and share content. Available on Google Play and App Store.',
    techStack: ['PHP', 'OSSN', 'jQuery', 'Bootstrap', 'Mobile App'],
    link: 'https://godswillambassador.com/',
    imageUrl: '/aboutme/assets/godswill_screen.webp',
  },
  {
    id: '10',
    title: 'ORLY_SITBON',
    description: 'Orly Sitbon Patisserie — elegant business website for a French-style bakery in Nahariya. Showcases pastries, desserts, brunches, and catering platters with responsive design and local SEO.',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'SEO'],
    link: 'https://orlysitbon.co.il/',
    imageUrl: '/aboutme/assets/orlysitbon_screen.png',
  },
  {
    id: '11',
    title: 'HAZMAG',
    description: 'Guardians of Balance. OSINT research and reporting platform for a non-governmental organization investigating hostile actors and threats to public safety. Web and mobile application.',
    techStack: ['Flutter', 'Dart', 'OSINT', 'Mobile App'],
    link: 'https://hazmag.org/',
    imageUrl: '/aboutme/assets/hazmag_screen.webp',
  },
  {
    id: '12',
    title: 'ZUZIM_CASH',
    description: 'Modern digital wallet platform with multi-level financial management system. Unites administrators, branches, and users in a unified ecosystem with full control and transaction transparency.',
    techStack: ['SvelteKit', 'TypeScript', 'Go', 'Gin Framework', 'PostgreSQL', 'JWT', 'GORM', 'Tailwind CSS', 'Docker', 'DigitalOcean'],
    link: 'https://zuzim.cash/',
    imageUrl: '/aboutme/assets/zuzim_cash.jpg',
  },
  {
    id: '13',
    title: 'ASMODEUS',
    description: 'Neon wheel of fortune for giveaways and interactive picks. Saves state, plays synthy sounds, has demo auto-spin mode, and ships as a PWA.',
    techStack: ['React 18', 'TypeScript', 'Vite 5', 'Tailwind CSS 3', 'D3', 'Web Audio API', 'PWA'],
    link: 'https://d371l.github.io/asmodeus/',
    imageUrl: '/aboutme/assets/asmodeus_screen.jpg',
  },
  {
    id: '14',
    title: 'BELIARG',
    description: 'The Eternal Forge. "Exure vivos donec sol taceat". A dark, gamified productivity ecosystem (PWA) that transforms daily tasks into Chains, expenses into Sacrifices, and habits into Rituals.',
    techStack: ['React 19', 'Node.js', 'PostgreSQL', 'PWA'],
    link: 'https://d371l.github.io/beliarg/',
    imageUrl: '/aboutme/assets/beliarg_screen.jpg',
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: 'Bachelor of Science in Computer Science',
    issuer: 'UoPeople',
    date: 'Jan 5, 2026',
    description: 'A long path through code, theory, and relentless self-perfection.',
    icon: 'book'
  },
  {
    title: 'Cybersecurity Seal',
    issuer: 'Google',
    date: 'Sep 2024',
    description: 'Mark of fire and defense, carved in Python, Linux, SQL, SIEM and IDS.',
    icon: 'shield'
  },
  {
    title: 'IT Support Seal',
    issuer: 'Google',
    date: 'Aug 2021',
    description: 'Foundation of systems, forged in troubleshooting, networking, and security.',
    icon: 'scroll'
  }
];

export const TECH_STACK: TechCategory[] = [
  {
    name: 'Languages',
    skills: ['Python', 'Java', 'PHP', 'JavaScript', 'Svelte', 'Bun', 'HTML5', 'CSS3', 'Go', 'Dart']
  },
  {
    name: 'Tools',
    skills: ['Linux', 'Postman', 'Ansible', 'Docker', 'Automation']
  },
  {
    name: 'Security',
    skills: ['AppSec', 'OSINT', 'RF']
  },
  {
    name: 'Cloud',
    skills: ['Google Cloud', 'DigitalOcean', 'AWS']
  }
];