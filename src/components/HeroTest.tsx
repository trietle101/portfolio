import { useEffect, useState } from "react";
import { greetings } from "../content"; // Adjust the import path as necessary

export default function HeroTest({ darkMode }: { darkMode: boolean }) {
  const [greetingIndex, setGreetingIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setGreetingIndex((prev) => (prev + 1) % greetings.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-24 pb-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="space-y-12">
          {/* Hero Header Like Adrian’s */}
          <div className="text-white  space-y-3">
            <h1
              className={`text-6xl md:text-7xl font-serif font-semibold leading-none tracking-tight ${
                darkMode ? "text-amber-200" : "text-gray-700"
              }`}
            >
              <span className="block">{greetings[greetingIndex]}.</span>
              <span className="block">i’m</span>
              <span className="block">Triet.</span>
            </h1>
            <p className="text-xl max-w-2xl pt-4 text-gray-500">
              A software engineer from Vietnam. Have experience using Next.js,
              React.js, Typescript, TailwindCSS and more. Looking for new and
              exciting projects in the software space. Let's connect!
            </p>
            {/* <button
              className="mt-6 inline-flex items-center px-6 py-3 border border-white rounded-full text-white hover:bg-white hover:text-black transition"
              onClick={() =>
                (window.location.href = "mailto:trietle101@gmail.com")
              }
            >
              → say hi
            </button> */}
          </div>

          {/* Keep the rest of your section below */}
          {/* ... your cards, work links, etc. */}
        </div>
      </div>
    </section>
  );
}
