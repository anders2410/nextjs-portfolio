import {fetchEntries} from '../util/getContent'
import Project from '../components/Project'

export default ({projects}) => {
  console.log(projects);
  return (<div className="posts">
    {projects.map((p) => {
      return <Project key={p.date} date={p.date} title={p.title}/>
    })}
  </div>)
}

export async function getStaticProps() {
  const res = await fetchEntries()
  const projects = await res.map((p) => {
    return p.fields
  })

  return {
    props: {
      projects,
    },
  }
}