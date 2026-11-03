import { projects } from "../../content/projects";
import { site } from "../../content/site";
import Icon from "../Icon";

const linkStyles = {
  live: "bg-blue-600 hover:bg-blue-700",
  github: "bg-gray-800 dark:bg-gray-600 hover:bg-gray-900 dark:hover:bg-gray-500",
  instagram:
    "bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 hover:opacity-90",
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-16 px-6 md:px-12 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-900 dark:text-white">
          My <span className="text-blue-600 dark:text-blue-400">Projects</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto mb-12">
          {site.copy.projectsIntro}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <article
              key={project.slug}
              id={`work-${project.slug}`}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {project.image && (
                <img
                  src={project.image.src}
                  alt={project.image.alt}
                  width={project.image.width}
                  height={project.image.height}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-48 object-cover block"
                />
              )}

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {project.summary}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-4 py-2 text-white rounded-md transition-colors duration-200 ${linkStyles[link.kind]}`}
                    >
                      <Icon name={link.kind} className="w-4 h-4" />
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
