import React from 'react'
import donateImage from '../assets/donateImage.png'
import growfarmsImage from '../assets/growfarmsImage.png'
import unggaskuImage from '../assets/unggaskuImage.png'

const project = [
    {
        id: 1,
        name: "Donate for Smile",
        technologies: "Mobile App",
        image: donateImage,
        figma: "https://www.figma.com/design/4TyZJAVQVRQA9J4ME3aBEA/Apk-Donasi?node-id=36-2&node-type=canvas&t=nD5fN5uGdSWyYzr1-0",
    },
    {
        id: 2,
        name: "GrowFarms",
        technologies: "Website App",
        image: growfarmsImage,
        figma: "https://www.figma.com/design/g7OlRUj4N8tZ3kxilHhviW/Figma-Design?node-id=0-1&node-type=canvas&t=rEpr02eDwUhonSpm-0",
    },
    {
        id: 3,
        name: "Unggasku.id",
        technologies: "Website App",
        image: unggaskuImage,
        figma: "https://www.figma.com/design/dlGAA2Bmc0eb8Nz7uA2tQ9/Design?node-id=0-1&node-type=canvas&t=09cV3bXakl5pqw8d-0",
    },
      
];

const Project = () => {
    return (
        <div className='bg-black text-white py-20' id='about'>
          <div className='container mx-auto px-8 md:px-16 lg:px-24'>
          <h2 className='text-4xl font-bold text-center mb-12'>My Projects</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {project.map(project => (
                <div key={project.id} className='bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105'>
                    <img src={project.image} alt={project.name} className='rounded-lg mb-4 w-full h-48 object-cover' />
                    <h3 className='text-2xl font-bold mb-2'>{project.name}</h3>
                    <p className='text-gray-400 mb-4'>{project.technologies}</p>
                    <a href={project.figma} className='inline-block bg-gradient-to-r
                    from-purple-800 to-pink-400 text-white px-4 py-2 rounded-full' target='_blank'
                    rel='noopener noreferrer'>Figma</a>
                </div>
            ))}
          </div>
          </div>
        </div>

    );
}

export default Project;