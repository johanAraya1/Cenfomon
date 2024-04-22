var Permiso = (function () {
    function Permiso(key) {
        this._key = key;
    }
    Object.defineProperty(Permiso.prototype, "key", {
        get: function () {
            return this._key;
        },
        set: function (value) {
            this._key = value;
        },
        enumerable: false,
        configurable: true
    });
    Permiso.prototype.permiso = function (usuario) {
        return usuario;
    };
    return Permiso;
}());
export { Permiso };
//# sourceMappingURL=Permiso.js.map