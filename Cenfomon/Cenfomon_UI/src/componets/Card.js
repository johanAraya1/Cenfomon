import React from 'react';
import CardCSS from "./Card.module.css";

const Card = (props) => {

    const { imgSrc, onBuy, onExit, withActns, ...allProps } = props;
    const { imgWrapp, cardActns, ...clss } = CardCSS;

    return (
        <div className={clss.card}>
            {imgSrc &&
                <div className={imgWrapp}>
                    <img alt="UI main showing on mai display" src={imgSrc} />
                </div>
            }
            {props.children}

            {withActns &&
                <div className={cardActns}>
                    <button className={clss.btn} onClick={onBuy}>
                        Comprar
                    </button>
                    <button className={clss.btn} onClick={onExit}>
                        Salir
                    </button>
                </div>
            }
        </div>
    )
}
export default Card;