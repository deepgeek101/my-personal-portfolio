const About = () => {
  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id='about'
      className='py-16 px-6 md:px-12 bg-white dark:bg-gray-900 transition-colors duration-300'
    >
      <div className='container mx-auto'>
        <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white'>
          About <span className='text-blue-600 dark:text-blue-400'>Me</span>
        </h2>

        <div className='max-w-3xl mx-auto'>
          <div className='bg-blue-50 dark:bg-gray-800 rounded-xl p-8 shadow-lg border-l-4 border-blue-500'>
            <h3 className='text-2xl md:text-3xl font-semibold mb-6 text-gray-800 dark:text-gray-200'>
              My Journey
            </h3>
            <p className='text-gray-600 dark:text-gray-400 mb-6 leading-relaxed'>
              I'm a passionate Full Stack Developer with expertise in building
              modern web applications. I love creating digital experiences that
              are intuitive, accessible, and solve real-world problems.
            </p>
            <p className='text-gray-600 dark:text-gray-400 mb-6 leading-relaxed'>
              My approach to development centers around creating user-friendly
              experiences through clean, maintainable code. I enjoy the
              challenge of turning complex problems into elegant solutions.
            </p>

            <p className='text-gray-600 dark:text-gray-400 mb-8 leading-relaxed'>
              I specialize in JavaScript and its modern frameworks like React,
              Next.js, and Node.js. My goal is to create web applications that
              are not only functional but also aesthetically pleasing and
              accessible to all users. I believe in continuous learning and
              staying up-to-date with the latest technologies and best
              practices.
            </p>

            <div className='text-center'>
              <button
                onClick={() => scrollToSection('#contact')}
                className='inline-block px-8 py-4 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-md'
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
