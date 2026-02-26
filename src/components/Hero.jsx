import { useState } from "react";

// Profile image - replace with your actual photo at /src/assets/profile.png
let profileImage;
try {
  profileImage = new URL("../assets/profileIMG.png", import.meta.url).href;
} catch {
  profileImage = null;
}

const Hero = () => {
  const [imageError, setImageError] = useState(false);
  const techStack = [
    "Java",
    "Spring Boot",
    "React",
    "MySQL",
    "REST APIs",
    "Tailwind CSS",
  ];

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-600/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary-600/5 to-accent-600/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Profile Image */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500 rounded-full opacity-20 blur-lg animate-pulse"></div>

              {/* Image container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-dark-600 shadow-2xl shadow-dark-900/80">
                {profileImage && !imageError ? (
                  <img
                    src={profileImage}
                    alt="Abhinav - Java Full Stack Developer"
                    className="w-full h-full object-cover"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary-600/30 to-accent-600/30 flex items-center justify-center">
                    <span className="font-sora text-7xl sm:text-8xl lg:text-9xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                      A
                    </span>
                  </div>
                )}
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/20 to-transparent"></div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-2 -right-2 sm:bottom-4 sm:right-0 bg-gradient-to-r from-primary-600 to-accent-600 px-4 py-2 rounded-full shadow-lg shadow-primary-600/25">
                <span className="text-white font-semibold text-sm">
                  Open to Work
                </span>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="text-center lg:text-left order-1 lg:order-2">
            {/* Greeting */}
            <p className="text-primary-400 font-medium mb-2 tracking-wide">
              Hello, I'm
            </p>

            {/* Name */}
            <h1 className="font-sora text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Abhinav
            </h1>

            {/* Role */}
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-sora font-semibold bg-gradient-to-r from-primary-400 via-accent-400 to-primary-400 bg-clip-text text-transparent mb-6">
              Java Full Stack Developer
            </h2>

            {/* Intro */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              Recently graduated B.Tech student and Java Full Stack Developer
              with hands-on experience in building scalable web applications
              using Java, Spring Boot, and React. Actively seeking entry-level
              opportunities to contribute to real-world projects and grow as a
              professional software engineer.
            </p>

            {/* Tech Stack */}
            <div className="mb-8">
              <p className="text-slate-400 text-sm font-medium mb-3 uppercase tracking-wider">
                Tech Stack
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-dark-700/80 border border-dark-500 rounded-full text-sm font-medium text-slate-200 hover:border-primary-500/50 hover:bg-dark-600 transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <a
                href="/Abhi_javaDev"
                download
                className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-500 hover:to-primary-600 text-white font-semibold rounded-xl shadow-lg shadow-primary-600/25 hover:shadow-primary-500/40 transition-all duration-300 hover:-translate-y-0.5"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Resume
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-6 py-3 bg-dark-700 hover:bg-dark-600 border border-dark-500 hover:border-dark-400 text-white font-semibold rounded-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-6 py-3 bg-dark-700 hover:bg-dark-600 border border-dark-500 hover:border-dark-400 text-white font-semibold rounded-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a
          href="#about"
          className="text-slate-400 hover:text-white transition-colors"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
