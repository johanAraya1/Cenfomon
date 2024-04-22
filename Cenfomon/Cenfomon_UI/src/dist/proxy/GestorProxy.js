import { Player } from "../entities/Player";
import { PermisoProxy } from "./Implementacion/PermisoProxy";
var GestorProxy = (function () {
    function GestorProxy() {
        this.per = new PermisoProxy();
        this._player = new Player();
        this.acceder(this._player);
    }
    GestorProxy.prototype.acceder = function (user) {
        return user;
    };
    return GestorProxy;
}());
export { GestorProxy };
//# sourceMappingURL=GestorProxy.js.map