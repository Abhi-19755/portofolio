const Projects = () => {
  const projects = [
    {
      title: "Distraction Remover (Chrome Extension)",
      description:
        "A Chrome extension designed to improve focus while studying by removing distractions from YouTube. It hides recommendations, Shorts, comments, and suggestions to create a clean, distraction-free learning environment.",
      techStack: ["JavaScript", "Chrome Extensions API", "HTML", "CSS"],
      features: [
        "Hide YouTube Recommendations",
        "Remove Shorts & Comments",
        "Focus-friendly UI",
      ],
      gradient: "from-red-500 to-orange-500",
      iconBg: "from-red-500/20 to-orange-500/20",
      link: "https://chromewebstore.google.com/detail/jekhllijpniikaphgdlaihkodjlhhpae?utm_source=item-share-cb",
    },
    {
      title: "Student Management System (Spring MVC)",
      description:
        "A web-based Student Management System built using Spring MVC that allows administrators to manage student records efficiently. Features include student registration, login authentication, CRUD operations, and role-based dashboards using JSP views.",
      techStack: [
        "Java",
        "Spring MVC",
        "JSP",
        "JDBC",
        "MySQL",
        "Apache Tomcat",
      ],
      features: [
        "Student Registration & Login",
        "Admin Dashboard",
        "CRUD Operations",
        "JSP View Pages",
        "JDBC Database Integration",
      ],
      gradient: "from-indigo-500 to-purple-500",
      iconBg: "from-indigo-500/20 to-purple-500/20",
      link:"https://github.com/Abhi-19755/Spring_MVC"
    },
    {
      title: "Product Management System",
      description:
        "A full-stack CRUD application for managing product inventory. Features include product listing, search functionality, and a responsive React frontend with Spring Boot REST APIs.",
      techStack: ["Spring Boot", "React", "REST APIs", "MySQL"],
      features: ["Full CRUD", "Search & Filter", "Responsive UI"],
      gradient: "from-emerald-500 to-teal-500",
      iconBg: "from-emerald-500/20 to-teal-500/20",
    },
  ];

  return (
    <section id="projects" className="py-20 lg:py-28 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800/50 to-dark-900"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dark-500 to-transparent"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary-400 font-medium mb-2 tracking-wide uppercase text-sm">
            My Work
          </p>
          <h2 className="font-sora text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"></div>
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
            Hands-on projects demonstrating full-stack development skills with
            Java, Spring Boot, and React
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-dark-800/70 border border-dark-600 rounded-2xl overflow-hidden hover:border-dark-500 transition-all duration-300 hover:shadow-xl hover:shadow-dark-900/50 hover:-translate-y-1"
            >
              {/* Gradient Top Border */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient}`}
              ></div>

              {/* Content */}
              <div className="p-6">
                {/* Icon */}
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${project.iconBg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                    />
                  </svg>
                </div>

                {/* Title */}
                <h3 className="font-sora font-semibold text-white text-xl mb-3 group-hover:text-primary-400 transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.features.map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className="text-xs text-slate-300 bg-dark-700 px-2 py-1 rounded"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="pt-4 border-t border-dark-600">
                  <p className="text-slate-500 text-xs uppercase tracking-wider mb-2">
                    Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`text-xs font-medium px-2.5 py-1 rounded-full bg-gradient-to-r ${project.gradient} bg-opacity-10 text-white/90`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Hover Action */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                <div className="flex gap-3">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white text-sm font-medium hover:bg-white/20 transition-colors"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="text-center mt-12">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 font-medium transition-colors"
          >
            View More on GitHub
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
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
