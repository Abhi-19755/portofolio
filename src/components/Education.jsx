const Education = () => {
  return (
    <section id="education" className="py-20 lg:py-28 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-900"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dark-500 to-transparent"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary-400 font-medium mb-2 tracking-wide uppercase text-sm">
            Academic Background
          </p>
          <h2 className="font-sora text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"></div>
        </div>

        {/* Education Card */}
        <div className="max-w-3xl mx-auto">
          <div className="relative group">
            {/* Timeline dot */}
            <div className="absolute left-0 top-0 w-4 h-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full ring-4 ring-dark-800 hidden md:block"></div>

            {/* Timeline line */}
            <div className="absolute left-[7px] top-4 bottom-0 w-0.5 bg-dark-600 hidden md:block"></div>

            {/* Card */}
            <div className="md:ml-10 p-6 sm:p-8 bg-dark-800/70 border border-dark-600 rounded-2xl hover:border-dark-500 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-dark-900/50">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                <div>
                  <h3 className="font-sora font-semibold text-white text-xl sm:text-2xl mb-1">
                    Bachelor of Technology (B.Tech)
                  </h3>
                  <p className="text-primary-400 font-medium">
                    Computer Science & Engineering
                  </p>
                </div>

                {/* Status */}
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-primary-600/20 to-accent-600/20 border border-primary-500/30 rounded-full text-sm font-medium text-primary-300">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    Passed Out
                  </span>
                </div>
              </div>

              {/* Duration & Location */}
              <div className="flex flex-wrap items-center gap-4 text-slate-400 text-sm mb-6">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>2021 – August 2025</span>
                </div>

                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>AVN Institute of Engineering & Technology, India</span>
                </div>
              </div>

              {/* Key Learnings */}
              <div>
                <p className="text-slate-400 text-sm font-medium mb-3">
                  Key Learnings & Technologies:
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Java Programming',
                    'Object-Oriented Programming (OOP)',
                    'Data Structures & Algorithms',
                    'Database Management Systems (DBMS)',
                    'Frontend Development (HTML, CSS, JavaScript, React)',
                    'Software Engineering Fundamentals',
                  ].map((course, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 bg-dark-700/80 border border-dark-500 rounded-lg text-xs font-medium text-slate-300"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="max-w-3xl mx-auto mt-8">
          <div className="p-6 bg-gradient-to-r from-primary-600/10 to-accent-600/10 border border-primary-500/20 rounded-2xl">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-primary-600/20 rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">
                  Continuous Learning
                </h4>
                <p className="text-slate-400 text-sm">
                  During my academic journey, I built a strong foundation in Java,
                  object-oriented programming, database management, and frontend
                  development. I enhanced my skills by building real-world projects,
                  practicing problem-solving, and continuously upskilling to become
                  an industry-ready Java Full Stack Developer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
