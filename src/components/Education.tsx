import { education } from "../content";

export default function Education({ darkMode }: { darkMode: boolean }) {
  return (
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
  );
}
