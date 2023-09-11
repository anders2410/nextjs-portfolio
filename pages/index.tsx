import Head from 'next/head'
import { createClient } from 'contentful'
import Technologies from '../components/Technologies'
import About from '../components/About'
import Projects from '../components/Projects'
import React from 'react'
import { GetStaticProps } from 'next'
import Introduction from '../components/Introduction'

// @ts-ignore
const Homepage = ({ projects }) => {
  return (
    <>
      <Head>
        <title>Anders Holt Knudsen</title>
        <meta
          name="keywords"
          content="react, web development, programming, computer science, bachelor, portfolio, anders holt knudsen"
        />

        {/*These are some important META-tags for when sharing a link to this webpage.*/}
        <meta
          property="og:title"
          content="The Portfolio of Anders Holt Knudsen"
        />
        <meta
          property="og:description"
          content="A collection of all my work and experiences I have gained through my study and work life."
        />
        <meta
          property="og:image"
          content="https://anders-holt-portfolio.vercel.app/img/website_preview.png"
        />
      </Head>
      <Introduction />
      <Technologies />
      <About />
      <Projects projects={projects} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  // @ts-ignore
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
  })

  const res = await client.getEntries({ content_type: 'project' })

  return {
    props: { projects: res.items },
    // Used in 'Incremental Static Regeneration'. Doesn't generate new content, only updates already existing
    revalidate: 1,
  }
}

export default Homepage
