import Card from 'componets/Card';
import CardCenfomon from 'componets/CardCenfomon';
import React, { div, Fragment, useRef } from 'react';
import classes from './OfficeFonseca.module.css';
import officeGirl from '../../assets/img/location/locationOffice.png';
import { useHistory, useParams } from 'react-router-dom';
import Tabs from 'componets/UI/Tabs/Tabs';
import { useEffect } from '../../../node_modules/react/index';
import OfficeList from 'componets/Office/OfficeList/OfficeList';

const OfficeFonseca = (props) => {
    const { officeWrapp, imgWrapp } = classes;
    const history = useHistory();
    const param = useParams();

    const buysItem = ({ target }) => {
        alert('Someone is buying');
    };

    const closeStore = () => {
        history.push('/');
    }

    return (
        <div className={`${officeWrapp}`}>
            <Card imgSrc={officeGirl} onBuy={buysItem} onExit={closeStore}
                withActns={true}>
                <p>Bienvenido al planeta Cronos, Cadete.<br></br>
                    Mi nombre es la profesora Fonseca.<br></br>
                    Primero lo primero. ¿Cuál de estos tres Cenfomones te gustaria obtener?</p>
            </Card>
            <Card withActns={false}>
                    <OfficeList items={[1, 2, 3]} />
            </Card>
        </div>
    );
}

export default OfficeFonseca;