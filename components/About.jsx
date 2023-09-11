import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div className="bg-gray-200">
      <div className="bg-gray-200 container p-4 sm:p-8 lg:p-10 mx-auto">
        <section className="bg-gray-100 rounded-xl lg:flex p-6 sm:p-16 lg:p-20">
          <div className="text-lg lg:mr-20">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl text-gray-700 mb-4 font-bold">
              Who am I?
            </h1>
            <span className="text-gray-600 text-lg lg:text-xl whitespace-pre-line">
              <p className="mb-4 leading-relaxed">
                I am 27 years, currently living in Aarhus and have been doing so
                for the past 6 years. In summer 2020, I finished my Bachelor
                Degree in Computer Science. I am currently working as a Frontend
                Developer at Raptor Services, and have been doing so since
                August 2022.
              </p>
              <p className="mb-4 leading-relaxed">
                As a person, I am smiling and enjoying life. I love to travel
                and have been all around the world during my gap years and in my
                summer vacations. Most recently I have been to Iceland, Poland,
                Iran and Japan. My most memorable journeys have taken me all
                over South-East Asia, where diving has become a favourite hobby
                of mine. At home I enjoy spending time with friends, and doing
                sports, mostly floorball, where I play at the local club, Team
                Århus Floorball. But I also enjoy others sport as discgolf,
                padel tennis and spikeball. I also enjoy watching sports, almost
                anything, but my favourite is football both European and
                American.
              </p>
              <p className="mb-4 leading-relaxed">
                My interest in programming and software started in High
                School/Gymnasium with the subject &apos;Information
                Technologies&apos;, and since then it has evolved and was the
                main reason I picked Computer Science at University. Im very
                fund of technology in general, and I aspire to keep up with the
                latest trends in software. I value development and creative
                solutions with modern technologies and always strive to be
                update-to-date with all the latest technological advances.
                Whenever time permits I like doing courses on Udemy to further
                educate my self and expand my knowledge and skill set.
              </p>
            </span>
          </div>
          <div className="flex-shrink-0 mt-5 lg:mt-0 mx-auto">
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
    </div>
  )
}

export default About
