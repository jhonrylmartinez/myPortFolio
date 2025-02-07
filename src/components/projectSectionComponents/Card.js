import React from 'react';

const Card = ({ projectName, projectDescription, projectImage, projectLink }) => {
  return (
    <div className="p-6 rounded-lg hover:bg-green-500 transition-colors duration-300">

      {/* Image Section */}
      <img
        src={projectImage}
        alt={projectName}
        className="w-full h-48 object-cover rounded-lg"
      />

      <h3 className="text-xl font-semibold text-gray-900 mt-4 text-center">{projectName}</h3>
      <p className="mt-2 text-lg text-gray-600 text-center">{projectDescription}</p>

      {/* View Project Link */}
     <div className='text-center'>
     <a
        href={projectLink}
        target='_blank'
        className="mt-4 inline-block text-blue-500 hover:underline text-center"
      >
        View Details
      </a>
     </div>
    </div>
  );
};

export default Card;
