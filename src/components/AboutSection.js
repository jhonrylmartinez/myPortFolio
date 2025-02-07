import React from 'react';

const AboutSection = () => {
  return (
    <div>
      <section id="about" className="py-16 bg-white">
        <h2 className="text-3xl font-semibold text-center text-gray-900">About Me</h2>
        <p className="mt-4 text-lg max-w-3xl mx-auto text-center text-gray-700">
          I am a Passerelles Numériques scholar currently studying at the University of San Carlos, where I am pursuing a Certificate in Computer Technology. As a passionate web developer, I leverage AI to enhance projects, increase productivity, and reduce time-consuming tasks.
        </p>

        {/* Flex container for images */}
        <div className="mt-12 flex justify-evenly space-x-8">
          {/* First Image */}
          <div className="text-center">
            <img
              src="/usc.png" 
              alt="University of San Carlos"
              className="w-60 h-60 rounded-full border-4 border-green-500 shadow-xl object-cover"
            />
            <p className="mt-2 text-lg text-gray-700 font-bold">University of San Carlos</p>
          </div>

          {/* Second Image */}
          <div className="text-center">
            <img
              src="/pn.png" 
              alt="Passerelles Numériques"
              className="w-60 h-60 border-4 border-green-500 rounded-full shadow-xl object-cover"
            />
            <p className="mt-2 text-lg text-gray-700 font-bold">Passerelles Numériques</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutSection;
