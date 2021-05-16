import { createClient } from "contentful";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Skeleton from "../../components/Skeleton";
import React from "react";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export const Project = ({ project }) => {
  if (!project) return <Skeleton />;

  const { featuredImage, title, date, tags, content } = project.fields;

  return (
    <main className="bg-gray-200">
      <div className="p-10 container flex flex-col justify-center mx-auto">
        <div className="mx-auto pb-10">
          <Image
            src={"https:" + featuredImage.fields.file.url}
            width={featuredImage.fields.file.details.image.width}
            height={featuredImage.fields.file.details.image.height}
            className="rounded"
          />
        </div>
        <section className="bg-gray-100 rounded shadow-xl lg:flex p-20">
          <div className="text-lg mr-20">
            <h1 className="text-6xl text-gray-700 mb-4 font-bold">{title}</h1>
            <div className="text-gray-600 text-xl whitespace-pre-line">
              {documentToReactComponents(content)}
            </div>
            <div className="flex flex-wrap pt-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-sm font-medium bg-gray-200 py-1 px-2 rounded text-black align-middle mr-2 mb-2 font-bold"
                >
                  {tag}
                </span>
              ))}
            </div>
            <span className="text-sm font-serif float-right">{date}</span>
          </div>
          {/*<div className="flex-shrink-0">
            <Image
              src="/img/anders_desert_view.jpg"
              alt="A picture of me in the desert"
              width={429}
              height={885}
              className="rounded"
            />
          </div>*/}
        </section>
      </div>
    </main>
    /*<div>
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
    </div>*/
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
    // Fallback pages are placeholder content whilst Next.js fetches new data for the page
    fallback: true,
  };
};

// This is called on each individual 'Project'
export const getStaticProps = async ({ params }) => {
  // Will always return an array
  const { items } = await client.getEntries({
    content_type: "project",
    "fields.slug": params.slug,
  });

  if (!items.length) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { project: items[0] },
    revalidate: 1,
  };
};

export default Project;
