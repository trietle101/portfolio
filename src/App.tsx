import { useState, useEffect } from "react";
// import Header from "./components/Header";
import ThemeButton from "./components/ThemeButton";
import HeroTest from "./components/HeroTest";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Footer from "./components/Footer";
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

  return (
    <div
      className={`min-h-screen font-serif transition-all duration-300 ${
        darkMode ? "bg-gray-950 text-amber-50" : "bg-amber-50 text-gray-900"
      }`}
    >
      {/* Header */}
      {/* <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} /> */}
      <ThemeButton darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      {/* Hero Section */}
      <HeroTest darkMode={darkMode} />

      {/* Experience Section */}
      <Experience darkMode={darkMode} />

      {/* Skills Section */}
      <Skill darkMode={darkMode} />

      {/* Projects Section */}
      <Project darkMode={darkMode} />

      {/* Education Section */}
      <Education darkMode={darkMode} />

      {/* Footer */}
      <Footer darkMode={darkMode} />

      {/* Optional: Add a scroll to top button */}
    </div>
  );
};

export default App;
