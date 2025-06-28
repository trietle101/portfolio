import { skills } from "../content";

export default function Skill({ darkMode }: { darkMode: boolean }) {
  return (
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
                  <div className="flex flex-wrap gap-2 max-w-150">
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
  );
}
