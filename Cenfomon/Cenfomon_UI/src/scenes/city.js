import { map_begin } from "maps/map";
import CenfoScene from "./CenfoScene";
import { loadInputs } from '../controls/Input';

export default class City extends CenfoScene {


    _playerEvents = {};

    constructor(scName, kaboomCtx, cbSetleve) {
        super(scName, kaboomCtx, cbSetleve);
    }

    buildScence() {
        this.kCtx.scene(this._sceneName, () => {
            this.configLayers();
            this.configLevel();
            this.configSprites();
            this.configPlayer();
        });
        return this;
    }

    configLevel() {
        this.setLevel(this.kCtx.addLevel(map_begin, {
            width: 41,
            height: 36,
            pos: this.kCtx.vec2(340, 20),
            '=': [this.kCtx.sprite('buildingBoundarie'), this.kCtx.solid(), this.kCtx.scale(0.2), 'wall'],
            '-': [this.kCtx.sprite('buildingBoundarie'), this.kCtx.scale(0.2), this.kCtx.solid(), 'tiny-wall'],
            '?': [this.kCtx.sprite('cenfo_sp_zone'), this.kCtx.solid(), this.kCtx.scale(0.2), 'wild_cenfo'],
            '|': [this.kCtx.sprite('buildingBoundarie'), this.kCtx.scale(0.2), 'door'],
        }));
    }

    configPlayer() {
        super.configPlayer();
        this.player.overlaps('door', (d) => {
            const { gridPos } = d
            console.log(d, gridPos);
            if (gridPos.y >= 20) {
                this.kCtx.go('game_2');
            }
            // if (gridPos.x < 5) {
            //     kCtx.go('game')
            // }
        });
        this.player.collides('tiny-wall', (d, b) => {
            const cb = this.playerEvents['tiny-wall'];
            cb();
            console.log(d);
        });
        loadInputs(this.kCtx, this.player);

        this.player.collides('wild_cenfo', (d, b) => {
            const cb = this.playerEvents['wild_cenfo'];
            cb();
            console.log(d);
        });

    }

    configSprites() {
        //PLAYER
        this.player = this.kCtx.add([
            this.kCtx.sprite('mc_mov_down_1', {
                animSpeed: 0.2,
                frame: 0
            }),
            this.kCtx.pos(715, 250),
            this.kCtx.scale(0.28),
            this.kCtx.solid(),
            'player'
        ]);
        // MAP
        this.kCtx.add([
            this.kCtx.layer('bg'),
            this.kCtx.sprite('map_1'),
            this.kCtx.pos(750, 471),
            this.kCtx.scale(0.45),
            this.kCtx.origin('center'),
        ]);
    }

    get playerEvents() {
        return this._playerEvents;
    }

    addPlayerEvents(name, cb) {
        this._playerEvents[name] = cb;
    }
}
