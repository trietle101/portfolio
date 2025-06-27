import { useState, useEffect } from "react";
import {
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  Code,
  Palette,
  Zap
} from "lucide-react";
import Header from "./components/Header";
import HeroTest from "./components/HeroTest";
import "./App.css";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setDarkMode(savedTheme === "dark");
    } else {
      setDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const projects = [
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

  const experiences = [
    {
      title: "Software Engineer",
      company: "Retoolers.io",
      period: "01/2025 - Present",
      type: "Full-time",
      description:
        "Building scalable low-code solutions in a global environment",
      highlights: [
        "Built and optimized business logic workflows using Retool and PostgreSQL for scalable low-code solutions",
        "Designed and implemented ETL processes, scraping data from multiple sources and transforming it into unified schemas",
        "Created complex queries and custom functions to enable seamless front-end interaction with databases",
        "Built custom ReactJS components to integrate into Retool, enhancing platform functionality",
        "Collaborated with international clients to analyze requirements and provide actionable programming solutions"
      ],
      tech: [
        "Retool",
        "PostgreSQL",
        "TypeScript",
        "React.js",
        "Google Maps API"
      ]
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

  const skills = [
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
        "MySQL",
        "MongoDB",
        "PostgreSQL",
        "Firebase"
      ]
    }
  ];

  const education = [
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

  return (
    <div
      className={`min-h-screen font-serif transition-all duration-300 ${
        darkMode ? "bg-gray-950 text-amber-50" : "bg-amber-50 text-gray-900"
      }`}
    >
      {/* Header */}
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      {/* Hero Section */}
      <HeroTest darkMode={darkMode} />
      {/* Experience Section */}
      <section
        className={`py-20 px-6 ${darkMode ? "bg-gray-900" : "bg-white"}`}
      >
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-light mb-4">
              Professional Experience
            </h2>
            <p
              className={`text-lg ${
                darkMode ? "text-amber-200" : "text-gray-600"
              }`}
            >
              Building software solutions across different industries and
              technologies
            </p>
          </div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <article
                key={index}
                className={`p-8 rounded-2xl border transition-all duration-300 ${
                  darkMode
                    ? "border-gray-800 bg-gray-950/50"
                    : "border-gray-200 bg-amber-50/50"
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-medium mb-2">{exp.title}</h3>
                    <div className="flex items-center gap-4 mb-2">
                      <span
                        className={`text-lg ${
                          darkMode ? "text-orange-300" : "text-orange-600"
                        }`}
                      >
                        {exp.company}
                      </span>
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded-md ${
                          exp.type === "Full-time"
                            ? darkMode
                              ? "bg-green-950 text-green-300"
                              : "bg-green-100 text-green-700"
                            : darkMode
                            ? "bg-blue-950 text-blue-300"
                            : "bg-blue-100 text-blue-700"
                        }`}
                      >
                        {exp.type}
                      </span>
                    </div>
                    <p
                      className={`${
                        darkMode ? "text-amber-200" : "text-gray-600"
                      } mb-4`}
                    >
                      {exp.description}
                    </p>
                  </div>
                  <div
                    className={`text-sm font-medium ${
                      darkMode ? "text-amber-300" : "text-gray-500"
                    }`}
                  >
                    {exp.period}
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {exp.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className={`flex items-start gap-3 ${
                        darkMode ? "text-amber-100" : "text-gray-700"
                      }`}
                    >
                      <div
                        className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${
                          darkMode ? "bg-orange-400" : "bg-orange-500"
                        }`}
                      />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 text-sm font-medium rounded-lg ${
                        darkMode
                          ? "bg-gray-800 text-amber-100 border border-gray-700"
                          : "bg-white text-gray-700 border border-gray-200"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      {/* Skills Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-light mb-4">Technical Expertise</h2>
            <p
              className={`text-lg ${
                darkMode ? "text-amber-200" : "text-gray-600"
              }`}
            >
              Technologies and tools I work with daily
            </p>
          </div>

          <div className="grid gap-12 md:gap-16">
            {skills.map((skill, index) => (
              <div key={index} className="group">
                <div className="flex items-start gap-6">
                  <div
                    className={`p-3 rounded-xl ${
                      darkMode ? "bg-gray-800" : "bg-gray-100"
                    } group-hover:scale-110 transition-transform duration-200`}
                  >
                    <skill.icon
                      className={`w-6 h-6 ${
                        darkMode ? "text-orange-300" : "text-orange-500"
                      }`}
                    />
                  </div>
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-xl font-medium mb-2">{skill.name}</h3>
                      <p
                        className={`${
                          darkMode ? "text-amber-200" : "text-gray-600"
                        }`}
                      >
                        {skill.description}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item, itemIndex) => (
                        <span
                          key={itemIndex}
                          className={`px-3 py-1 text-sm rounded-lg ${
                            darkMode
                              ? "bg-gray-800 text-amber-100"
                              : "bg-gray-100 text-gray-700"
                          }`}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Projects Section */}
      <section
        id="work"
        className={`py-20 px-6 ${darkMode ? "bg-gray-900" : "bg-white"}`}
      >
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-light mb-4">Featured Projects</h2>
            <p
              className={`text-lg ${
                darkMode ? "text-amber-200" : "text-gray-600"
              }`}
            >
              Recent work that showcases my skills and creativity
            </p>
          </div>

          <div className="grid gap-8">
            {projects.map((project, index) => (
              <article
                key={index}
                className={`group p-8 rounded-2xl border transition-all duration-300 hover:shadow-xl ${
                  darkMode
                    ? "border-gray-800 bg-gray-950/50 hover:border-gray-700"
                    : "border-gray-200 bg-amber-50/50 hover:border-gray-300"
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <h3 className="text-2xl font-medium">{project.title}</h3>
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded-md ${
                          project.status === "Live"
                            ? darkMode
                              ? "bg-green-950 text-green-300"
                              : "bg-green-100 text-green-700"
                            : darkMode
                            ? "bg-blue-950 text-blue-300"
                            : "bg-blue-100 text-blue-700"
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>
                    <p
                      className={`text-lg leading-relaxed mb-4 ${
                        darkMode ? "text-amber-200" : "text-gray-600"
                      }`}
                    >
                      {project.description}
                    </p>
                  </div>
                  <div
                    className={`text-sm font-medium ${
                      darkMode ? "text-amber-300" : "text-gray-500"
                    } md:ml-8`}
                  >
                    {project.period}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 text-sm font-medium rounded-lg ${
                        darkMode
                          ? "bg-gray-800 text-amber-100 border border-gray-700"
                          : "bg-white text-gray-700 border border-gray-200"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                        darkMode
                          ? "bg-orange-600 hover:bg-orange-500 text-white"
                          : "bg-orange-500 hover:bg-orange-600 text-white"
                      }`}
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Live
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium border transition-all duration-200 ${
                        darkMode
                          ? "border-gray-700 hover:border-gray-600 hover:bg-gray-800 text-amber-100"
                          : "border-gray-300 hover:border-gray-400 hover:bg-gray-50 text-gray-700"
                      }`}
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium border transition-all duration-200 ${
                        darkMode
                          ? "border-gray-700 hover:border-gray-600 hover:bg-gray-800 text-amber-100"
                          : "border-gray-300 hover:border-gray-400 hover:bg-gray-50 text-gray-700"
                      }`}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      {/* Education Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-light mb-4">Education</h2>
            <p
              className={`text-lg ${
                darkMode ? "text-amber-200" : "text-gray-600"
              }`}
            >
              Academic background and continuous learning
            </p>
          </div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className={`p-8 rounded-2xl border ${
                  darkMode
                    ? "border-gray-800 bg-gray-950/30"
                    : "border-gray-200 bg-white"
                }`}
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                  <div>
                    <h3 className="text-xl font-medium mb-2">{edu.school}</h3>
                    <p
                      className={`text-lg ${
                        darkMode ? "text-amber-200" : "text-gray-600"
                      } mb-2`}
                    >
                      {edu.degree}
                    </p>
                    {edu.gpa && (
                      <p
                        className={`${
                          darkMode ? "text-orange-300" : "text-orange-600"
                        } font-medium`}
                      >
                        {edu.gpa}
                      </p>
                    )}
                    {edu.type && (
                      <span
                        className={`inline-block mt-2 px-2 py-1 text-xs font-medium rounded-md ${
                          darkMode
                            ? "bg-gray-800 text-amber-200"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {edu.type}
                      </span>
                    )}
                  </div>
                  <div
                    className={`text-sm font-medium mt-4 md:mt-0 ${
                      darkMode ? "text-amber-300" : "text-gray-500"
                    }`}
                  >
                    {edu.period}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer
        className={`py-16 px-6 border-t ${
          darkMode ? "border-gray-800 bg-gray-900" : "border-amber-200 bg-white"
        }`}
      >
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-medium">
                Let's build something amazing together
              </h3>
              <p className={`${darkMode ? "text-amber-200" : "text-gray-600"}`}>
                Open to new opportunities and interesting projects. Let's
                connect!
              </p>
            </div>
            <div className="flex gap-4">
              <a
                href="https://github.com/trietle101"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-xl transition-all duration-200 ${
                  darkMode
                    ? "hover:bg-gray-800 text-amber-100"
                    : "hover:bg-gray-100 text-gray-700"
                }`}
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/trietle101"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-xl transition-all duration-200 ${
                  darkMode
                    ? "hover:bg-gray-800 text-amber-100"
                    : "hover:bg-gray-100 text-gray-700"
                }`}
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:trietle101@gmail.com"
                className={`p-3 rounded-xl transition-all duration-200 ${
                  darkMode
                    ? "hover:bg-gray-800 text-amber-100"
                    : "hover:bg-gray-100 text-gray-700"
                }`}
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div
            className={`mt-12 pt-8 border-t text-center ${
              darkMode
                ? "border-gray-800 text-amber-300"
                : "border-amber-200 text-gray-500"
            }`}
          >
            © 2025 Le Minh Triet. Crafted with passion and attention to detail.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
