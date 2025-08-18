import React from 'react'

export default function Contact() {
  return (
    <div className="flex flex-col justify-center items-center text-center m-20 px-4" id='contact'>
      <h1 className="text-5xl font-semibold mb-4">Get In Touch</h1>
      <p className="text-gray-700 max-w-xl mb-6">
        My inbox is always open. Whether you have a question or just want to say hi, 
        I’ll try my best to get back to you!
      </p>
      <a 
        href="mailto:sethlk2006@gmail.com" 
        className="font-semibold text-lg"
      >
        Say Hello
      </a>
    </div>
  )
}
