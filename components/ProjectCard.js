import Link from "next/link";
import Image from "next/image";

function ProjectCard({ project }) {
  const { title, slug, date, thumbnail } = project.fields;
  return (
    <div className="card">
      <div className="featured">
        <Image
          src={"https:" + thumbnail.fields.file.url}
          width={thumbnail.fields.file.details.image.width}
          height={thumbnail.fields.file.details.image.height}
        />
      </div>
      <div className="content">
        <h4>{title}</h4>
      </div>
      <Link href={"/projects/" + slug}>
        <a>See this</a>
      </Link>
    </div>
  );
}

export default ProjectCard;
