import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ project }) => {
  const { title, slug, date, tags, description, thumbnail } = project.fields;
  return (
    <div className="flex flex-col justify-between rounded-lg shadow-xl bg-white">
      <div>
        <Image
          src={"https:" + thumbnail.fields.file.url}
          width={thumbnail.fields.file.details.image.width}
          height={thumbnail.fields.file.details.image.height}
          className="rounded-t-lg"
        />
        <section className="p-5">
          <Link href={`/projects/${slug}`}>
            <a>
              <h4 className="text-gray-800 text-xl font-bold mb-2 hover:text-red-700">
                {title}
              </h4>
            </a>
          </Link>
          <div className="text-gray-500 text-xs space-x-4">
            <p className="my-2 text-base text-gray-600 leading-relaxed">
              {description}
            </p>
          </div>
        </section>
      </div>
      <div className="flex flex-wrap pt-2 p-5">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-sm font-medium bg-gray-200 py-1 px-2 rounded text-black align-middle mr-2 mb-2 font-bold"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
