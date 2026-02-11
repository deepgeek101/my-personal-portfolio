import domeHouseImg from "../../assets/earthbag-domehouse.jpg";
const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Earthbag Domehouse Workshop",
      description:
        "An eco-friendly shelter built using earthbag architecture and local resources. Involved 3 weeks of intensive teamwork, sustainable resource planning, and alternative building methods.",
      image: domeHouseImg,
      technologies: [
        "Volunteering",
        "Sustainable Building",
        "Teamwork",
        "Collaborative Design",
        "Problem Solving",
        "Creativity",
        "Adaptability",
      ],
      liveLink: "https://linkedin.com/in/deep-chaulagain",
      instagramLink: "https://www.instagram.com/farm_the_transformer/",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "/api/placeholder/400/300",
      technologies: [
        "React",
        "TypeScript",
        "Firebase",
        "Material-UI",
        "Socket.io",
        "Redux",
      ],
      liveLink: "https://example-taskmanager.com",
      githubLink: "https://github.com/yourusername/task-manager",
    },
    {
      id: 3,
      title: "Histopathological Images Classification",
      description:
        "Using the dataset MIaMIA-Open-Data-Cervical-AIS-Histopathology-Image: CASIHI, developed a deep learning model to classify cervical histopathological images into various categories using PyTorch and Grad-CAM for interpretability.",
      image: "/api/placeholder/400/300",
      technologies: ["PyTorch", "Grad-CAM", "CNNs", "Transfer Learning"],
      githubLink:
        "https://github.com/deepgeek101/Histopathological-Classification-Project",
    },
    {
      id: 4,
      title: "Portfolio Website",
      description:
        "A responsive portfolio website built with React and Tailwind CSS, featuring smooth animations and dark mode support.",
      image: "/api/placeholder/400/300",
      technologies: [
        "React",
        "Tailwind CSS",
        "Framer Motion",
        "React Router",
        "EmailJS",
      ],
      liveLink: "https://deepchaulagain.com.np",
      githubLink: "https://github.com/deepgeek101/my-personal-portfolio",
    },
  ];

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
          Here are some of my recent real-world projects that showcase my
          technical skills and the causes I am personally aligned with
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-600 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 pointer-events-none z-0"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-48 object-cover relative z-10 block"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      Live Demo
                    </a>
                  )}

                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-800 dark:bg-gray-600 text-white rounded-md hover:bg-gray-900 dark:hover:bg-gray-500 transition-colors duration-200"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      Code
                    </a>
                  )}
                  {/* NEW: Instagram/Volunteering Proof Button */}
                  {project.instagramLink && (
                    <a
                      href={project.instagramLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 text-white rounded-md hover:opacity-90 transition-opacity duration-200"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                      Instagram
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
