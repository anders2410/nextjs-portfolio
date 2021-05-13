import {createClient} from "contentful";

export default function Projects({ projects }) {
  console.log(projects)
  return (
    <div className="recipe-list">
      Recipe List
    </div>
  )
}

export async function getStaticProps() {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  })

  const res = await client.getEntries({content_type: 'project'});

  return {
    props: {
      projects: res.items
    }
  }
}