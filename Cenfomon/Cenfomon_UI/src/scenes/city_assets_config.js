import { getCurrentURL } from "utils/utils";

const roots = {
    'LOCAL_ASSETS': `${getCurrentURL}assets/`,
    'REMOTE_ASSETS': 'https://res.cloudinary.com/workit-ucenfotec/image/upload/v1625203071/cenfomon/',
};

const cityAssetsConfig = {
    "imgs": [
        {
            "kName": "buildingBoundarie",
            "path": "fake_block.png",
            "root": roots.LOCAL_ASSETS
        },
        {
            "kName": "map_1",
            "path": "img/maps/1_fc4jqu.jpg",
            "root": roots.LOCAL_ASSETS
        },
        {
            "kName": "map_2",
            "path": "img/maps/2.jpg",
            "root": roots.LOCAL_ASSETS
        },
        {
            "kName": "map_3",
            "path": "img/maps/3.jpg",
            "root": roots.LOCAL_ASSETS
        },
        {
            "kName": "map_4",
            "path": "img/maps/4.jpg",
            "root": roots.LOCAL_ASSETS
        },
        {
            "kName": "cenfo_sp_zone",
            "path": "img/fk_ran_cenfomon_zone.png",
            "root": roots.LOCAL_ASSETS
        },
        {
            "kName": "mc_mov_down_1",
            "path": "img/characters/principal/movs_hvmguj.png",
            "root": roots.LOCAL_ASSETS,
            "opts": {
                sliceX: 3,
                sliceY: 4,
                gridWidth: 140, // divide total imgage pixels length fot that value
                gridHeight: 146, // the same as above but uaing heigh
                anims: {
                    runLeft: {
                        from: 3, to: 5
                    },
                    runRight: {
                        from: 6, to: 8
                    },
                    runUp: {
                        from: 9, to: 10
                    },
                    runDown: {
                        from: 0, to: 2
                    },
                    repose: {
                        from: 1, to: 1
                    }
                }
            }
        },
    ]
};

export const assetsConfig = {
    roots, cityAssetsConfig
};
