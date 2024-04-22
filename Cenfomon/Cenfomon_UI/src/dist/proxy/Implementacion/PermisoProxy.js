import { Permiso } from "./Permiso";
var PermisoProxy = (function () {
    function PermisoProxy() {
        this._per = new Permiso(false);
        this._key = false;
    }
    Object.defineProperty(PermisoProxy.prototype, "per", {
        get: function () {
            return this._per;
        },
        set: function (value) {
            this._per = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PermisoProxy.prototype, "key", {
        get: function () {
            return this._key;
        },
        set: function (value) {
            this._key = value;
        },
        enumerable: false,
        configurable: true
    });
    PermisoProxy.prototype.permiso = function (usuario) {
        if (usuario.key == false) {
            usuario.key = true;
        }
        return usuario;
    };
    return PermisoProxy;
}());
export { PermisoProxy };
//# sourceMappingURL=PermisoProxy.js.map