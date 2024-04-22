import React from 'react';
import FightCSS from "./Fight.module.css";

const Fight = () => {
    return ( 
    <header className={FightCSS.card}>
        
        <div className={FightCSS.container}>
            <h1>NoEsUnCharmander</h1>
            <p className={FightCSS.statTextPlayer}>Lvl 05</p>
        </div>
        <div className={FightCSS.lifeBarPlayer}></div>
        <p className={FightCSS.statTextPlayer}>15/22</p>    

        <div className={FightCSS.container}>
         <h1>NoEsUnCharmander2</h1>
         <p className={FightCSS.statTextEnemy}>Lvl 09</p>
     </div>
     <div className={FightCSS.lifeBarEnemy}></div>
     <p className={FightCSS.statTextEnemy}>15/22</p>

     <div className={FightCSS.containerMenu}>
        <div className={FightCSS.cardMenu}>
        <button className={FightCSS.btn}>Atacar</button>
         <button className={FightCSS.btn}>Usar Item</button>
         <button className={FightCSS.btn}>Huir</button>
         <button className={FightCSS.btn}>Cambiar</button>
         <button className={FightCSS.btn}>Capturar</button>
        </div>
         
         </div>      
    </header>
     
        )
  }
  export default Fight;   