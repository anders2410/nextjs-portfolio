import { createClient } from "contentful";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

export const Project = ({ project }) => {
  const { featuredImage, title, date, tags, content } = project.fields;

  return (
    <div>
      <Image
        src={"https:" + featuredImage.fields.file.url}
        width={featuredImage.fields.file.details.image.width}
        height={featuredImage.fields.file.details.image.height}
      />
      <div>
        <h2>{title}</h2>
        <h4>{date}</h4>
        <h3>Tags:</h3>
        {tags.map((tag) => (
          <span key={tag}>{tag} </span>
        ))}
      </div>
      <div className="content">
        <h3>Content</h3>
        <div>{documentToReactComponents(content)}</div>
      </div>
    </div>
  );
};

// This will create all the paths for our projects.
export const getStaticPaths = async () => {
  const res = await client.getEntries({ content_type: "project" });

  const paths = res.items.map((item) => {
    return {
      params: {
        slug: item.fields.slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

// This is called on each individual 'Project'
export const getStaticProps = async ({ params }) => {
  // Will always return an array
  const { items } = await client.getEntries({
    content_type: "project",
    "fields.slug": params.slug,
  });

  return {
    props: {
      project: items[0],
    },
  };
};

export default Project;
