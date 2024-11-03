import React from 'react';
import { Link } from 'react-router-dom'; // Import Link dari react-router-dom

const Navbar = () => {
    return (
        <nav className='bg-black text-white px-8 md:px-16 lg:px-24'>
            <div className='container py-2 flex justify-center md:justify-between place-items-center'>
                <div className='text-2xl font-bold hidden md:inline'>Explore My Portofolio</div>
                <div className="space-x-6">
                    <Link to="/" className='hover:text-gray-400'>Home</Link>
                    <Link to="/about" className='hover:text-gray-400'>About</Link>
                    <Link to="/course" className='hover:text-gray-400'>Courses</Link>
                    <Link to="/project" className='hover:text-gray-400'>Projects</Link>
                    <Link to="/contact" className='hover:text-gray-400'>Contact</Link>
                </div>
                <button onClick={() => window.open('https://www.linkedin.com/in/amalliaputri07/', '_blank')} className='bg-gradient-to-r from-purple-800 to-pink-400 text-white hidden md:inline
                transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Connect Me</button>
            </div>
        </nav>
    );
}

export default Navbar;
