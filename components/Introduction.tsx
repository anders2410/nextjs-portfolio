import React from 'react'
import Image from 'next/image'

const Introduction = () => {
  return (
    <section className="relative flex flex-col lg:flex-row justify-center bg-gray-100 p-6 sm:p-12 lg:p-24">
      <div className="relative inset-1 z-20 w-64 h-64 mx-auto lg:mx-0 lg:mr-6 mb-6">
        <Image
          src="/img/profile-picture-1.png"
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
          aspiring full-stack developer
        </p>
      </div>
    </section>
  )
}

export default Introduction
