import React from 'react';
import './styles.css';

function Slidebar() {
    return (
      <div className="slide">
       Slidebar
       <div className="col">
         <div className="type_color">Trang chủ</div>
         <div className="type_color">Danh sách admin</div>
         <div className="type_color">Danh sách user</div>
         <div className="type_color">Cài đặt</div>
       </div>
      </div>
    );
  }
  
  export default Slidebar;
  