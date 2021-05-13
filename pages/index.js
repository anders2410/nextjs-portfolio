import { createClient } from "contentful";
import ProjectCard from "../components/ProjectCard";

export default function Projects({ projects }) {
  console.log(projects);
  return (
    <div className="recipe-list">
      {projects.map((project) => (
        <ProjectCard key={project.sys.id} project={project} />
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const res = await client.getEntries({ content_type: "project" });

  return {
    props: {
      projects: res.items,
    },
  };
}
