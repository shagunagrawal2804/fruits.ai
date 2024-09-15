import React from 'react';
import { Link } from 'react-router-dom';
import { FaLanguage } from 'react-icons/fa';

const Home = () => {
    return (
        <div
            className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-teal-300 to-blue-300"
            style={{ fontFamily: 'Roboto, sans-serif' }}
        >
            <div className="text-center mb-12 px-6">
                <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-red-500">
                    Fruit.AI
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 mt-4 italic tracking-wide">
                    "Be Healthy!"
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">
                <Link
                    to="/chat"
                    className="flex items-center justify-center bg-white text-purple-600 py-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-300"
                    style={{ width: '150px', height: '150px', fontSize: '18px' }}
                >
                    <span className="font-bold text-xl text-purple-600">
                        Chat
                    </span>
                </Link>
                <Link
                    to="/translator"
                    className="flex items-center justify-center bg-white text-blue-600 py-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    style={{ width: '150px', height: '150px', fontSize: '18px' }}
                >
                    <FaLanguage size={40} className="text-blue-600" />
                </Link>
                <Link
                    to="/faq"
                    className="flex items-center justify-center bg-white text-yellow-600 py-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                    style={{ width: '150px', height: '150px', fontSize: '18px' }}
                >
                    <span className="font-bold text-xl text-yellow-600">
                        FAQ
                    </span>
                </Link>
                <Link
                    to="/about"
                    className="flex items-center justify-center bg-white text-pink-600 py-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-300"
                    style={{ width: '150px', height: '150px', fontSize: '18px' }}
                >
                    <span className="font-bold text-xl text-pink-600">
                        About
                    </span>
                </Link>
            </div>
        </div>
    );
};

export default Home;
