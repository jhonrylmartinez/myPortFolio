import React from 'react'

const HeroSection = () => {
  return (
    <div>
         <section id="home" className="flex items-center justify-center bg-white h-[30rem]">
        <div className="flex items-center space-x-6">
          <img
            src="/me.jpg"
            alt="Jhonryl Martinez"
            className="w-50 h-60 border-4 border-green-500  rounded-full object-cover"
          />
         <div className="text-center">
         <h1 className="text-4xl font-semibold text-black">
            Hi, I am{" "}
            <span className="text-green-400 text-5xl font-bold overflow-hidden">Jhonryl Martinez</span>
        </h1>

            <h2 className="text-2xl text-gray-500">Web Developer</h2>
            </div>

        </div>
      </section>
    </div>
  )
}

export default HeroSection