var Electrico = (function () {
    function Electrico() {
        this._desventajas = new Array();
        this._id = Math.random() + 9999;
        this._name = "electrico";
        this._ventajas = new Array();
    }
    Object.defineProperty(Electrico.prototype, "desventajas", {
        get: function () {
            return this._desventajas;
        },
        set: function (value) {
            this._desventajas = value;
        },
        enumerable: false,
        configurable: true
    });
    Electrico.prototype.getid = function () {
        return this._id;
    };
    Electrico.prototype.setid = function (value) {
        this._id = value;
    };
    Electrico.prototype.getname = function () {
        return this._name;
    };
    Electrico.prototype.setname = function (value) {
        this._name = value;
    };
    Object.defineProperty(Electrico.prototype, "ventajas", {
        get: function () {
            return this._ventajas;
        },
        set: function (value) {
            this._ventajas = value;
        },
        enumerable: false,
        configurable: true
    });
    return Electrico;
}());
export { Electrico };
//# sourceMappingURL=Electrico.js.map