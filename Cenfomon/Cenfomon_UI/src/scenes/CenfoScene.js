export default class CenfoScene {
    constructor(sceneName, kaboomCtx, cbSetleve) {
        this.kCtx = kaboomCtx;
        this.setLevel = cbSetleve;
        this._sceneName = sceneName;
    }

    configPlayer() {
        this.player.action(() => {
            this.player.resolve();
        });
    }

    configLayers() {
        this.kCtx.layers(['bg', 'obj', 'ui'], 'obj');
    }

}