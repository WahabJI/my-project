import React from 'react'

export const ContactSection = () => {
  return (
    <section id="contact" className="h-screen">
      <div className="flex justify-center items-center bg-gradient-to-b from-purple-500 to-teal-300 h-2/6">
        <h1 className="text-4xl md:text-6xl text-beige font-title font-bold">Contact Me!</h1>
      </div>  

      <div className="bg-white flex justify-center items-center h-4/6 shadow-lg">
        <form className="w-5/6">
          <div className="flex">
            <div className="w-full">
              <label htmlFor="name" className="flex">Name</label>
              <input id="name" className="bg-gray-200 rounded-sm w-full h-10 shadow-inner placeholder:pl-2 placeholder:text-sm" placeholder="John Doe"></input>
            </div>
            <div className="ml-4 w-full">
              <label htmlFor="email" className="flex">Email</label>
              <input id="email" className="bg-gray-200 rounded-sm w-full h-10 shadow-inner placeholder:pl-2 placeholder:text-sm" placeholder="test@example.com"></input>
            </div>
          </div>
          <div className="w-full mt-2">
            <label htmlFor="message" className="flex">Message</label>
            <textarea id="message" className="bg-gray-200 w-full rounded-sm h-24 shadow-inner resize-none placeholder:pl-2 placeholder:pt-2 placeholder:text-sm" placeholder="Enter your message here"></textarea>
          </div>

          <button className="w-full bg-gradient-to-r from-purple-500 to-teal-300 text-white rounded-sm p-2 mt-4 shadow-lg hover:opacity-90">Submit!</button>
        </form>

        {/* <div className="flex flex-col justify-center items-center bg-white w-5/6 md:w-fit h-fit rounded-lg p-6">
          <form className="">
            <input className="w-full h-12 shadow-md placeholder:text-black focus:ring-16 focus:outline-none focus:ring-4 focus:rounded-md focus:ring-purple-300 placeholder:pl-4 focus:bg-white hover:bg-white rounded-md mb-4" placeholder="Name">
            </input>
            <input className="w-full h-12 shadow-md placeholder:text-black focus:ring-16 focus:outline-none focus:ring-4 focus:rounded-md focus:ring-purple-300 placeholder:pl-4 focus:bg-white hover:bg-white rounded-md mb-4" placeholder="Email">
            </input>
            <textarea className="w-full h-32 shadow-md placeholder:text-black focus:ring-16 focus:outline-none focus:ring-4 focus:rounded-md focus:ring-purple-300 placeholder:pl-4 placeholder:pt-2 focus:bg-white hover:bg-white rounded-md resize-none" placeholder="Message">
            </textarea>
            <div className="flex justify-center items-center text-center">
              <button type="submit" className="mt-4 px-4 py-2 text-xl rounded-md shadow-lg ease-in-and-out duration-200 hover:bg-gradient-to-t from-purple-500 to-teal-300 hover:text-white">Submit</button>
            </div>
          </form>
        </div> */}
      </div>
    </section>
  );
}
