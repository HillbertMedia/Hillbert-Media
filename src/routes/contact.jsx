import React, { useState } from 'react';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Send form data to server or external service
        console.log({ name, email, message });
      };
    return (
        <div className="flex flex-col min-h-screen bg-primary pt-20">
             <div className="flex items-center justify-center pb-10 z-0">
            <h1 className="text-7xl bold font-bold"> CONTACT </h1>
        </div>
     
    <div className='container mx-auto'>
     <form className="  bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
     <div className='flex items-center justify-center'>
     <p className='text-xl md:text-3xl bold font-bold mb-10'>Do you have a questions or project in <span className='text-secondary'>mind?</span> <br></br> Please do not hesitate to contact
us directly. </p>
        </div>
 
      <div className="mb-4">
        <label htmlFor="name" className="block text-secondary font-bold mb-2">
          Full name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-gray-400 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-secondary font-bold mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-400 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block text-secondary font-bold mb-2">
          Message
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border border-gray-400 p-2 w-full h-32 resize-none rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
      <div className='flex items-end justify-end'>
        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-secondary hover:bg-primary text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-tertiary flex items-end"
        >
          Submit
        </button>
      </div>
    </form>
    </div>
        </div>
    );
}
export default Contact;