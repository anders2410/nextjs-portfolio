// Is used to add META-tags to your website
import Head from "next/head";
import { createClient } from "contentful";
import Technologies from "../components/Technologies";
import About from "../components/About";
import Projects from "../components/Projects";
import Image from "next/image";
import React from "react";

const Homepage = ({ projects }) => {
  return (
    <>
      <Head>
        <title>Anders Holt Knudsen</title>
        <meta
          name="keywords"
          content="react, web development, programming, computer science, bachelor, portfolio, anders holt knudsen"
        />
      </Head>
      <section className="relative flex flex-col lg:flex-row justify-center bg-gray-100 p-6 sm:p-12 lg:p-24">
        <div className="relative inset-1 z-20 w-64 h-64 mx-auto lg:mx-0 lg:mr-6 mb-6 shadow-xl">
          <Image
            src="/img/square_profile_picture.jpg"
            alt="A profile picture of me"
            width={535}
            height={535}
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-col mx-auto lg:mx-0">
          <h1 className="text-5xl lg:text-8xl text-gray-600">
            Hi, I am
            <br />
            <strong className="text-black">Anders Holt</strong>
          </h1>
          <p className="text-right bg-red-700 p-2 mt-4 text-lg sm:text-xl lg:text-2xl font-bold font-mono">
            aspiring software dev
          </p>
        </div>
      </section>
      <Technologies />
      <About />
      <Projects projects={projects} />
    </>
  );
};

export const getStaticProps = async () => {
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
};

export default Homepage;
