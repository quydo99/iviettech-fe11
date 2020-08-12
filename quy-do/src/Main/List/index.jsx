import React from 'react';
import Item from './Item';
import './styles.css';

function List(props) {
  const dataList = props.dataList;
  console.log("list -> dataList",dataList)
    return (
      <div className="list-container">
          <h2>List user</h2>
          <div className="row">
          <Item color = {dataList[0].color} name={dataList[0].name}/>
          <Item color = {dataList[1].color} name={dataList[1].name}/>
          <Item color = {dataList[2].color} name={dataList[2].name}/>
          <Item color = {dataList[3].color} name={dataList[3].name}/>
          </div> 
      </div>
    );
  }
  
  export default List;
  