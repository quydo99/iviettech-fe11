import React from 'react';
import './styles.css';

function Header() {
  return (
    <div className="header">
      <p className="start">Brand name</p>
      <div className="wrap">
        <p className="center">Trang chủ</p>
        <p className="center">Giới thiệu</p>
      </div>
      <p className="end">Quý Đô</p>
    </div>

  );
}

export default Header;
