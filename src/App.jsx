import "./App.css"
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import Layout from './components/Layout';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<HomePage />} /> 
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;