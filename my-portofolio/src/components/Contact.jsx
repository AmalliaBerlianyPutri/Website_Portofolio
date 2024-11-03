import React from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className='bg-black text-white py-20' id='about'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='text-4xl font-bold text-center mb-12'>Contact Me</h2>
        <div className='flex flex-col md:flex-row items-center md:space-x-12'>
          <div className='flex-1'>
            <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-pink-400 mb-4'>Let's Talk</h3>
            <p>Got an interesting idea or project? Don't hesitate to share! I'm open to collaboration or just a casual chat about the world of design and technology!</p>
            <div className='mb-4 mt-8'>
                <FaEnvelope className='inline-block text-pink-400 mr-2'></FaEnvelope>
                <a href='mailto:youremail@example.com' className='hover:underline'>
                    putriamallia755@gmail.com
                </a>
            </div>
            <div className='mb-4 mt-8'>
                <FaPhone className='inline-block text-pink-400 mr-2'></FaPhone>
                <span>085755506135</span>
            </div>
            <div className='mb-4 mt-8'>
                <FaMapMarkerAlt className='inline-block text-pink-400 mr-2'></FaMapMarkerAlt>
                <span>Surabaya, East Java, Indonesia</span>
            </div>
          </div>
          <div className='flex-1 w-full'>
            <form className='space-y-4'>
                <div>
                    <label htmlFor='name'className='block mb-2'>Your Name</label>
                    <input type='text'
                    className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus: outline-none focus:border-purple-800' placeholder='Enter Your Name'/>
                </div>
                <div>
                    <label htmlFor='name'className='block mb-2'>Email</label>
                    <input type='text'
                    className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus: outline-none focus:border-purple-800' placeholder='Enter Your Email'/>
                </div>
                <div>
                    <label htmlFor='message'className='block mb-2'>Message</label>
                    <textarea type='text'
                    className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus: outline-none focus:border-purple-800'
                    rowrs='5'
                    placeholder='Enter Your Message'/>
                </div>
                <button className='bg-gradient-to-r from-purple-800 to-pink-400 text-white hidden md:inline
                transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Contact;