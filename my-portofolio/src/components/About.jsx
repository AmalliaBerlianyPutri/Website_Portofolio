import React from 'react'
import AboutImage from '../assets/about-image.png'

const About = () => {
    return (
        <div className='bg-black text-white py-20' id='about'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <h2 className='text-4xl font-bold text-center mb-12'>About Me</h2>
            <div className='flex flex-col md:flex-row items-center md:space-x-12'>
                <img src={AboutImage} alt=""
                className='w-72 h-96 rounded object-cover mb-8 md:mb-0'/>
                <div className='flex-1'>
                    <p className='text-lg mb-8'>
                Hi everyone! I'm Amallia, a student in the 5th semester of the D4 Informatics Management program at Universitas Negeri Surabaya. Currently participating in an Independent Study program with Infinite Learning, I possess a strong passion for drawing alongside a keen interest in UI/UX Design. Dedicated to continuous skill development in technology and design.
                </p>
                <div className='space-y-4'>
                    <div className='flex items-center'>
                        <label tahapanFor='tahapandesign' className='w-2/12'>Low-Fidelity</label>
                        <div className='grow bg-gray-400 rounded-full h-2.5'>
                            <div className='bg-gradient-to-r from-purple-800 to-pink-400 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-9/12'>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <label tahapanFor='tahapandesign' className='w-2/12'>High-Fidelity</label>
                        <div className='grow bg-gray-400 rounded-full h-2.5'>
                            <div className='bg-gradient-to-r from-purple-800 to-pink-400 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12'>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <label tahapanFor='tahapandesign' className='w-2/12'>Prototypes</label>
                        <div className='grow bg-gray-400 rounded-full h-2.5'>
                            <div className='bg-gradient-to-r from-purple-800 to-pink-400 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-8/12'>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-12 flex justify-between text-center'>
                    <div>
                        <h3 className='text-2xl font-bold text-transparent bg-clip-text bg bg-gradient-to-r from-purple-800 to-pink-400'>
                           2+ 
                        </h3>
                        <p>Years Experience</p>
                    </div>
                    <div>
                        <h3 className='text-2xl font-bold text-transparent bg-clip-text bg bg-gradient-to-r from-purple-800 to-pink-400'>
                           15+ 
                        </h3>
                        <p>Projects Completed</p>
                    </div>
                    <div>
                        <h3 className='text-2xl font-bold text-transparent bg-clip-text bg bg-gradient-to-r from-purple-800 to-pink-400'>
                           7+ 
                        </h3>
                        <p>Case Study</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
}

export default About;