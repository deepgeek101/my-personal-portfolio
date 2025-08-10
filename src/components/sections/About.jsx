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
              I began my tech journey with Java, C, and C++, which gave me a solid programming foundation.
              Over time, my passion shifted toward the data domain, where I’m exploring Python, practicing SQL, and deepening my understanding of mathematics — a subject I’ve always enjoyed.
            </p>
            <p className='text-gray-600 dark:text-gray-400 mb-6 leading-relaxed'>
              I’m particularly intrigued by how AI, Data Science, and Machine Learning solutions work behind the scenes, and I’m constantly expanding my knowledge in these areas.
              My learning path has also led me into tools like the Salesforce CRM platform, reinforcing my belief that every skill adds value to the bigger picture.
            </p>
            <p className='text-gray-600 dark:text-gray-400 mb-6 leading-relaxed'>
              Beyond tech, I’m passionate about swimming, music, fitness, motorcycling, and adventure.
              I approach both my hobbies and my work with the same curiosity — eager to explore, learn, and grow.
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
