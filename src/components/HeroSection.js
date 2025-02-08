import React from 'react';

const HeroSection = () => {
  return (
    <div>
      <section id="home" className="flex items-center justify-center bg-white h-[30rem]">
        <div className="flex flex-col md:flex-row items-center space-x-6">
          <img
            src="/me.jpg"
            alt="Jhonryl Martinez"
            className="w-50 h-40 md:w-50 md:h-60 border-4 border-green-500 rounded-full object-cover"
          />
          <div className="text-center md:text-left mt-4 md:mt-0">
            <h1 className="text-3xl md:text-4xl font-semibold text-black">
              Hi, I am{" "}
              <span className="text-green-400 text-4xl md:text-5xl font-bold overflow-hidden">
                Jhonryl Martinez
              </span>
            </h1>

            <h2 className="text-xl md:text-2xl text-gray-500">Web Developer</h2>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
