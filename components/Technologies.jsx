import React from "react";

const Technologies = () => {
  return (
    <section className="flex flex-col bg-code-pattern min-w-min pb-16 pt-8 lg:pt-16 px-8">
      <div className="flex justify-center">
        <h1 className="text-gray-100 text-5xl justify-center mb-6 font-bold">
          My Technologies
        </h1>
      </div>
      <div className="flex lg:flex-row flex-col flex-shrink-0 justify-center mx-32">
        <div className="p-5">
          <h2 className="text-2xl text-white text-center font-bold">Java</h2>
          <p className="text-white text-center text-xl">
            Java is my most experienced language. I've made some major and minor
            projects including my bachelor in 'Shortest Paths' and an app
            'HeavyMetalDK'. The latter was made in Android Studio. This also
            includes making games like 'Minesweeper' and 'Tic-Tac-Toe', which
            can be seen under my projects or in my
            <a
              href="https://github.com/anders2410"
              className="inline-ref"
              target="_blank"
            >
              GitHub
            </a>
            repo.
          </p>
        </div>
        <div className="p-5">
          <h2 className="text-2xl text-white text-center font-bold">React</h2>
          <p className="text-white text-center text-xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className="p-5">
          <h2 className="text-2xl text-white text-center font-bold">Python</h2>
          <p className="text-white text-center text-xl">
            Is my second most experienced language. I enjoy using it as I think
            it's concise and simplistic. I've mostly used it in smaller projects
            for data visualization, games or scripting, but also in 'Machine
            Learning' at University.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
