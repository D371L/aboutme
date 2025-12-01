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
    title: 'BELIARG',
    description: 'The Eternal Forge. "Exure vivos donec sol taceat". A dark, gamified productivity ecosystem (PWA) that transforms daily tasks into Chains, expenses into Sacrifices, and habits into Rituals.',
    techStack: ['React 19', 'Node.js', 'PostgreSQL', 'PWA'],
    link: 'https://beliarg.online/',
    imageUrl: '/aboutme/assets/beliarg_screen.jpg',
  },
  {
    id: '2',
    title: 'VOID_GATEWAY',
    description: 'High-performance API infrastructure built for silence and speed. Secure endpoints fortified against intrusion.',
    techStack: ['Svelte', 'Bun', 'AppSec', 'Cloud'],
    link: '#',
    imageUrl: 'https://picsum.photos/601/400?grayscale',
  },
  {
    id: '3',
    title: 'CHAOS_AUTOMATON',
    description: 'Infrastructure as Code orchestration. Deploys self-healing systems across multi-cloud environments.',
    techStack: ['Ansible', 'AWS', 'Google Cloud', 'Terraform'],
    link: '#',
    imageUrl: 'https://picsum.photos/602/400?grayscale',
  },
  {
    id: '4',
    title: 'SHIELD_PROTOCOL',
    description: 'Network defense system analyzing traffic patterns for anomalies using custom intrusion detection rules.',
    techStack: ['Java', 'SQL', 'SIEM', 'IDS'],
    link: '#',
    imageUrl: 'https://picsum.photos/603/400?grayscale',
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: 'Bachelor of Science in CS',
    issuer: 'UoPeople',
    date: 'Jan 2026',
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
    skills: ['Python', 'Java', 'PHP', 'JavaScript', 'Svelte', 'Bun', 'HTML5', 'CSS3']
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