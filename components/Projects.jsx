import React from "react";
import ProjectCard from "./ProjectCard";

// https://tailwindcss.com/docs/responsive-design
const Projects = ({ projects }) => {
  return (
    <main className="bg-gray-800 py-20 px-12">
      <section className="container mx-auto">
        <h1 className="text-gray-100 text-5xl flex justify-center mb-6 font-bold">
          My Projects
        </h1>
        <h2 className="text-2xl text-gray-200 flex justify-center mb-12">
          A selection of all the projects I have worked on
        </h2>
        <section className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects &&
            projects.map((project) => (
              <ProjectCard key={project.fields.slug} project={project} />
            ))}
        </section>
      </section>
    </main>
  );
};

export default Projects;
