import React from 'react';
import CardCenfomonCSS from "./CardCenfomon.module.css";
import Corderion from "../assets/img/cenfomones/Corderion.png";

const CardCenfomon = () => {
    return ( 
    <div className={CardCenfomonCSS.card}>
        <div className={CardCenfomonCSS.contenedorTexto}>
        <h1>NoEsUnCharmander</h1>
        <p>Lvl 01</p>
        <p className={CardCenfomonCSS.typeCenfomon}>Fuego</p>
        <div className={CardCenfomonCSS.lifeBar}></div>
        </div>
        
        <div className={CardCenfomonCSS.contenedorPadre}>
        <div className={CardCenfomonCSS.contenedorImg}> 
            <img src={Corderion} />
        </div>
        </div>
    
        
        
    </div>
        )
  }
  export default CardCenfomon;