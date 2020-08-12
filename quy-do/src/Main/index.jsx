import React from 'react';
import Slidebar from './Slidebar/index';
import List from './List/index';
import './styles.css';

function Main() {
  const dataList = [
    {
      color :'#1FDE2A',
      name : 'Lê Bá Thanh Tuấn',
    },
    {
      color :'#DECE1F',
      name :'Nguyễn Văn A',
    },
    {
      color : '#1F75DE',
      name :'Trần Văn B',
    },
    {
      color :'#DE1FD3',
      name :'Lê Thị C',
    }
  ]
    return (
      <div className="main">
       <Slidebar/>
       <List dataList={dataList}/>
      </div>
    );
  }
  
  export default Main;
  