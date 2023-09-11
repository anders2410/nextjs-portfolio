import React from 'react'
import ProjectCard from './ProjectCard'

// https://tailwindcss.com/docs/responsive-design
// @ts-ignore
const Projects = ({ projects }) => {
  return (
    <main id="work" className="bg-gray-800 py-10 md:py-20 p-6 md:px-12">
      <section className="container mx-auto">
        <h1 className="text-gray-100 text-3xl md:text-5xl flex justify-center mb-6 font-bold">
          My recent Projects
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-200 flex justify-center mb-12">
          Here are a few past design projects I've worked on. Want to see more?
          Email me.
        </h2>
        <section className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects &&
            // @ts-ignore
            projects.map((project) => (
              <ProjectCard key={project.fields.slug} project={project} />
            ))}
        </section>
      </section>
    </main>
  )
}

export default Projects
