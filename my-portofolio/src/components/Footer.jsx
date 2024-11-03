import React from 'react';
import 'font-awesome/css/font-awesome.min.css'; 

const Footer = () => {
    return (
        <footer className='bg-black text-white py-8'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <div className='flex flex-col md:flex-row md:space-x-12 items-center mb-4'>
                    <div className='flex-1 mb-4 md:mb-9'>
                        <h3 className='text-2xl font-bold mb-2'>Follow Me on Social Media</h3>
                        <p className='text-gray-400'>Happy to make new friends! Looking forward to connecting and sharing our journeys.</p>
                    </div>
                    <div className='flex-1 w-full'>
                        <form className='flex items-center justify-center'>
                            <input 
                                type='email' 
                                placeholder='Enter Your Instagram' 
                                className='w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600 focus:outline-none focus:border-purple-800' 
                            />
                            <button 
                                type='submit' 
                                className='bg-gradient-to-r from-purple-800 to-pink-400 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-r-lg'
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
                {/* Ikon Media Sosial */}
                <div className='flex justify-center space-x-4 mt-4'>
                    <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-instagram text-xl hover:text-purple-400"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-linkedin text-xl hover:text-blue-600"></i>
                    </a>
                    <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-github text-xl hover:text-gray-400"></i>
                    </a>
                </div>
                <div className='text-center text-gray-400 mt-8'>
                    © 2024 All Rights Reserved
                </div>
            </div>
        </footer>
    );
}

export default Footer;
