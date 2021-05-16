import React from "react";

const Technologies = () => {
  return (
    <section className="flex flex-col bg-code-pattern pb-16 pt-8 lg:pt-16">
      <div className="flex justify-center mt-16">
        <h1 className="text-gray-100 text-5xl justify-center mb-12 font-bold">
          My Technologies
        </h1>
      </div>
      <div className="flex flex-nowrap lg:flex-row flex-col justify-center mx-60 mb-16">
        <div className="p-6">
          <h2 className="text-2xl text-white text-center font-semibold mb-2">
            Java
          </h2>
          <p className="text-white text-center text-xl font-light">
            Java is my most experienced language. I've made some major and minor
            projects including my bachelor in 'Shortest Paths' and an app
            'HeavyMetalDK'. The latter was made in Android Studio. This also
            includes making games like 'Minesweeper' and 'Tic-Tac-Toe', which
            can be seen under my projects or in my
            <a
              href="https://github.com/anders2410"
              className="inline-ref underline"
              target="_blank"
            >
              {" "}
              GitHub{" "}
            </a>
            repo.
          </p>
        </div>
        <div className="p-6">
          <h2 className="text-2xl text-white text-center font-semibold mb-2">
            Python
          </h2>
          <p className="text-white text-center text-xl font-light">
            Is my second most experienced language. I enjoy using it as I think
            it's concise and simplistic. I've mostly used it in smaller projects
            for data visualization, games or scripting, but also in 'Machine
            Learning' at University.
          </p>
        </div>
        <div className="p-6">
          <h2 className="text-2xl text-white text-center font-semibold mb-2">
            React
          </h2>
          <p className="text-white text-center text-xl font-light">
            I have picked up React when I began my work at 'Styrelsen for IT og
            Læring'. This is our main frontend framework together with
            JavaScript. I'm very confident with the framework, and my JavaScript
            skills are growing each day. I strive keep myself updated with the
            latest trends in React like 'Hooks', 'Router' and so forth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
