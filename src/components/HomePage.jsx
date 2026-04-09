import React from 'react';
import { Link } from 'react-router-dom'; 

const HomePage = () => {
  return (      
      <div className="menu-buttons">
        <Link to="/about" className="nav-button">Về chúng tôi</Link>
        <Link to="/contact" className="nav-button">Liên hệ</Link>
      </div>
  );
};

export default HomePage;
