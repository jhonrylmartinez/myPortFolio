import React from 'react';
import TechnicalSkillsCard from './technicalSkillComponentsCard/TechnicalSkillsCard';

const AboutSection = () => {
  return (
    <div>
      <section id="about" className="py-16 bg-white">
        <h2 className="text-3xl font-semibold text-center text-gray-900">About Me</h2>
        <p className="mt-4 text-lg max-w-3xl mx-auto text-center text-gray-700">
          I am a Passerelles Numériques scholar currently studying at the University of San Carlos, where I am pursuing a Certificate in Computer Technology. As a passionate web developer, I leverage AI to enhance projects, increase productivity, and reduce time-consuming tasks.
        </p>

        {/* Flex container for images */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center items-center space-y-8 sm:space-y-0 sm:space-x-8">
          {/* First Image */}
          <div className="text-center">
            <div className='flex justify-center'>
            <img
              src="/usc.png"
              alt="University of San Carlos"
              className="w-40 h-40 sm:w-60 sm:h-60 rounded-full border-4 border-green-500 shadow-xl object-cover transition-transform transform hover:scale-110"
            />
            </div>
            <p className="mt-2 text-lg text-gray-700 font-bold">University of San Carlos</p>
          </div>

          {/* Second Image */}
          <div className="text-center">
           <div className='flex justify-center'>
           <img
              src="/pn.png"
              alt="Passerelles Numériques"
              className="w-40 h-40 sm:w-60 sm:h-60 border-4 border-green-500 rounded-full shadow-xl object-cover transition-transform transform hover:scale-110"
            />
           </div>
            <p className="mt-2 text-lg text-gray-700 font-bold">Passerelles Numériques</p>
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section id="skills" className="py-16">
        <h2 className="text-3xl font-semibold text-center text-gray-900">Technical Skills</h2>
        <p className="mt-4 text-lg max-w-3xl mx-auto text-center text-gray-700">
          Below are some of the programming languages and frameworks that I am using in my previous projects:
        </p>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 max-w-3xl mx-auto text-center">
          <TechnicalSkillsCard title="Javascript" image={`/js.webp`} />
          <TechnicalSkillsCard title="React.JS" image={`/react.png`} />
          <TechnicalSkillsCard title="Next.JS" image={`/next.png`} />
          <TechnicalSkillsCard title="Tailwind CSS" image={`/tailwind.png`} />
          <TechnicalSkillsCard title="HTML 5" image={`/html.png`} />
          <TechnicalSkillsCard title="CSS 3" image={`/css.png`} />
          <TechnicalSkillsCard title="Node JS" image={`/node.png`} />
          <TechnicalSkillsCard title="MySQL" image={`/sql.png`} />
          <TechnicalSkillsCard title="PHP" image={`/php.png`} />
          <TechnicalSkillsCard title="Sqlite Studio" image={`/studio.jpg`} />
          <TechnicalSkillsCard title="Xampp" image={`/xampp.jpg`} />
          <TechnicalSkillsCard title="Git" image={`/git.png`} />
          <TechnicalSkillsCard title="Sequelize" image={`/sequelize.png`} />
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
