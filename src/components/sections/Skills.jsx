import PowerBISVG from "../../assets/power-bi-2021.svg";
import { site } from "../../content/site";

// Icons for the tool names in site.tools. A string is a devicon class; an
// object is an image. Goes away with the skills grid in Phase 4.
const icons = {
  Python: "devicon-python-plain colored",
  Pandas: "devicon-pandas-plain colored",
  NumPy: "devicon-numpy-plain",
  "Power BI": { src: PowerBISVG },
  "SQL (MySQL)": "devicon-mysql-plain colored",
  "C++": "devicon-cplusplus-plain colored",
  C: "devicon-c-plain colored",
  Java: "devicon-java-plain colored",
  Git: "devicon-git-plain colored",
  Docker: "devicon-docker-plain colored",
  Linux: "devicon-linux-plain colored",
  Salesforce: "devicon-salesforce-plain colored",
  AWS: "devicon-amazonwebservices-plain colored",
  Django: "devicon-django-plain colored",
};

const Skills = () => {
  const skills = [...site.tools.current, ...site.tools.startedOn].map(
    (name) => ({ name, icon: icons[name] })
  );

  return (
    <section
      id="skills"
      className="py-16 px-6 md:px-12 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-900 dark:text-white">
          My <span className="text-blue-600 dark:text-blue-400">Skills</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto mb-12">
          {site.copy.skillsIntro}
        </p>

        <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8 justify-items-center">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center group"
              >
                <div className="w-16 h-16 flex items-center justify-center bg-gray-50 dark:bg-gray-600 rounded-lg mb-3 p-3 transition-all duration-300 shadow-md group-hover:shadow-lg group-hover:scale-110">
                  {typeof skill.icon === "object" ? (
                    <img
                      src={skill.icon.src}
                      alt=""
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <i className={`${skill.icon} text-3xl`} aria-hidden="true"></i>
                  )}
                </div>
                <span className="text-sm text-gray-700 dark:text-gray-300 font-medium text-center">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
