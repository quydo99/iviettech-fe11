import React from 'react';
import './styles.css';

function Item(props) {
    const{color, name} = props;
    const itemColor = {
        height : 200,
        width : 170,
        backgroundColor: color, 
    }

    // let itemClass ='';
    // if(active){
    //     itemClass = 'item item-active';
    // }else{
    //     itemClass = 'item';
    // }
   return(
       <div className="col-md-3">
           <div className="">
               <div style ={itemColor}/>
               <div>{name}</div>
           </div>
       </div>
   );
}
  
  export default Item;
  