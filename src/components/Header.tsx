import { Moon, Sun } from "lucide-react";

export default function Header({
  darkMode,
  toggleDarkMode
}: {
  darkMode: boolean;
  toggleDarkMode: () => void;
}) {
  return (
    <header
      className={`fixed top-0 w-full z-50 border-b transition-all duration-300 ${
        darkMode
          ? "border-gray-800 bg-gray-950/80 backdrop-blur-xl"
          : "border-amber-200 bg-amber-50/80 backdrop-blur-xl"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-lg font-medium">Le Minh Triet</div>
        <button
          onClick={toggleDarkMode}
          className={`p-2.5 rounded-xl transition-all duration-200 ${
            darkMode
              ? "hover:bg-gray-800 text-amber-100"
              : "hover:bg-amber-100 text-gray-700"
          }`}
          aria-label="Toggle theme"
        >
          {darkMode ? (
            <Sun className="w-5 h-5" />
          ) : (
            <Moon className="w-5 h-5" />
          )}
        </button>
      </div>
    </header>
  );
}
