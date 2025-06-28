import { projects } from "../content";
import { Github, ExternalLink } from "lucide-react";
export default function Project({ darkMode }: { darkMode: boolean }) {
  return (
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
  );
}
