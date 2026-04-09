import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/" className="link-item">Trang Chủ</Link></li>
          <li><Link to="/about" className="link-item">Giới Thiệu</Link></li>
          <li><Link to="/contact" className="link-item">Liên Hệ</Link></li>

        </ul>
      </nav>

      <main>
        <Outlet />
      </main>

      <footer>
        <p>Nguyễn Thảo Uyên</p>
      </footer>
    </div>
  );
};

export default Layout;