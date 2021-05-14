import { createClient } from "contentful";
import ProjectCard from "../components/ProjectCard";

export default function Projects({ projects }) {
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
    props: { projects: res.items },
    // Used in 'Incremental Static Regeneration'. Doesn't generate new content, only updates already existing
    revalidate: 1,
  };
}
