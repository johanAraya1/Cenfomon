import { loadInputs } from "controls/Input";
import { map_4 } from "maps/map";

export const initCastleScene = (kCtx, cbSetLevel) => {
    kCtx.scene('game_4', () => {
        kCtx.layers(['bg', 'obj', 'ui'], 'obj');
        cbSetLevel(kCtx.addLevel(map_4, {
            width: 41,
            height: 36,
            pos: kCtx.vec2(340, 0),
            '=': [kCtx.sprite('buildingBoundarie'), kCtx.solid(), kCtx.scale(0.2), 'wall'],
            '-': [kCtx.sprite('buildingBoundarie'), 'tiny-wall'],
            '?': [kCtx.sprite('cenfo_sp_zone'), kCtx.solid(), kCtx.scale(0.2), 'wild_cenfo'],
            '|': [kCtx.sprite('buildingBoundarie'), kCtx.scale(0.2), 'door'],
        }));
        // LAYER OBJECTS
        kCtx.add([
            kCtx.layer('bg'),
            kCtx.sprite('map_4'),
            kCtx.pos(300, 0),
            kCtx.scale(0.45)
        ]);
        const player = kCtx.add([
            kCtx.sprite('mc_mov_down_1', {
                animSpeed: 0.2,
                frame: 0
            }),
            kCtx.pos(740, 855),
            kCtx.scale(0.30),
            kCtx.solid()
        ]);
        player.overlaps('door', (d) => {
            console.log(d);
            kCtx.go('game_3');
        });
        loadInputs(kCtx, player);
    });
}