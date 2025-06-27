import { Moon, Sun } from "lucide-react";

export default function ThemeButton({
  darkMode,
  toggleDarkMode
}: {
  darkMode: boolean;
  toggleDarkMode: () => void;
}) {
  return (
    <button
      onClick={toggleDarkMode}
      className={`fixed top-5 right-10 p-2.5 rounded-xl transition-all duration-200 ${
        darkMode
          ? "hover:bg-gray-800 text-amber-100"
          : "hover:bg-amber-100 text-gray-700"
      }`}
      aria-label="Toggle theme"
    >
      {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  );
}
