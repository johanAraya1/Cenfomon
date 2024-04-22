var Planta = (function () {
    function Planta() {
        this._desventajas = new Array();
        this._id = Math.random() + 9999;
        this._name = "planta";
        this._ventajas = new Array();
    }
    Object.defineProperty(Planta.prototype, "desventajas", {
        get: function () {
            return this._desventajas;
        },
        set: function (value) {
            this._desventajas = value;
        },
        enumerable: false,
        configurable: true
    });
    Planta.prototype.getid = function () {
        return this._id;
    };
    Planta.prototype.setid = function (value) {
        this._id = value;
    };
    Planta.prototype.getname = function () {
        return this._name;
    };
    Planta.prototype.setname = function (value) {
        this._name = value;
    };
    Object.defineProperty(Planta.prototype, "ventajas", {
        get: function () {
            return this._ventajas;
        },
        set: function (value) {
            this._ventajas = value;
        },
        enumerable: false,
        configurable: true
    });
    return Planta;
}());
export { Planta };
//# sourceMappingURL=Planta.js.map