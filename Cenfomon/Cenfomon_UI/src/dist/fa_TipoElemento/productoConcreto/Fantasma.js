var Fantasma = (function () {
    function Fantasma() {
        this._desventajas = new Array();
        this._id = Math.random() + 9999;
        this._name = "fantasma";
        this._ventajas = new Array();
    }
    Object.defineProperty(Fantasma.prototype, "desventajas", {
        get: function () {
            return this._desventajas;
        },
        set: function (value) {
            this._desventajas = value;
        },
        enumerable: false,
        configurable: true
    });
    Fantasma.prototype.getid = function () {
        return this._id;
    };
    Fantasma.prototype.setid = function (value) {
        this._id = value;
    };
    Fantasma.prototype.getname = function () {
        return this._name;
    };
    Fantasma.prototype.setname = function (value) {
        this._name = value;
    };
    Object.defineProperty(Fantasma.prototype, "ventajas", {
        get: function () {
            return this._ventajas;
        },
        set: function (value) {
            this._ventajas = value;
        },
        enumerable: false,
        configurable: true
    });
    return Fantasma;
}());
export { Fantasma };
//# sourceMappingURL=Fantasma.js.map