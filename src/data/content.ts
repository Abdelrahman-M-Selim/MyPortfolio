import { Mail, MapPin, Phone } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const personalInfo = {
  name: "Abdelrahman Selim",
  role: "Full Stack Developer specializing in Frontend Architecture",
  bio: [
    "Iam a Full-Stack dev specialized in frontend development, building practical SaaS applications using React, Next.js, Node.js, and TypeScript. Experienced in integrating both frontend and backend systems, with a solid understanding of Microservices architecture and modular monolith for backend architectures, System Design, SOLID principles, and CI/CD pipelines.",
    "I have a strong foundation in data structures and algorithms, which enables me to write efficient and optimized code. I am passionate about creating user-friendly interfaces and seamless user experiences, and I continuously strive to stay updated with the latest technologies and best practices in web development."
  ],
  resume: "/pics/Abdelrahman_Selim.pdf",
  socials: [
    { name: "Email", icon: Mail, url: "mailto:engabdo880@gmail.com", display: "engabdo880@gmail.com" },
    { name: "Phone", icon: Phone, url: "tel:+201027602924", display: "+201027602924" },
    { name: "Location", icon: MapPin, url: "#", display: "Zagazig, Egypt" },
    { name: "LinkedIn", icon: FaLinkedin, url: "https://www.linkedin.com/in/abdelrahman-selim-0401a9355", display: "abdelrahman-selim" },
    { name: "GitHub", icon: FaGithub, url: "https://github.com/Abdelrahman-M-Selim", display: "@Abdelrahman-M-Selim" }
  ]
};

export const skillsCategories = [
  {
    title: "Frontend & UI",
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Next.js", "Tailwind CSS", "TypeScript"]
  },
  {
    title: "State Management & Caching",
    skills: ["Redux Toolkit", "Zustand", "React Query"]
  },
  {
    title: "Backend & Tools",
    skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "Docker"]
  }
];

export const experience = [
  {
    title: "Frontend Developer (Contract)",
    institute: "Zag-Eng Project",
    date: "Feb 2026 - May 2026",
    description: "Collaborated in a cross-functional team of Frontend, Backend, and UI/UX engineers to develop the Zag-Eng project. Partnered closely with another frontend developer to build the user interface using React.js, ensuring seamless integration with backend APIs and adherence to UI/UX designs from inception to successful project delivery."
  }
];  

export const education = [
  {
    degree: "BSc Computer and Information Systems",
    institute: "Zagazig University",
    date: "2023 - Expected 2027",
    location: "Zagazig, Egypt"
  },
  {
    degree: "Web Development Using React JS (145 hrs)",
    institute: "Information Technology Institute (ITI)",
    date: "Completed Aug. 2025",
    location: "Egypt"
  }
];

export const projects = [
  {
    title: "Nezuko HR-manager",
    description: "Unified SaaS HRMS for the full employee lifecycle — from recruitment to payroll and asset management.",
    tech: ["Next.js", "React Query", "Proxy"],
    image: "/pics/Nezuko-Manager.jpg",
    live: "https://nezuko-system.vercel.app/",
    github: "https://github.com/Nezuko-G/Nezuko"
  },
  {
    title: "Zag-Eng Family",
    description: "A centralized academic management system for universities to handle events, facilities, and institutional resources.",
    tech: ["React.js", "React Query", "Zustand"],
    image: "/pics/Zag-Eng-Family.webp",
    live: "https://zagengfamily.org/",
    github: "https://github.com/Abdelrahman-M-Selim/Zag-Eng-Family"
  },
  {
    title: "Nezuko HR-Portal",
    description: "Job board portal consuming RESTful APIs. Optimized with request debouncing and robust server-state caching.",
    tech: ["React.js", "React Query", "Zustand"],
    image: "/pics/HR.webp",
    live: "https://nezuko-portal.vercel.app/",
    github: "https://github.com/Abdelrahman-M-Selim/Nezuko-Portal"
  },
  {
    title: "Rochetta Pharmacy",
    description: "E-commerce application featuring dynamic product catalog, automated caching via RTK Query, and rendering optimizations.",
    tech: ["React", "RTK Query", "Tailwind"],
    image: "/pics/landing-page-Rochetta.webp",
    live: "https://rochetta-v5sh.vercel.app/dashboard",
    github: "https://github.com/Abdelrahman-M-Selim/Rochetta"
  },
  {
    title: "Business Incubator Platform",
    description: "A unified web and desktop interface (Electron) for admins and entrepreneurs to centralize project tracking workflows.",
    tech: ["React", "Electron.js", "CSS"],
    image: "/pics/incubator.webp",
    live: "https://abd0selim2.alwaysdata.net/",
    github: "https://github.com/Abdelrahman-M-Selim/Business-Incubator-Platform-DBMS"
  },
  {
    title: "Ketabak Bookstore",
    description: "Responsive frontend built entirely without frameworks. Features client-side search, filtering, and simulated auth.",
    tech: ["Vanilla JS", "DOM Manipulation"],
    image: "/pics/ketabak.webp",
    live: "https://aelaraby6.github.io/Ketabak/",
    github: "https://github.com/Abdelrahman-M-Selim/Ketabak"
  }
];

export const certificates = [
  {
    title: "Web Dev Using React JS (145 hrs)",
    issuer: "Information Technology Institute (ITI)",
    image: "/pics/Certificate.jpg"
  },
  {
    title: "Algorithm Analysis",
    issuer: "Udemy",
    image: "/pics/algorithm-certificate.webp"
  },
  {
    title: "TIDA Gigs Freelance Training Program",
    issuer: "Udemy",
    image: "/pics/tida-certificate.jpg"
  }
];
