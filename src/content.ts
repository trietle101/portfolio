import { Code, Palette, Zap } from "lucide-react";

export const projects = [
  {
    title: "PHIMCU Movie Streaming Website",
    description:
      "Dynamic movie streaming platform built with Next.js and TypeScript, featuring server-side rendering, TMDB API integration, and responsive design with search functionality and detailed movie pages.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Redux Toolkit",
      "TMDB API"
    ],
    link: "https://phimcu.vercel.app/",
    github: "https://github.com/trietle101/phimcu",
    status: "Live",
    period: "09/2024 - 10/2024"
  },
  {
    title: "DEKAL Enterprise Resource Planning",
    description:
      "Comprehensive ERP system with responsive design, transforming Figma designs into functional web application with enhanced performance and user experience optimization.",
    tech: ["Laravel", "Tailwind CSS", "jQuery", "MySQL"],
    link: "https://dekal.vercel.app/",
    github: "https://gitlab.com/hominhquang01/dekal",
    demo: "https://youtu.be/V_9micKD_40",
    status: "Completed",
    period: "01/2024 - 04/2024"
  },
  {
    title: "CASALOMAN Clothing Store",
    description:
      "Full-stack e-commerce platform with user authentication, admin management, shopping cart, and secure checkout. Built with React and Node.js with MongoDB integration.",
    tech: ["React.js", "Redux", "Node.js", "Express.js", "MongoDB", "JWT"],
    github: "https://github.com/trietle101/casaloman",
    status: "Completed",
    period: "10/2023 - 12/2023"
  },
  {
    title: "ROBOPET AI Robot Store",
    description:
      "Client-side e-commerce application for AI robot purchases with user authentication, admin management, shopping cart, and automated email notifications using MySQL database.",
    tech: ["PHP", "HTML/CSS", "JavaScript", "MySQL", "PHPMailer"],
    link: "http://robotpet.atwebpages.com/index.php",
    github: "https://github.com/trietle101/du-an-1",
    status: "Live",
    period: "02/2023 - 04/2023"
  }
];

export const skills = [
  {
    name: "Frontend Development",
    icon: Code,
    description: "Building modern, responsive web applications",
    items: ["React.js", "Next.js", "TypeScript", "JavaScript", "React Native"]
  },
  {
    name: "Styling & UI",
    icon: Palette,
    description: "Creating beautiful, accessible user interfaces",
    items: [
      "Tailwind CSS",
      "SASS/SCSS",
      "Material UI",
      "Ant Design",
      "Bootstrap"
    ]
  },
  {
    name: "Backend & Database",
    icon: Zap,
    description: "Server-side development and data management",
    items: [
      "Node.js",
      "Express.js",
      "PHP",
      "Laravel",
      "GraphQL",
      "RESTful APIs",
      "MySQL",
      "MongoDB",
      "PostgreSQL",
      "Firebase"
    ]
  }
];

export const experiences = [
  {
    title: "Software Engineer",
    company: "Retoolers.io",
    period: "01/2025 - Present",
    type: "Full-time",
    description: "Building scalable low-code solutions in a global environment",
    highlights: [
      "Built and optimized business logic workflows using Retool and PostgreSQL for scalable low-code solutions",
      "Designed and implemented ETL processes, scraping data from multiple sources and transforming it into unified schemas",
      "Created complex queries and custom functions to enable seamless front-end interaction with databases",
      "Built custom ReactJS components to integrate into Retool, enhancing platform functionality",
      "Collaborated with international clients to analyze requirements and provide actionable programming solutions"
    ],
    tech: ["Retool", "PostgreSQL", "TypeScript", "React.js", "Google Maps API"]
  },
  {
    title: "Front-end Developer",
    company: "Tanca.io",
    period: "11/2024 - 01/2025",
    type: "Internship",
    description:
      "Maintaining and developing HRM systems with complex architecture",
    highlights: [
      "Built and maintained scalable HRM systems using ReactJS and React Native",
      "Developed new features on a 6-year-old codebase with complex system architecture",
      "Integrated modern libraries to work seamlessly with legacy code",
      "Created reusable UI components and custom hooks to enhance functionality",
      "Optimized performance, reducing load time and improving responsiveness"
    ],
    tech: [
      "TypeScript",
      "React.js",
      "React Native",
      "Ant Design",
      "Redux",
      "Firebase"
    ]
  },
  {
    title: "Front-end Developer",
    company: "Alta Software",
    period: "01/2024 - 04/2024",
    type: "Internship",
    description:
      "Developing recruitment platforms with modern web technologies",
    highlights: [
      "Developed responsive recruitment website from Figma designs using React and TypeScript",
      "Integrated Firestore for real-time data management with scalable user interactions",
      "Implemented Firebase authentication with multiple login options for enhanced security"
    ],
    tech: ["HTML", "SASS", "TypeScript", "React.js", "Redux", "Firebase"]
  }
];
export const education = [
  {
    school: "Ho Chi Minh City University of Technology",
    degree: "Bachelor of Engineering, Computer Science",
    period: "01/2025 - Present",
    type: "Part-time"
  },
  {
    school: "FPT Polytechnic",
    degree: "Advanced Diploma in Information Technology, Web Development",
    period: "01/2022 - 05/2024",
    gpa: "GPA: 8.0/10.0"
  }
];

export const greetings = [
  "hi",
  "xin chào",
  "bonjour",
  "你好",
  "привет",
  "hola",
  "hallo",
  "ciao",
  "こんにちは",
  "안녕하세요",
  "สวัสดี"
];
