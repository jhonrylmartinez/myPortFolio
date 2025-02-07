import React from 'react';
import Card from './projectSectionComponents/Card';

const ProjectSection = () => {
  return (
    <div>
      <section id="projects" className="py-8 ">
        <h2 className="text-3xl font-semibold text-center text-gray-900">My Projects</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            projectName="Device Management System ( DMS )"
            projectDescription="It is a system built with Next.js, Tailwind CSS, Sequelize, and SQLite Studio that provides CRUD functionality, allowing users to insert, edit, delete, and retrieve data from the database."
            projectImage="/default_image.png"
            projectLink="/projectsDetails/dmsDetails" 
          />
          <Card
            projectName="Project Two"
            projectDescription="A brief description for Project Two."
            projectImage="/default_image.png"
            projectLink="/project-two" 
          />
          <Card
            projectName="Project Three"
            projectDescription="A brief description for Project Three."
            projectImage="/default_image.png"
            projectLink="/project-three" 
          />
        </div>
      </section>
    </div>
  );
};

export default ProjectSection;
