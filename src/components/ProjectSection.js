import React from 'react';
import Card from './projectSectionComponents/Card';

const ProjectSection = () => {
  return (
    <div>
      <section id="projects" className="py-16 bg-gray-50">
        <h2 className="text-3xl font-semibold text-center text-gray-900">My Projects</h2>
        <p className="mt-4 text-lg max-w-3xl mx-auto text-center text-gray-700">
          Here are some of the projects I've worked on, showcasing my skills and experience with different technologies.
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card
            projectName="Device Management System ( DMS )"
            projectDescription="It is a system built with Next.js, Tailwind CSS, Sequelize, and SQLite Studio that provides CRUD functionality, allowing users to insert, edit, delete, and retrieve data from the database."
            projectImage="/noimage.png"
            projectLink="/projectsDetails/dmsDetails" 
          />
          <Card
            projectName="Project Two"
            projectDescription="A brief description for Project Two."
            projectImage="/noimage.png"
            projectLink="/project-two" 
          />
          <Card
            projectName="Project Three"
            projectDescription="A brief description for Project Three."
            projectImage="/noimage.png"
            projectLink="/project-three" 
          />
        </div>
      </section>
    </div>
  );
};

export default ProjectSection;
