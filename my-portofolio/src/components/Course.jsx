import React from 'react'; 

const course = [
    {
        id: 1,
        title: "User Research and Analysis",
        description: "Identifying user needs and preferences to ensure the design is relevant and effective.",
        link: "https://medium.com/insightdesign/tentang-user-research-194974934e55", // Ganti dengan URL materi yang sesuai
    },
    {
        id: 2,
        title: "Wireframing and Prototyping",
        description: "Creating initial wireframes and prototypes to test the basic structure and user flow.",
        link: "https://medium.com/@marianababan/wireframe-vs-prototype-whats-the-difference-dd856c2da1a0", // Ganti dengan URL materi yang sesuai
    },
    {
        id: 3,
        title: "UX Design (User Experience Design)",
        description: "Optimizing the user experience by designing intuitive and responsive flows that meet user needs.",
        link: "https://medium.com/ux-afdan/ux-design-methodology-b94c6306f5e5", // Ganti dengan URL materi yang sesuai
    },
    {
        id: 4,
        title: "UI Design (User Interface Design)",
        description: "Crafting the visual appearance of the interface to be aesthetic, consistent, and functional.",
        link: "https://medium.com/@myskill.id/ui-design-introduction-36565fd8fddf", // Ganti dengan URL materi yang sesuai
    },
    {
        id: 5,
        title: "Interaction Design (IxD)",
        description: "Adding interactive elements, such as animations, to enhance the user experience.",
        link: "https://medium.com/halodesigners/belajar-interaction-design-ixd-cara-membuat-ui-prototype-era-digital-38ef878c876e", // Ganti dengan URL materi yang sesuai
    },
    {
        id: 6,
        title: "Usability Testing and Feedback Analysis",
        description: "Testing and analyzing user feedback to refine the design based on real data.",
        link: "https://medium.com/@ezrappr/usability-testing-dan-mendapatkan-feedback-pengguna-dalam-pengembangan-aplikasi-f0316cb5322b", // Ganti dengan URL materi yang sesuai
    },
];

const Course = () => {
    return (
        <div className='bg-black text-white py-20' id='about'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h2 className='text-4xl font-bold text-center mb-12'>My Courses</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {course.map(course => (
                        <div key={course.id} className='bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105'>
                            <div className='text-right text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-pink-400'>
                                {course.id}
                            </div>
                            <h3 className='mt-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-pink-400'>
                                {course.title}
                            </h3>
                            <p className='mt-2 text-gray-300'>{course.description}</p>
                            <a 
                                href={course.link} 
                                className='mt-4 inline-block text-purple-800 hover:text-pink-400' 
                                target='_blank' 
                                rel='noopener noreferrer'
                            >
                                Read More
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Course;
