import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <main className="bg-gray-200">
      <div className="p-10 container mx-auto">
        <section className="bg-gray-100 rounded shadow-xl lg:flex p-20">
          <div className="text-lg mr-20">
            <h1 className="text-6xl text-gray-700 mb-4 font-bold">Who am I?</h1>
            <span className="text-gray-600 text-xl whitespace-pre-line">
              I'm 25 years, currently living in Aarhus and have been doing so
              for the past 4 years. In summer 2020, I finished my Bachelor
              Degree in Computer Science. I am currently working as a software
              developer at Styrelsen for IT og Læring, and have been doing so
              since September 2020. I'm looking forward to applying my knowledge
              from the University in real-life applications.
              <br /> <br />
              As a person, I am smiling and enjoying life. I love to travel and
              have been all around the world during my gap years and in my
              summer vacations. Most recently I have been to Iceland, Poland,
              Iran and Japan. My most memorable journeys have taken me all over
              South-East Asia, where diving has become a favourite hobby of
              mine. At home I enjoy spending time friends, and doing sports,
              mostly floorball, where I play at the local club, Team Århus
              Floorball. I also enjoy watching sports, almost anything, but my
              favourite is football both European and American.
              <br /> <br />
              My interest in programming and software started in High
              School/Gymnasium with the subject 'Information Technologies', and
              since then it has evolved and was the main reason I picked
              Computer Science at University. Im very fund of technology in
              general, and I aspire to keep up with the latest trends in both
              software and hardware. I value development and creative solutions
              with modern technologies and always strive to be update-to-date
              with all the latest technological advances.
            </span>
          </div>
          <div className="flex-shrink-0">
            <Image
              src="/img/anders_desert_view.jpg"
              alt="A picture of me in the desert"
              width={429}
              height={885}
              className="rounded"
            />
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;
