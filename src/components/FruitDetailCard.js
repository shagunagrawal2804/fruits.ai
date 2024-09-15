import React from 'react';
import { useDarkMode } from '../context/DarkModeContext';

const FruitDetailCard = ({ fruit }) => {
  const { isDarkMode } = useDarkMode();

  return (
    <div
      className={`flex flex-col items-center p-6 rounded-lg shadow-lg transition-transform duration-300 ease-in-out ${
        isDarkMode ? 'bg-gray-800 text-white border-gray-700' : 'bg-white text-gray-900 border-yellow-500'
      } border-4 ${
        isDarkMode ? 'border-gray-700' : 'border-yellow-500'
      } transform hover:scale-105`}
    >
      <img
        src={fruit.img}
        alt={fruit.name}
        className={`w-48 h-48 object-cover rounded-full mb-4 transition-transform duration-300 ease-in-out ${
          isDarkMode ? 'border-gray-600' : 'border-yellow-400'
        } border-4 transform hover:scale-110`}
      />
      <h1 className={`text-4xl font-bold mb-2 ${
        isDarkMode ? 'text-red-300' : 'text-yellow-600'
      }`}>
        {fruit.name}
      </h1>
      <p className={`text-2xl font-semibold mb-4 ${
        isDarkMode ? 'text-gray-300' : 'text-gray-800'
      }`}>
        ${fruit.price.toFixed(2)}
      </p>
      <p className={`text-lg ${
        isDarkMode ? 'text-gray-400' : 'text-gray-700'
      }`}>
        {fruit.description}
      </p>
    </div>
  );
};

export default FruitDetailCard;
