import kaboom from '@kaboom';
import { loadInputs } from "controls/Input";
import { map_2, map_3 } from 'maps/map';
import { useHistory, useLocation } from 'react-router-dom';
import { initCastleScene } from "scenes/castle";
import City from "scenes/city";
import AssetsLoader from "utils/AssetsLoader";
import { useEffect } from "../../../node_modules/react/index";
import { assetsConfig } from "../../scenes/city_assets_config";


const Game = (props) => {

    const { default_scene, GAME_WIDTH, GAME_HEIGH } = props;
    let kCtx;
    let assetsLoader;
    let crrLevel;

    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        kCtx = kaboom({
            fullscreen: false,
            debug: true,
            width: GAME_WIDTH,
            height: GAME_HEIGH,
            scale: 0.85,
            clearColor: [0, 0, 0, 1],
            canvas: document.querySelector('#gameCanvas'),
            global: true
        });
        assetsLoader = AssetsLoader(kCtx, assetsConfig);
        assetsLoader.loadAssets();
        loadScenes();
        kCtx.start(default_scene);
    }, []);

    const history = useHistory();

    const loadScenes = () => {
        // const kCtx = kaboom();
        const city = new City('game', kCtx, setLevel)
            .buildScence();
        city.addPlayerEvents('tiny-wall', () => {
            history.push('/store');
        });

        city.addPlayerEvents('wild_cenfo', () => {
            history.push('/office');
        });

        // new LakeScene('lake', kCtx, setLevel)
        //     .buildScence(); 
        // new WoodScene('wood', kCtx, setLevel)
        //     .buildScence(); 

        initCastleScene(kCtx, setLevel);
        kCtx.scene('game_3', () => {
            kCtx.layers(['bg', 'obj', 'ui'], 'obj');
            crrLevel = kCtx.addLevel(map_3, {
                width: 41,
                height: 36,
                pos: kCtx.vec2(340, 0),
                '=': [kCtx.sprite('buildingBoundarie'), kCtx.solid(), kCtx.scale(0.2), 'wall'],
                '-': [kCtx.sprite('buildingBoundarie'), 'tiny-wall'],
                '?': [kCtx.sprite('cenfo_sp_zone'), kCtx.solid(), kCtx.scale(0.2), 'wild_cenfo'],
                '|': [kCtx.sprite('cenfo_sp_zone'), kCtx.scale(0.2), 'door'],
            });
            // LAYER OBJECTS
            kCtx.add([
                kCtx.layer('bg'),
                kCtx.sprite('map_3'),
                kCtx.pos(300, 0),
                kCtx.scale(0.45)
            ]);
            const player = kCtx.add([
                kCtx.sprite('mc_mov_down_1', {
                    animSpeed: 0.2,
                    frame: 0
                }),
                kCtx.pos(400, 550),
                kCtx.scale(0.25),
                kCtx.solid()
            ]);
            loadInputs(kCtx, player);
            player.overlaps('door', (d) => {
                const { gridPos } = d;
                if (gridPos.x > 15) {
                    kCtx.go('game_4')
                }
                if (gridPos.x === 0) {
                    console.log(gridPos)
                    kCtx.go('game_2')
                }
            });
            player.action(() => {
                player.resolve();
            });
        });
        kCtx.scene('game_2', () => {
            kCtx.layers(['bg', 'obj', 'ui'], 'obj');
            crrLevel = kCtx.addLevel(map_2, {
                width: 41,
                height: 36,
                pos: kCtx.vec2(300, 20),
                '=': [kCtx.sprite('buildingBoundarie'), kCtx.solid(), kCtx.scale(0.2), 'wall'],
                '-': [kCtx.sprite('buildingBoundarie'), 'tiny-wall'],
                '?': [kCtx.sprite('cenfo_sp_zone'), kCtx.solid(), kCtx.scale(0.2), 'wild_cenfo'],
                '|': [kCtx.sprite('buildingBoundarie'), kCtx.scale(0.2), 'door'],
            });
            // LAYER OBJECTS
            kCtx.add([
                kCtx.layer('bg'),
                kCtx.sprite('map_2'),
                kCtx.pos(300, 20),
                kCtx.scale(0.45)
                // kCtx.origin('center'),
            ]);
            const player = kCtx.add([
                kCtx.sprite('mc_mov_down_1', {
                    animSpeed: 0.2,
                    frame: 0
                }),
                kCtx.pos(741, 70),
                kCtx.scale(0.30),
                kCtx.solid()
            ]);
            player.overlaps('door', (d) => {
                const { gridPos } = d
                console.log(d, gridPos);
                if (gridPos.y > 18) {
                    kCtx.go('game_3')
                }
                // goes back to map_1
                if (gridPos.y < 3) {
                    kCtx.go('game')
                }
            });
            player.action(() => {
                player.resolve();
            });
            loadInputs(kCtx, player);
        });

    };

    const setLevel = (level) => {
        crrLevel = level;
    }

    return (
        <canvas id="gameCanvas"></canvas>
    );
}

export default Game;