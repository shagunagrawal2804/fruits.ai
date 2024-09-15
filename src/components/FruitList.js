import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import { useDarkMode } from '../context/DarkModeContext';
import Tangerine from '../assets/z9vkyDW9brw.png';
import Orange from '../assets/nibgG33H0F8.png';
import Cucumber from '../assets/Za9HGBK5ALA.png';

const fruits = [
  { id: 1, name: 'Orange', price: 8.00, img: Orange, description: 'Oranges are rich in Vitamin C, fiber, and antioxidants that boost your immune system and aid in digestion.' },
  { id: 2, name: 'Cucumber', price: 11.76, img: Cucumber, description: 'Cucumbers are hydrating and low in calories. They provide antioxidants and essential nutrients that help maintain skin health and reduce inflammation.' },
  { id: 3, name: 'Tangerine', price: 6.40, img: Tangerine, description: 'Tangerines are a good source of Vitamin C and fiber. They support immune health, aid in digestion, and provide a refreshing flavor.' },
];

const FruitList = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (id, delta) => {
    setQuantities(prevQuantities => {
      const currentQuantity = prevQuantities[id] || 1;
      const newQuantity = Math.max(1, currentQuantity + delta);
      return {
        ...prevQuantities,
        [id]: newQuantity
      };
    });
  };

  return (
    <div
      className={`flex flex-col min-h-screen ${
        isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
      }`}
    >
      <div className="p-4 flex justify-between items-center bg-gradient-to-r ${
        isDarkMode ? 'from-gray-800 to-gray-900' : 'from-gray-200 to-gray-300'
      }">
        <h1 className={`text-4xl font-extrabold ${
          isDarkMode ? 'text-yellow-400' : 'text-blue-600'
        }`}>
          Fruits List
        </h1>
        <button
          onClick={toggleDarkMode}
          className={`px-4 py-2 rounded-lg ${
            isDarkMode ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-gray-800'
          } border-2 border-gray-600 hover:bg-opacity-80 transition-colors duration-300`}
        >
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
      <div className="flex-1 p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {fruits.map((fruit) => (
          <div
            key={fruit.id}
            className={`flex flex-col items-center p-6 rounded-lg shadow-lg transition-transform duration-300 ${
              isDarkMode ? 'bg-gray-800 text-white border-gray-600' : 'bg-white text-gray-900 border-yellow-400'
            } border-2 ${
              isDarkMode ? 'border-gray-600' : 'border-yellow-400'
            } transform hover:scale-105`}
          >
            <img
              src={fruit.img}
              alt={fruit.name}
              className="w-32 h-32 object-cover rounded-full mb-4 border-4 transition-transform duration-300 transform hover:scale-110"
            />
            <div className="text-center">
              <Link to={`/fruits/${fruit.id}`}>
                <h3 className={`text-2xl font-bold mb-2 cursor-pointer ${
                  isDarkMode ? 'text-yellow-400' : 'text-green-800'
                } hover:underline`}>
                  {fruit.name}
                </h3>
              </Link>
              <p className={`text-lg font-semibold mb-2 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                ${((quantities[fruit.id] || 1) * fruit.price).toFixed(2)}
              </p>
              <p className={`text-base ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {fruit.description}
              </p>
            </div>
            <div className="flex mt-4 space-x-3">
              <button
                onClick={() => handleQuantityChange(fruit.id, -1)}
                className={`w-10 h-10 flex items-center justify-center rounded-full ${
                  isDarkMode ? 'bg-red-600 text-white' : 'bg-red-400 text-white'
                } hover:bg-red-700 transition-colors duration-300`}
              >
                -
              </button>
              <span className="text-xl font-bold">{quantities[fruit.id] || 1}</span>
              <button
                onClick={() => handleQuantityChange(fruit.id, 1)}
                className={`w-10 h-10 flex items-center justify-center rounded-full ${
                  isDarkMode ? 'bg-green-600 text-white' : 'bg-green-400 text-white'
                } hover:bg-green-700 transition-colors duration-300`}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FruitList;
