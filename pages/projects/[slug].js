import { createClient } from "contentful";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import Skeleton from "../../components/Skeleton";
import React from "react";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

const renderDocument = (document) => {
  const Text = ({ children }) => <p>{children}</p>;

  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    },
    renderText: (text) => {
      return text.split("\n").reduce((children, textSegment, index) => {
        return [...children, index > 0 && <br key={index} />, textSegment];
      }, []);
    },
  };

  return documentToReactComponents(document, options);
};

// This is a "nested route".
const Project = ({ project }) => {
  if (!project) return <Skeleton />;

  const { featuredImage, title, date, tags, content } = project.fields;

  return (
    <main className="bg-gray-200">
      <div className="p-10 container flex flex-col justify-center mx-auto">
        <div className="mx-auto pb-10">
          <Image
            src={"https:" + featuredImage.fields.file.url}
            alt=""
            width={featuredImage.fields.file.details.image.width}
            height={featuredImage.fields.file.details.image.height}
            className="rounded"
          />
        </div>
        <section className="bg-gray-100 rounded shadow-xl lg:flex px-40 py-20">
          <div className="text-lg mr-20">
            <h1 className="text-6xl text-gray-700 mb-6 font-bold">{title}</h1>
            <div className="text-gray-600 text-xl whitespace-pre-line">
              {renderDocument(content)}
            </div>
            <div className="flex flex-wrap pt-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-sm font-medium bg-gray-200 py-1 px-2 rounded text-black align-middle mr-2 mb-2 mt-10 font-bold"
                >
                  {tag}
                </span>
              ))}
            </div>
            <span className="text-sm font-serif float-right">{date}</span>
          </div>
        </section>
      </div>
    </main>
  );
};

// This is called on each individual 'Project'.
// Can get the "context" as a prop, which includes params, etc.
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

// The last one is 'getServerSideProps', which will request the data when called.

export default Project;
