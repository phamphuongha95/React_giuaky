import { useState } from "react";
import imgPic from "../assets/f85cf45511cd2ba02a83d564218d6500a134a91d.png";
import imgPic1 from "../assets/8781bda67a25952db5724f48492cd455a6e81952.png";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen w-full bg-white overflow-auto">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <header className="bg-white w-full border-b border-gray-100 sticky top-0 z-50">
          <div className="flex items-center justify-between px-4 sm:px-8 lg:px-20 py-4">
            <div className="text-2xl sm:text-[30px] font-bold text-gray-900 tracking-tight">
              {"<SS />"}
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              <a
                href="#about"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                About
              </a>
              <a
                href="#work"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Work
              </a>
              <a
                href="#testimonials"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Testimonials
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Contact
              </a>
              <div className="h-6 w-px bg-gray-200 mx-2" />
              <button
                className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Toggle theme"
              >
                <svg
                  className="w-6 h-6 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 2V4M12 20V22M4.93 4.93L6.34 6.34M17.66 17.66L19.07 19.07M2 12H4M20 12H22M6.34 17.66L4.93 19.07M19.07 4.93L17.66 6.34"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button className="bg-gray-900 text-white px-4 py-1.5 rounded-xl hover:bg-gray-800 transition-colors">
                Download CV
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    d="M6 18L18 6M6 6L18 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                ) : (
                  <>
                    <path
                      d="M4 12H20"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4 6H20"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4 18H20"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </>
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden border-t border-gray-100 bg-white">
              <nav className="flex flex-col px-4 py-4 space-y-4">
                <a
                  href="#about"
                  className="text-gray-600 hover:text-gray-900 transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </a>
                <a
                  href="#work"
                  className="text-gray-600 hover:text-gray-900 transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Work
                </a>
                <a
                  href="#testimonials"
                  className="text-gray-600 hover:text-gray-900 transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Testimonials
                </a>
                <a
                  href="#contact"
                  className="text-gray-600 hover:text-gray-900 transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </a>
                <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                  <button
                    className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
                    aria-label="Toggle theme"
                  >
                    <svg
                      className="w-6 h-6 text-gray-600"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 2V4M12 20V22M4.93 4.93L6.34 6.34M17.66 17.66L19.07 19.07M2 12H4M20 12H22M6.34 17.66L4.93 19.07M19.07 4.93L17.66 6.34"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <button className="bg-gray-900 text-white px-4 py-1.5 rounded-xl hover:bg-gray-800 transition-colors flex-1">
                    Download CV
                  </button>
                </div>
              </nav>
            </div>
          )}
        </header>

        {/* Hero Section */}
        <section className="bg-white px-4 sm:px-8 lg:px-20 py-12 sm:py-16 lg:py-24">
          <div className="flex flex-col-reverse lg:flex-row gap-12 items-center lg:items-start">
            <div className="flex-1 w-full flex flex-col gap-8 lg:gap-12">
              <div className="flex flex-col gap-2">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-tight">
                  Hi, I'm Sagar 👋
                </h1>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  I'm a full stack developer (React.js & Node.js) with a focus
                  on creating (and occasionally designing) exceptional digital
                  experiences that are fast, accessible, visually appealing, and
                  responsive. Even though I have been creating web applications
                  for over 7 years, I still love it as if it was something new.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 22C16 18 20 14.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 14.4183 8 18 12 22Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-gray-600 text-sm sm:text-base">
                    Ahmedabad, India
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0" />
                  <span className="text-gray-600 text-sm sm:text-base">
                    Available for new projects
                  </span>
                </div>
              </div>

              <div className="flex gap-1">
                <button
                  className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
                  aria-label="GitHub"
                >
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M15 22V18C15.1391 16.7473 14.7799 15.4901 14 14.5C17 14.5 20 12.5 20 9C20.08 7.75 19.73 6.52 19 5.5C19.28 4.35 19.28 3.15 19 2C19 2 18 2 16 3.5C13.36 3 10.64 3 8 3.5C6 2 5 2 5 2C4.7 3.15 4.7 4.35 5 5.5C4.27187 6.51588 3.91847 7.75279 4 9C4 12.5 7 14.5 10 14.5C9.61 14.99 9.32 15.55 9.15 16.15C8.98 16.75 8.93 17.38 9 18V22M9 18C4.49 20 4 16 2 16"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button
                  className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
                  aria-label="Twitter"
                >
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M23 3.00005C22.0424 3.67552 20.9821 4.19216 19.86 4.53005C19.2577 3.83756 18.4573 3.34674 17.567 3.12397C16.6767 2.90121 15.7395 2.95724 14.8821 3.28445C14.0247 3.61166 13.2884 4.19445 12.773 4.95376C12.2575 5.71308 11.9877 6.61238 12 7.53005V8.53005C10.2426 8.57561 8.50127 8.18586 6.93101 7.39549C5.36074 6.60513 4.01032 5.43868 3 4.00005C3 4.00005 -1 13 8 17C5.94053 18.398 3.48716 19.099 1 19C10 24 21 19 21 7.50005C20.9991 7.2215 20.9723 6.94364 20.92 6.67005C21.9406 5.66354 22.6608 4.39276 23 3.00005Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button
                  className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
                  aria-label="Figma"
                >
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M5 5.5C5 4.57174 5.36875 3.6815 6.02513 3.02513C6.6815 2.36875 7.57174 2 8.5 2H12V9H8.5C7.57174 9 6.6815 8.63125 6.02513 7.97487C5.36875 7.3185 5 6.42826 5 5.5Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 2H15.5C16.4283 2 17.3185 2.36875 17.9749 3.02513C18.6313 3.6815 19 4.57174 19 5.5C19 6.42826 18.6313 7.3185 17.9749 7.97487C17.3185 8.63125 16.4283 9 15.5 9H12V2Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 12.5C12 11.5717 12.3687 10.6815 13.0251 10.0251C13.6815 9.36875 14.5717 9 15.5 9C16.4283 9 17.3185 9.36875 17.9749 10.0251C18.6313 10.6815 19 11.5717 19 12.5C19 13.4283 18.6313 14.3185 17.9749 14.9749C17.3185 15.6313 16.4283 16 15.5 16C14.5717 16 13.6815 15.6313 13.0251 14.9749C12.3687 14.3185 12 13.4283 12 12.5Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5 19.5C5 18.5717 5.36875 17.6815 6.02513 17.0251C6.6815 16.3687 7.57174 16 8.5 16H12V23H8.5C7.57174 23 6.6815 22.6313 6.02513 21.9749C5.36875 21.3185 5 20.4283 5 19.5Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5 12.5C5 11.5717 5.36875 10.6815 6.02513 10.0251C6.6815 9.36875 7.57174 9 8.5 9H12V16H8.5C7.57174 16 6.6815 15.6313 6.02513 14.9749C5.36875 14.3185 5 13.4283 5 12.5Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="flex-shrink-0 flex justify-center lg:justify-end w-full lg:w-auto">
              <div className="relative inline-grid">
                <div className="bg-gray-200 border-4 sm:border-8 border-white w-[200px] h-[240px] sm:w-[240px] sm:h-[280px] lg:w-[280px] lg:h-[320px] row-start-1 col-start-1 ml-6 sm:ml-8 lg:ml-10 mt-6 sm:mt-8 lg:mt-10" />
                <div className="w-[200px] h-[240px] sm:w-[240px] sm:h-[280px] lg:w-[280px] lg:h-[320px] row-start-1 col-start-1 relative">
                  <img
                    src={imgPic}
                    alt="Profile"
                    className="absolute inset-0 w-full h-full object-cover border-4 sm:border-8 border-white"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="bg-gray-50 px-4 sm:px-8 lg:px-20 py-12 sm:py-16 lg:py-24"
        >
          <div className="flex flex-col items-center gap-8 lg:gap-12">
            <div className="flex flex-col items-center gap-4">
              <div className="bg-gray-200 px-5 py-1 rounded-xl">
                <span className="text-gray-600 text-sm font-medium">
                  About me
                </span>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start w-full">
              <div className="flex-1 w-full flex justify-center lg:justify-start">
                <div className="relative inline-grid">
                  <div className="bg-gray-200 border-4 sm:border-8 border-gray-50 w-[280px] h-[340px] sm:w-[340px] sm:h-[400px] lg:w-[400px] lg:h-[480px] row-start-1 col-start-1" />
                  <div className="w-[280px] h-[340px] sm:w-[340px] sm:h-[400px] lg:w-[400px] lg:h-[480px] row-start-1 col-start-1 ml-6 sm:ml-8 lg:ml-10 relative">
                    <img
                      src={imgPic1}
                      alt="About"
                      className="absolute inset-0 w-full h-full object-cover border-4 sm:border-8 border-gray-50"
                    />
                  </div>
                </div>
              </div>

              <div className="flex-1 w-full flex flex-col gap-4 lg:gap-6">
                <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 tracking-tight">
                  Curious about me? Here you have it:
                </h2>
                <div className="text-gray-600 space-y-4 leading-relaxed text-sm sm:text-base">
                  <p>
                    I'm a passionate,{" "}
                    <a
                      href="https://www.figma.com/@shahsagarm"
                      className="underline hover:text-gray-900"
                    >
                      self-proclaimed designer
                    </a>{" "}
                    who specializes in full stack development (React.js &
                    Node.js). I am very enthusiastic about bringing the
                    technical and visual aspects of digital products to life.
                    User experience, pixel perfect design, and writing clear,
                    readable, highly performant code matters to me.
                  </p>
                  <p>
                    I began my journey as a web developer in 2015, and since
                    then, I've continued to grow and evolve as a developer,
                    taking on new challenges and learning the latest
                    technologies along the way. Now, in my early thirties, 7
                    years after starting my web development journey, I'm
                    building cutting-edge web applications using modern
                    technologies such as Next.js, TypeScript, Nestjs,
                    Tailwindcss, Supabase and much more.
                  </p>
                  <p>
                    I am very much a progressive thinker and enjoy working on
                    products end to end, from ideation all the way to
                    development.
                  </p>
                  <p>
                    When I'm not in full-on developer mode, you can find me
                    hovering around on twitter or on indie hacker, witnessing
                    the journey of early startups or enjoying some free time.
                    You can follow me on{" "}
                    <a
                      href="https://twitter.com/shahsagarm"
                      className="underline hover:text-gray-900"
                    >
                      Twitter
                    </a>{" "}
                    where I share tech-related bites and build in public, or you
                    can follow me on{" "}
                    <a
                      href="https://github.com/shahsagarm"
                      className="underline hover:text-gray-900"
                    >
                      GitHub
                    </a>
                    .
                  </p>
                  <p>Finally, some quick bits about me.</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-10">
                    <ul className="space-y-2.5">
                      <li className="list-disc ml-6">
                        B.E. in Computer Engineering
                      </li>
                      <li className="list-disc ml-6">Full time freelancer</li>
                    </ul>
                    <ul className="space-y-2.5">
                      <li className="list-disc ml-6">Avid learner</li>
                      <li className="list-disc ml-6">Aspiring indie hacker</li>
                    </ul>
                  </div>

                  <p>
                    One last thing, I'm available for freelance work, so feel
                    free to reach out and say hello! I promise I don't bite 😉
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="bg-white px-4 sm:px-8 lg:px-20 py-12 sm:py-16 lg:py-24">
          <div className="flex flex-col items-center gap-8 lg:gap-12">
            <div className="flex flex-col items-center gap-4">
              <div className="bg-gray-200 px-5 py-1 rounded-xl">
                <span className="text-gray-600 text-sm font-medium">
                  Skills
                </span>
              </div>
              <p className="text-gray-600 text-base sm:text-lg lg:text-xl text-center max-w-2xl px-4">
                The skills, tools and technologies I am really good at:
              </p>
            </div>

            <div className="w-full space-y-8 lg:space-y-12">
              {/* First Row */}
              <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-8 gap-6 lg:gap-8">
                {[
                  { icon: "JS", label: "Javascript", color: "#FFD600" },
                  { icon: "TS", label: "Typescript", color: "#3178C6" },
                  { icon: "⚛️", label: "React" },
                  { icon: "▲", label: "Next.js" },
                  { icon: "Node", label: "Node.js", color: "#5FA04E" },
                  { icon: "Ex", label: "Express.js" },
                  { icon: "N", label: "Nest.js", color: "#E0234E" },
                  { icon: "🔌", label: "Socket.io" },
                ].map((tech, i) => (
                  <div key={i} className="flex flex-col items-center gap-2">
                    <div
                      className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center text-xl sm:text-2xl font-bold"
                      style={{ color: tech.color }}
                    >
                      {tech.icon}
                    </div>
                    <span className="text-gray-600 text-xs sm:text-sm lg:text-base text-center">
                      {tech.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Second Row */}
              <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-8 gap-6 lg:gap-8">
                {[
                  { icon: "🐘", label: "PostgreSQL" },
                  { icon: "🍃", label: "MongoDB", color: "#00684A" },
                  { icon: "Sass", label: "Sass/Scss", color: "#F06292" },
                  { icon: "🎨", label: "Tailwindcss", color: "#38BDF8" },
                  { icon: "Fig", label: "Figma" },
                  { icon: "Cy", label: "Cypress", color: "#58D09E" },
                  { icon: "📚", label: "Storybook", color: "#FF4081" },
                  { icon: "Git", label: "Git", color: "#F4511E" },
                ].map((tech, i) => (
                  <div key={i} className="flex flex-col items-center gap-2">
                    <div
                      className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center text-xl sm:text-2xl font-bold"
                      style={{ color: tech.color }}
                    >
                      {tech.icon}
                    </div>
                    <span className="text-gray-600 text-xs sm:text-sm lg:text-base text-center">
                      {tech.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="bg-gray-50 px-4 sm:px-8 lg:px-20 py-12 sm:py-16 lg:py-24">
          <div className="flex flex-col items-center gap-8 lg:gap-12">
            <div className="flex flex-col items-center gap-4">
              <div className="bg-gray-200 px-5 py-1 rounded-xl">
                <span className="text-gray-600 text-sm font-medium">
                  Experience
                </span>
              </div>
              <p className="text-gray-600 text-base sm:text-lg lg:text-xl text-center max-w-2xl px-4">
                Here is a quick summary of my most recent experiences:
              </p>
            </div>

            <div className="w-full max-w-4xl bg-white rounded-xl p-6 sm:p-8 shadow-sm">
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                <div className="lg:flex-1">
                  <div className="text-green-600 font-bold text-lg sm:text-xl mb-4">
                    Upwork
                  </div>
                </div>
                <div className="lg:flex-1">
                  <h3 className="font-semibold text-gray-900 mb-4 text-base sm:text-lg">
                    Sr. Frontend Developer
                  </h3>
                  <ul className="space-y-1 text-gray-600 text-sm sm:text-base">
                    <li className="list-disc ml-6">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </li>
                    <li className="list-disc ml-6">
                      Ut pretium arcu et massa semper, id fringilla leo semper.
                    </li>
                    <li className="list-disc ml-6">Sed quis justo ac magna.</li>
                    <li className="list-disc ml-6">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </li>
                  </ul>
                </div>
                <div className="lg:flex-shrink-0 text-gray-600 text-sm sm:text-base">
                  Nov 2021 - Present
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Work Section */}
        <section
          id="work"
          className="bg-white px-4 sm:px-8 lg:px-20 py-12 sm:py-16 lg:py-24"
        >
          <div className="flex flex-col items-center gap-8 lg:gap-12">
            <div className="flex flex-col items-center gap-4">
              <div className="bg-gray-200 px-5 py-1 rounded-xl">
                <span className="text-gray-600 text-sm font-medium">Work</span>
              </div>
              <p className="text-gray-600 text-base sm:text-lg lg:text-xl text-center max-w-2xl px-4">
                Some of the noteworthy projects I have built:
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section
          id="testimonials"
          className="bg-gray-50 px-4 sm:px-8 lg:px-20 py-12 sm:py-16 lg:py-24"
        >
          <div className="flex flex-col items-center gap-8 lg:gap-12">
            <div className="flex flex-col items-center gap-4">
              <div className="bg-gray-200 px-5 py-1 rounded-xl">
                <span className="text-gray-600 text-sm font-medium">
                  Testimonials
                </span>
              </div>
              <p className="text-gray-600 text-base sm:text-lg lg:text-xl text-center max-w-2xl px-4">
                Nice things people have said about me:
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="bg-white px-4 sm:px-8 lg:px-20 py-12 sm:py-16 lg:py-24"
        >
          <div className="flex flex-col items-center gap-8 lg:gap-12">
            <div className="flex flex-col items-center gap-4">
              <div className="bg-gray-200 px-5 py-1 rounded-xl">
                <span className="text-gray-600 text-sm font-medium">
                  Get in touch
                </span>
              </div>
              <p className="text-gray-600 text-base sm:text-lg lg:text-xl text-center max-w-2xl px-4">
                What's next? Feel free to reach out to me if you're looking for
                a developer, have a query, or simply want to connect.
              </p>
            </div>

            <div className="flex flex-col items-center gap-4 w-full">
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full justify-center">
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8 text-gray-600 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M22 7L13.03 12.7C12.7213 12.8934 12.3643 12.996 12 12.996C11.6357 12.996 11.2787 12.8934 10.97 12.7L2 7M20 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-gray-900 text-lg sm:text-2xl lg:text-4xl font-semibold text-center break-all">
                  reachsagarshah@gmail.com
                </span>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full justify-center">
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8 text-gray-600 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.18999 12.85C3.49997 10.2412 2.44824 7.27099 2.11999 4.18C2.095 3.90347 2.12787 3.62476 2.21649 3.36162C2.30512 3.09849 2.44756 2.85669 2.63476 2.65162C2.82196 2.44655 3.0498 2.28271 3.30379 2.17052C3.55777 2.05833 3.83233 2.00026 4.10999 2H7.10999C7.5953 1.99522 8.06579 2.16708 8.43376 2.48353C8.80173 2.79999 9.04207 3.23945 9.10999 3.72C9.23662 4.68007 9.47144 5.62273 9.80999 6.53C9.94454 6.88792 9.97366 7.27691 9.8939 7.65088C9.81415 8.02485 9.62886 8.36811 9.35999 8.64L8.08999 9.91C9.51355 12.4135 11.5864 14.4864 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9751 14.1858 16.3491 14.1061C16.7231 14.0263 17.1121 14.0555 17.47 14.19C18.3773 14.5286 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-gray-900 text-lg sm:text-2xl lg:text-4xl font-semibold text-center">
                  +91 8980500565
                </span>
              </div>
            </div>

            <div className="flex flex-col items-center gap-2 mt-4">
              <span className="text-gray-600 text-sm sm:text-base text-center">
                You may also find me on these platforms!
              </span>
              <div className="flex gap-1">
                <button
                  className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
                  aria-label="GitHub"
                >
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M15 22V18C15.1391 16.7473 14.7799 15.4901 14 14.5C17 14.5 20 12.5 20 9C20.08 7.75 19.73 6.52 19 5.5C19.28 4.35 19.28 3.15 19 2C19 2 18 2 16 3.5C13.36 3 10.64 3 8 3.5C6 2 5 2 5 2C4.7 3.15 4.7 4.35 5 5.5C4.27187 6.51588 3.91847 7.75279 4 9C4 12.5 7 14.5 10 14.5C9.61 14.99 9.32 15.55 9.15 16.15C8.98 16.75 8.93 17.38 9 18V22M9 18C4.49 20 4 16 2 16"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button
                  className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
                  aria-label="Twitter"
                >
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M23 3.00005C22.0424 3.67552 20.9821 4.19216 19.86 4.53005C19.2577 3.83756 18.4573 3.34674 17.567 3.12397C16.6767 2.90121 15.7395 2.95724 14.8821 3.28445C14.0247 3.61166 13.2884 4.19445 12.773 4.95376C12.2575 5.71308 11.9877 6.61238 12 7.53005V8.53005C10.2426 8.57561 8.50127 8.18586 6.93101 7.39549C5.36074 6.60513 4.01032 5.43868 3 4.00005C3 4.00005 -1 13 8 17C5.94053 18.398 3.48716 19.099 1 19C10 24 21 19 21 7.50005C20.9991 7.2215 20.9723 6.94364 20.92 6.67005C21.9406 5.66354 22.6608 4.39276 23 3.00005Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button
                  className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
                  aria-label="Figma"
                >
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M5 5.5C5 4.57174 5.36875 3.6815 6.02513 3.02513C6.6815 2.36875 7.57174 2 8.5 2H12V9H8.5C7.57174 9 6.6815 8.63125 6.02513 7.97487C5.36875 7.3185 5 6.42826 5 5.5Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 2H15.5C16.4283 2 17.3185 2.36875 17.9749 3.02513C18.6313 3.6815 19 4.57174 19 5.5C19 6.42826 18.6313 7.3185 17.9749 7.97487C17.3185 8.63125 16.4283 9 15.5 9H12V2Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 12.5C12 11.5717 12.3687 10.6815 13.0251 10.0251C13.6815 9.36875 14.5717 9 15.5 9C16.4283 9 17.3185 9.36875 17.9749 10.0251C18.6313 10.6815 19 11.5717 19 12.5C19 13.4283 18.6313 14.3185 17.9749 14.9749C17.3185 15.6313 16.4283 16 15.5 16C14.5717 16 13.6815 15.6313 13.0251 14.9749C12.3687 14.3185 12 13.4283 12 12.5Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5 19.5C5 18.5717 5.36875 17.6815 6.02513 17.0251C6.6815 16.3687 7.57174 16 8.5 16H12V23H8.5C7.57174 23 6.6815 22.6313 6.02513 21.9749C5.36875 21.3185 5 20.4283 5 19.5Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5 12.5C5 11.5717 5.36875 10.6815 6.02513 10.0251C6.6815 9.36875 7.57174 9 8.5 9H12V16H8.5C7.57174 16 6.6815 15.6313 6.02513 14.9749C5.36875 14.3185 5 13.4283 5 12.5Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-50 px-4 sm:px-8 lg:px-20 py-6 border-t border-gray-200">
          <div className="flex items-center justify-center">
            <span className="text-gray-600 text-xs sm:text-sm text-center">
              © 2024 | Designed and coded with ❤️️ by Sagar Shah
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
}
