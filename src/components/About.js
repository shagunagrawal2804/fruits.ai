import React from 'react';
import { Link } from 'react-router-dom';
import vector from "../assets/Vector.png";

const About = () => {
    return (
        <div className="bg-gradient-to-r from-teal-100 via-blue-100 to-purple-100 min-h-screen flex items-center justify-center p-6">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center max-w-lg w-full">
                <div className="mb-6">
                    <img
                        src={vector}
                        alt="Blurry logo of Fruit.AI"
                        className="mx-auto w-24 h-24 object-cover rounded-full border-4 border-teal-300"
                    />
                </div>
                <h1 className="text-3xl font-extrabold mb-4 text-gray-800">Welcome to Fruit.AI</h1>
                <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                    Discover a world of fruits with Fruit.AI! Our AI-driven chatbot helps you explore a variety of fruits, understand their nutritional benefits, and find the perfect fruit for your needs. Let us guide you towards a healthier lifestyle with personalized recommendations tailored just for you.
                </p>
                <Link to="/home">
                    <button className="bg-gradient-to-r from-teal-400 to-blue-500 text-white py-3 px-6 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                        Go to Home
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default About;
