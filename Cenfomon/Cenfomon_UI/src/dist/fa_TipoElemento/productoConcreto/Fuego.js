var Fuego = (function () {
    function Fuego() {
        this._desventajas = new Array();
        this._id = Math.random() + 9999;
        this._name = "fuego";
        this._ventajas = new Array();
    }
    Object.defineProperty(Fuego.prototype, "desventajas", {
        get: function () {
            return this._desventajas;
        },
        set: function (value) {
            this._desventajas = value;
        },
        enumerable: false,
        configurable: true
    });
    Fuego.prototype.getid = function () {
        return this._id;
    };
    Fuego.prototype.setid = function (value) {
        this._id = value;
    };
    Fuego.prototype.getname = function () {
        return this._name;
    };
    Fuego.prototype.setname = function (value) {
        this._name = value;
    };
    Object.defineProperty(Fuego.prototype, "ventajas", {
        get: function () {
            return this._ventajas;
        },
        set: function (value) {
            this._ventajas = value;
        },
        enumerable: false,
        configurable: true
    });
    return Fuego;
}());
export { Fuego };
//# sourceMappingURL=Fuego.js.map