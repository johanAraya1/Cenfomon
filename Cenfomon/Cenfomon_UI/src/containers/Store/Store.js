import Card from 'componets/Card';
import CardItem from 'componets/CardItem';
import React, { div, Fragment, useRef } from 'react';
import classes from './Store.module.css';
import storeGuy from '../../assets/img/location/locationStore.png';
import { useHistory, useParams } from 'react-router-dom';
import Tabs from 'componets/UI/Tabs/Tabs';
import { useEffect, useState } from '../../../node_modules/react/index';
import Crystal from 'componets/Store/StoreList/StoreList';
import StoreList from 'componets/Store/StoreList/StoreList';
import { Gestor } from 'dist/factoryMethodItems/GestorFactoryMethod';

const Store = (props) => {
    const { storeWrapp, imgWrapp } = classes;
    const history = useHistory();
    const param = useParams();

    const gstItems = new Gestor();
    const [sListState, setSListState] = useState({
        rocks: [
            gstItems.newItem(0, null, 'Fire Rock', '', 0, 0),
            gstItems.newItem(0, null, "Dark Rock", '', 0, 0)
        ],
        crystal: [
            gstItems.newItem(0, null, 'Crystal Beta', '', 0, 0),
            gstItems.newItem(1, null, 'Crystal Alfa', '', 0, 0),
        ],
        potions: [
            gstItems.newItem(0, null, 'Potion', '', 0, 0),
            gstItems.newItem(1, null, 'Med Potion', '', 0, 0),
            gstItems.newItem(2, null, 'Max Potion', '', 0, 0),
        ]
    });

    // useEffect(() => {
    // }, [sListState]);
    
    
    const getStoreItems = (opStore = 'e') => {
        switch (opStore.toUpperCase()) {
            case 'R':
                return <StoreList items={sListState.rocks} />
            case 'P':
                return <StoreList items={sListState.potions} />
            case 'C':
            default:
                return <StoreList items={sListState.crystal} />
        }
    }

    const tabs = [
        { name: "Cristales", link: `/crystals`, component: () => getStoreItems() },
        { name: "Pociones", link: `/potions`, component: () => getStoreItems('p') },
        { name: "Rocas", link: `/rocas`, component: () => getStoreItems('r') }
    ];

    const buysItem = ({ target }) => {
        alert('Someone is buying');
    };

    const closeStore = () => {
        history.push('/');
    }

    useEffect(() => {
        history.push('/store/crystals');
        console.log('store loaded');
    }, []);

    return (
        <div className={`${storeWrapp}`}>
            <Card imgSrc={storeGuy} onBuy={buysItem} onExit={closeStore}
                withActns={true}>
                <p>Bienvenido a la Cenfo Tienda.<br></br>
                    ¿Cuál de nuestros servicios
                    te gustaria obtener?</p>
            </Card>
            <Card withActns={false}>
                <Tabs baseUrl={"/store"} opts={tabs} />
                {/* <CardItem /> */}
            </Card>
        </div>
    );
}

export default Store;