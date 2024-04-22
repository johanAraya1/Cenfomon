import CardItem from 'componets/CardItem';
import React, { div, Fragment, useRef } from 'react';
import classes from './StoreList.module.css';

const StoreList = (props) => {

    const { items, ...allProps } = props;
    const { storeListWrapp, cardFirst, ...allClasses } = classes;

    const rows = [];

    return (
        <div className={`${storeListWrapp}`}>
            {items.map((item, i) => {
                if (!((i + 1) % 3 === 0) || !((i + 1) % 2 === 0)) return <CardItem className={`${cardFirst}`} key={item._id} />
                return <CardItem className="" key={item._id} />;
            })}
        </div>
    );
}

export default StoreList;