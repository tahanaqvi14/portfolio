import React from 'react'

export default function HeroSection() {    
  return (
    <section className=" text-white flex items-center ">
      <div className="max-w-3xl">
        <p className="text-purple-300 text-2xl">Hi, I am</p>
        <h1 className="text-8xl font-bold text-gray-300 mt-2">
          Taha Naqvi
        </h1>
        {/* <h2 className="text-5xl font-bold text-gray-500 mt-2">
          I build things for the web
        </h2> */}
      </div>
    </section>
  );
}
