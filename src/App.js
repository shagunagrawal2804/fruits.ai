import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Chatbot from './components/Chatbot';


import About from './components/About';
import FruitList from './components/FruitList';
import FruitDetail from './components/FruitDetail';
import { DarkModeProvider } from './context/DarkModeContext';

function App() {
  return (
    <DarkModeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/chat" element={<Chatbot />} />
          <Route path="/fruits" element={<FruitList />} />
          
         
          <Route path="/about" element={<About />} />
          <Route path="/fruits/:id" element={<FruitDetail />} />
        </Routes>
      </Router>
    </DarkModeProvider>
  );
}

export default App;
