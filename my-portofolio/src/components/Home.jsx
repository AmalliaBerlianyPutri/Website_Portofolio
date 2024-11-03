import React from "react";
import HomeImages from "../assets/home-image.png";

const Home = () => {
    const whatsappNumber = "+6285755506135"; // Nomor WhatsApp
    const cvLink = "https://drive.google.com/file/d/1zO81LZW6EnlzUESHbgpjwklNvMUDi9ri/view?usp=drive_link"; // Link untuk membuka CV

    return (
        <div className="bg-black text-white text-center py-16">
            <img
                src={HomeImages}
                alt=""
                className="mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105"
            />
            <h1 className="text-4xl font-bold">
                I'm {""}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-pink-400">
                    Amallia Berliany Putri
                </span>
                , Design UI/UX
            </h1>
            <p className="mt-4 text-lg text-gray-300 px-4 md:px-32">
                Creating designs that connect and inspire.
            </p>
            <div className="mt-8 space-x-4">
                {/* Button untuk menghubungi melalui WhatsApp */}
                <a
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button className="bg-gradient-to-r from-purple-800 to-pink-400 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
                        Contact With Me
                    </button>
                </a>
                
                {/* Button untuk membuka CV */}
                <a href={cvLink} target="_blank" rel="noopener noreferrer">
                    <button className="bg-gradient-to-r from-blue-800 to-blue-400 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
                        Curriculum Vitae
                    </button>
                </a>
            </div>
        </div>
    );
};

export default Home;
