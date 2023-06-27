import React, { useState} from 'react'
import router from 'next/router'
export const ContactSection = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('name', name)
    formData.append('email', email)
    formData.append('message', message)
    console.log(formData)
    const req = await fetch(`https://getform.io/f/${process.env.GETFORM_ID}`, {
      method: 'POST',
      body: formData
    })
    if(req.status === 200) {
      router.push('/Success')
    }
  }
  return (
    <section id="contact" className="h-screen">
      <div className="flex justify-center items-center bg-gradient-to-b from-purple-500 to-teal-300 h-2/6">
        <h1 className="text-4xl md:text-6xl text-beige font-title font-bold">Contact Me!</h1>
      </div>  

      <div className="bg-white flex justify-center items-center h-4/6 shadow-inner">
        <form onSubmit={handleSubmit} className="w-5/6 lg:w-1/2">
          <input name="_input" type="hidden" className="hidden"></input>
            <div className="w-full">
              <label htmlFor="name" className="flex">Name</label>
              <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="bg-gray-200 rounded-sm w-full h-10 shadow-inner pl-2 lg:placeholder:text-md" placeholder="John Doe"></input>
            </div>
            <div className="w-full">
              <label htmlFor="email" className="flex mt-2">Email</label>
              <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-gray-200 rounded-sm w-full h-10 shadow-inner pl-2 lg:placeholder:text-md" placeholder="test@example.com"></input>
            </div>
          <div className="w-full mt-2">
            <label htmlFor="message" className="flex">Message</label>
            <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} className="bg-gray-200 w-full rounded-sm h-24 md:h-60 shadow-inner resize-none pl-2 pt-2 placeholder:text-sm lg:placeholder:text-lg" placeholder="Enter Your Message Here"></textarea>
          </div>

          <button className="w-full bg-gradient-to-r from-purple-500 to-teal-300 text-white rounded-sm p-2 mt-4 shadow-lg hover:opacity-90">Submit!</button>
        </form>
      </div>
    </section>
  );
}
