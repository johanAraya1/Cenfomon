import React from 'react';
import CardItemCSS from "./CardItem.module.css";

const CardItem = () => {
    return ( 
    <div className={CardItemCSS.card}>
        <h1>Prueba</h1>
        <button className={CardItemCSS.btn}>
            300
        </button>
    </div>
        )
  }
  export default CardItem;