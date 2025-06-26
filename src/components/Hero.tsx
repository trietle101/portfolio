import { Mail, ArrowUpRight, Phone, MapPin } from "lucide-react";

export default function Hero({ darkMode }: { darkMode?: boolean }) {
  // Default to light mode if darkMode is not provided
  return (
    <section className="pt-24 pb-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="space-y-8">
          <div className="space-y-6">
            <div
              className={`inline-block px-3 py-1 text-sm rounded-full border ${
                darkMode
                  ? "border-orange-900 bg-orange-950/50 text-orange-200"
                  : "border-orange-200 bg-orange-100 text-orange-700"
              }`}
            >
              Software Engineer
            </div>

            <h1 className="text-4xl md:text-6xl font-light leading-tight tracking-tight">
              Building scalable web solutions with
              <span
                className={`${
                  darkMode ? "text-orange-300" : "text-orange-600"
                }`}
              >
                {" "}
                modern technologies
              </span>
            </h1>

            <p
              className={`text-xl leading-relaxed max-w-3xl ${
                darkMode ? "text-amber-200" : "text-gray-700"
              }`}
            >
              Experienced software engineer specializing in React, TypeScript,
              and full-stack development. Currently working on scalable low-code
              solutions and enterprise applications with teams across the globe.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="mailto:trietle101@gmail.com"
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                darkMode
                  ? "bg-orange-600 hover:bg-orange-500 text-white"
                  : "bg-orange-500 hover:bg-orange-600 text-white"
              } hover:shadow-lg`}
            >
              <Mail className="w-4 h-4" />
              Let's collaborate
            </a>
            <a
              href="#work"
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium border transition-all duration-200 ${
                darkMode
                  ? "border-gray-700 hover:border-gray-600 hover:bg-gray-900"
                  : "border-gray-300 hover:border-gray-400 hover:bg-white"
              }`}
            >
              View my work
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap gap-6 pt-4">
            <div
              className={`flex items-center gap-2 ${
                darkMode ? "text-amber-200" : "text-gray-600"
              }`}
            >
              <MapPin className="w-4 h-4" />
              <span>Ho Chi Minh City, Vietnam</span>
            </div>
            <a
              href="tel:0971659395"
              className={`flex items-center gap-2 hover:${
                darkMode ? "text-orange-300" : "text-orange-600"
              } transition-colors ${
                darkMode ? "text-amber-200" : "text-gray-600"
              }`}
            >
              <Phone className="w-4 h-4" />
              <span>0971 659 395</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
