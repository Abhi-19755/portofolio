const About = () => {
  const highlights = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: 'Backend Focused',
      description: 'Strong foundation in Java and Spring Boot for building scalable and secure backend systems',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Full Stack Developer',
      description: 'Hands-on experience with React to build responsive and user-friendly web applications',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'Problem Solver',
      description: 'Strong analytical skills with a focus on writing clean, maintainable, and efficient code',
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800/50 to-dark-900"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dark-500 to-transparent"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary-400 font-medium mb-2 tracking-wide uppercase text-sm">
            Who I Am
          </p>
          <h2 className="font-sora text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"></div>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Text Content */}
          <div className="space-y-6">
            <p className="text-slate-300 text-lg leading-relaxed">
              I am a <span className="text-white font-semibold">recently graduated B.Tech student</span> 
              with a strong interest in building real-world software solutions. My journey into 
              development began with curiosity about backend systems, which naturally led me 
              toward <span className="text-primary-400 font-semibold">Java and Spring Boot</span>.
            </p>

            <p className="text-slate-300 text-lg leading-relaxed">
              I have hands-on experience developing full stack web applications using 
              <span className="text-white font-semibold"> Spring Boot</span> for backend services and 
              <span className="text-white font-semibold"> React</span> for modern, responsive frontends. 
              I focus on writing clean code, building RESTful APIs, and designing scalable application architectures.
            </p>

            <p className="text-slate-300 text-lg leading-relaxed">
              As a fresher actively seeking opportunities, I am eager to contribute to a professional 
              team, learn industry best practices, and grow as a <span className="text-white font-semibold">
              Java Full Stack Developer</span>.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-4">
              <div className="text-center">
                <p className="font-sora text-3xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                  3+
                </p>
                <p className="text-slate-400 text-sm">Projects Completed</p>
              </div>
              <div className="text-center">
                <p className="font-sora text-3xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                  6+
                </p>
                <p className="text-slate-400 text-sm">Core Technologies</p>
              </div>
              <div className="text-center">
                <p className="font-sora text-3xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                  2025
                </p>
                <p className="text-slate-400 text-sm">Graduate</p>
              </div>
            </div>
          </div>

          {/* Right - Highlight Cards */}
          <div className="space-y-4">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group p-6 bg-dark-700/50 border border-dark-600 rounded-2xl hover:bg-dark-700 hover:border-dark-500 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-600/20 to-accent-600/20 rounded-xl flex items-center justify-center text-primary-400 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-sora font-semibold text-white text-lg mb-1">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
