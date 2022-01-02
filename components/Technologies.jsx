import React from 'react'

const Line = () => (
  <hr
    style={{
      color: 'white',
      backgroundColor: 'white',
      height: 1,
      width: 150,
      opacity: '50%',
      marginBottom: '10px',
    }}
  />
)

const Technologies = () => {
  return (
    <section className="flex flex-col bg-code-pattern bg-cover pb-16 pt-8 lg:pt-16">
      <div className="flex flex-col items-center justify-center mt-16">
        <h1 className="text-gray-100 text-3xl lg:text-5xl lg:mb-10 font-bold">
          My Technologies
        </h1>
        <Line />
      </div>
      <div className="flex flex-nowrap lg:flex-row flex-col justify-center sm:mx-32 lg:mx-60 mb-16">
        <div className="p-6">
          <h2 className="text-2xl text-white text-center font-semibold mb-2">
            Java
          </h2>
          <p className="text-white text-center text-xl font-light">
            Java is my most experienced language. I have made some major and
            minor projects including my bachelor in &apos;Shortest Paths&apos;
            and an app &apos;HeavyMetalDK&apos;. The latter was made in Android
            Studio. This also includes making games like &apos;Minesweeper&apos;
            and &apos;Tic-Tac-Toe&apos;, which can be seen under my projects or
            in my{' '}
            <a
              href="https://github.com/anders2410"
              className="inline-ref underline"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>{' '}
            repo.
          </p>
        </div>
        <div className="p-6">
          <h2 className="text-2xl text-white text-center font-semibold mb-2">
            JavaScript/TypeScript
          </h2>
          <p className="text-white text-center text-xl font-light">
            Is my second most experienced language. All my JavaScript knowledge
            comes from my current job at &apos;Styrelsen for It og Læring&apos;.
            I do not like JavaScript per se as I think it lacks some
            type-safety. This is the reason why I am currently trying to learn
            TypeScript through YouTube and Udemy, but also at work.
          </p>
        </div>
        <div className="p-6">
          <h2 className="text-2xl text-white text-center font-semibold mb-2">
            React
          </h2>
          <p className="text-white text-center text-xl font-light">
            I have picked up React when I began my work at &apos;Styrelsen for
            IT og Læring&apos;. This is our main frontend framework together
            with JavaScript. I am very confident with the framework and strive
            to keep myself updated with the latest trends in React like Hooks,
            Router, NextJs, Vite and so forth.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Technologies
