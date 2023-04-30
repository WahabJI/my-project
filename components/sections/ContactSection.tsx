import React from 'react'

export const ContactSection = () => {
  return (
    <section id="contact" className="bg-gradient-to-b from-purple-500 to-teal-300 h-screen">
      <div className="flex justify-center items-center h-1/6">
        <h1 className="text-4xl md:text-6xl text-beige font-title font-bold">Contact Me!</h1>
      </div>

      <div className="flex justify-center items-center my-auto h-5/6">
        <div className="flex flex-col justify-center items-center bg-white w-5/6 h-fit rounded-lg p-6">
          <input className="w-full h-12 placeholder:text-black focus:outline-purple-300 placeholder:pl-4 focus:bg-white hover:bg-white rounded-md mb-1" placeholder="Name">
          </input>
          <input className="w-full h-12 placeholder:text-black focus:outline-purple-300 placeholder:pl-4 focus:bg-white hover:bg-white rounded-md mb-1" placeholder="Email">
          </input>
          <textarea className="w-full h-16 placeholder:text-black focus:outline-purple-300 placeholder:pl-4 placeholder:pt-2 focus:bg-white hover:bg-white rounded-md" placeholder="Message">
          </textarea>
          <button className="">Submit</button>
        </div>
      </div>
    </section>
  );
}
