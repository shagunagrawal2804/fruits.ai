// src/pages/Chatbot.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useDarkMode } from '../context/DarkModeContext';
import logo from '../assets/Logo.png';

const Chatbot = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div
      className={`flex items-center justify-center h-screen transition-colors duration-300 ease-in-out ${
        isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-800'
      }`}
    >
      <div className="text-center px-4 md:px-8">
        <div className="flex flex-col items-center mb-8">
          <Link to="/fruits">
            <img
              src={logo}
              alt="Chatbot Logo"
              className={`w-32 h-32 mb-6 cursor-pointer rounded-full ${
                isDarkMode ? 'filter brightness-90' : 'filter brightness-100'
              } transition-transform transform hover:scale-105`}
            />
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            Chatbot
          </h1>
          <h2 className="text-lg md:text-xl font-medium text-purple-500">
            Click the image to view Fruits List.
          </h2>
        </div>
        <button
          onClick={toggleDarkMode}
          className={`px-6 py-3 rounded-md font-semibold transition-colors duration-300 ease-in-out ${
            isDarkMode ? 'bg-gray-800 text-gray-100 hover:bg-gray-700' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
          }`}
        >
          {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
