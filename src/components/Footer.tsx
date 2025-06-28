import { Mail, Github, Linkedin } from "lucide-react";

export default function Footer({ darkMode }: { darkMode: boolean }) {
  return (
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
              Open to new opportunities and interesting projects. Let's connect!
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
          © 2025 Le Minh Triet. Crafted with passion and attention to detail
          (and sleepiness).
        </div>
      </div>
    </footer>
  );
}
