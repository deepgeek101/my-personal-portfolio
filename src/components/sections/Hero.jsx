import { useEffect, useState } from "react";
import profilePic from "../../assets/pic-one.png";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "Data Enthusiast";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(typedText + fullText[index]);
        setIndex(index + 1);
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [typedText, index]);

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center px-6 md:px-12 py-12 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 mt-16">
        <div className="w-full md:w-1/2 order-2 md:order-1">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white animate-fade-in">
            Hi, I'm{" "}
            <span className="text-blue-600 dark:text-blue-400">
              Deep Chaulagain
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl mb-6 text-gray-700 dark:text-gray-300">
            {typedText}
            <span className="animate-pulse">|</span>
          </h2>
          <p className="text-lg mb-8 text-gray-600 dark:text-gray-400 max-w-lg">
            I build data-driven solutions that are efficient, scalable, and
            insightful. My passion lies in transforming raw information into
            actionable intelligence that drives better decisions.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <button
              onClick={() => scrollToSection("#contact")}
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              Get in Touch
            </button>
            <button
              onClick={() => scrollToSection("#projects")}
              className="px-6 py-3 bg-white text-blue-600 font-medium rounded-md border-2 border-blue-600 hover:bg-blue-50 transition-colors duration-300 shadow-md hover:shadow-lg dark:bg-gray-800 dark:text-blue-400 dark:border-blue-400 dark:hover:bg-blue-900"
            >
              View My Work
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/2 order-1 md:order-2">
          <div className="relative mx-auto w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-blue-600 dark:border-blue-400 shadow-xl">
            <img
              src={profilePic}
              alt="Deep Chaulagain"
              loading="lazy"
              className="object-cover w-full h-full"
            />
            <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
              <svg
                className="w-32 h-32 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
