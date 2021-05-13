function Project({ date, title }) {

  return (
    <div className="post">
      <div className="text">
        <h2>{title}</h2>
        <h3>{date}</h3>
      </div>
    </div>
  )
}

export default Project