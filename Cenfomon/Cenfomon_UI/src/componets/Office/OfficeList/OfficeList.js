import CardCenfomon from 'componets/CardCenfomon';
import React, { div, Fragment, useRef } from 'react';
import CenfoScene from 'scenes/CenfoScene';
import classes from './OfficeList.module.css';

const OfficeList = (props) => {

    const { items, ...allProps } = props;
    const { officeListWrapp, cardFirst, ...allClasses } = classes;

    const rows = [];

    

    return (
        <div className={`${officeListWrapp}`}>
            {items.map((item, i) => {
                if (!((i + 1) % 3 === 0) || !((i + 1) % 2 === 0)) return <CardCenfomon className={`${cardFirst}`} />
                return <CardCenfomon className="" />;
            })}
        </div>
    );
}

export default OfficeList;