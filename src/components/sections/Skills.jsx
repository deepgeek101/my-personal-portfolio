const Skills = () => {
  const skills = [
  { name: 'Python', icon: 'devicon-python-plain colored' },
  { name: 'Pandas', icon: 'devicon-pandas-plain colored' },       
  { name: 'NumPy', icon: 'devicon-numpy-original colored' }, 
  { name: 'Power BI', icon: 'devicon-powerbi-plain colored' },
  { name: 'SQL (MySQL)', icon: 'devicon-mysql-plain colored' },
  { name: 'C++', icon: 'devicon-cplusplus-plain colored' },
  { name: 'C', icon: 'devicon-c-plain colored' },
  { name: 'Java', icon: 'devicon-java-plain colored' },
  { name: 'Git', icon: 'devicon-git-plain colored' },
   { name: 'Docker', icon: 'devicon-docker-plain colored' },
  { name: 'Linux', icon: 'devicon-linux-plain colored' },
  { name: 'Salesforce', icon: 'devicon-salesforce-plain colored' }, 
  { name: 'AWS', icon: 'devicon-amazonwebservices-plain colored' }
  ];

  return (
    <section
      id='skills'
      className='py-16 px-6 md:px-12 bg-gray-50 dark:bg-gray-800 transition-colors duration-300'
    >
      <div className='container mx-auto'>
        <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center text-gray-900 dark:text-white'>
          My <span className='text-blue-600 dark:text-blue-400'>Skills</span>
        </h2>
        <p className='text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto mb-12'>
          I've worked and continue working with a variety of technologies in web development. Here's
          a snapshot of my technical skills and expertise.
        </p>

        <div className='bg-white dark:bg-gray-700 rounded-lg shadow-md p-8'>
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8 justify-items-center'>
            {skills.map((skill) => (
              <div
                key={skill.name}
                className='flex flex-col items-center group'
              >
                <div className='w-16 h-16 flex items-center justify-center bg-gray-50 dark:bg-gray-600 rounded-lg mb-3 p-3 transition-all duration-300 shadow-md group-hover:shadow-lg group-hover:scale-110'>
                  <i
                    className={`${skill.icon} text-3xl ${
                      skill.name === 'Express' || skill.name === 'Next.js'
                        ? 'dark:text-white'
                        : ''
                    }`}
                  ></i>
                </div>
                <span className='text-sm text-gray-700 dark:text-gray-300 font-medium text-center'>
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
