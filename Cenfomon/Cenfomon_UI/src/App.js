import kaboom from '@kaboom';
import { loadInputs } from 'controls/Input';
import React from 'react';
import { initCastleScene } from 'scenes/castle';
import { useEffect, useState } from '../node_modules/react/index';
import './App.css';
import { map_2, map_3 } from './maps/map';
import City from 'scenes/city';
import DialogueBox from './componets/UI/DialogueBox/DialogueBox';
import { getCurrentURL } from './utils/utils';
import Game from 'containers/Game/Game';
import Card from 'componets/Card';
import CardCenfomon from 'componets/CardCenfomon';
import CardItem from 'componets/CardItem';
import Fight from 'componets/Fight';
import Layout from 'containers/Layout/Layout';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Store from 'containers/Store/Store';
import OfficeFonseca from 'containers/OfficeFonseca/OfficeFonseca';

function App() {

    const lvlConfig = {
        width: 25,
        height: 30
    };
    const MOVE_SPEED = 300; // normal: 100
    const GAME_WIDTH = 1500;
    const GAME_HEIGHT = 942;



    const [dgList, setDgList] = useState([]);

    useEffect(() => {
        // setTimeout(() => {
        //     setDgList([
        //         {
        //             id: 0,
        //             from: {
        //                 name: '',
        //                 picture: '',
        //             },
        //             to: {
        //                 name: '',
        //                 picture: '',
        //             },
        //             reply: null
        //         },
        //         {
        //             id: 0,
        //             from: '',
        //             to: '',
        //             reply: null
        //         },
        //     ]);
        // }, 300);
    }, [dgList]);

    // kCtx.wait(2, () => makeRandomCenfomon());
    const makeRandomCenfomon = (zone) => {
        // console.log(crrLevel);
        // const cfWildPostZones = kCtx.get('wild_cenfo');
        // const randomPos = Math.floor(Math.random() * cfWildPostZones.length) + 1;
        // const selectedZone = cfWildPostZones[randomPos - 1];
        // console.log(cfWildPostZones, randomPos);
        // console.log(selectedZone);
        // kCtx.destroy(selectedZone);
        // crrLevel.spawn('=', selectedZone.gridPos.sub(0, 0));
        // crrLevel.spawn(kCtx);
    }


    return (
        <BrowserRouter>
            <Layout>
                <div className="App">
                    <div className="game" style={{
                        position: 'relative',
                        margin: 'auto',
                        width: `${GAME_WIDTH * 0.85}px`,
                        height: `${GAME_HEIGHT * 0.85}px`,
                        border: '2px solid blue',
                    }}>
                        <Switch>
                            <Route path="/store" component={Store} />
                            <Route path="/office" component={OfficeFonseca} />
                        </Switch>
                        {/* <div className="GameUI" style={{
                    position: 'absolute',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    border: "3px solid red",
                    width: "100%",
                    height: "40%",
                }}> */}
                        {/* <DialogueBox imgLeft={`${getCurrentURL}assets/img/characters/stores/face.png`}
                    imgRight={`${getCurrentURL}assets/img/characters/stores/face.png`}
                    message={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
                /> */}
                        {/* </div> */}
                        <Game default_scene={'game'} GAME_WIDTH={1500} GAME_HEIGH={942} />
                    </div>
                </div>
            </Layout>
        </BrowserRouter>
    );
}

export default App;