import React from 'react';

const Card = ({ projectName, projectDescription, projectImage, projectLink }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300">
      <img
        src={projectImage}
        alt={projectName}
        className="w-full h-48 object-cover rounded-lg mb-4 transition-transform transform hover:scale-110 duration-300"
      />
      <h3 className="text-xl font-semibold text-gray-800">{projectName}</h3>
      <p className="mt-2 text-gray-600">{projectDescription}</p>
      <a 
        href={projectLink}
        target='_blank'
        className="mt-4 inline-block text-blue-600 hover:text-blue-800 font-semibold"
      >
        View Project
      </a>
    </div>
  );
};

export default Card;
