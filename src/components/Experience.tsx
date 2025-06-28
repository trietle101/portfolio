import { experiences } from "../content";

export default function Experience({ darkMode }: { darkMode: boolean }) {
  return (
    <section className={`py-20 px-6 ${darkMode ? "bg-gray-900" : "bg-white"}`}>
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl font-light mb-4">Professional Experience</h2>
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
  );
}
