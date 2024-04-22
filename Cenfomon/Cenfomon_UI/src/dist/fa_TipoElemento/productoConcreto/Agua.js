var Agua = (function () {
    function Agua() {
        this._desventajas = new Array();
        this._id = Math.random() + 9999;
        this._name = "agua";
        this._ventajas = new Array();
    }
    Object.defineProperty(Agua.prototype, "desventajas", {
        get: function () {
            return this._desventajas;
        },
        set: function (value) {
            this._desventajas = value;
        },
        enumerable: false,
        configurable: true
    });
    Agua.prototype.getid = function () {
        return this._id;
    };
    Agua.prototype.setid = function (value) {
        this._id = value;
    };
    Agua.prototype.getname = function () {
        return this._name;
    };
    Agua.prototype.setname = function (value) {
        this._name = value;
    };
    Object.defineProperty(Agua.prototype, "ventajas", {
        get: function () {
            return this._ventajas;
        },
        set: function (value) {
            this._ventajas = value;
        },
        enumerable: false,
        configurable: true
    });
    return Agua;
}());
export { Agua };
//# sourceMappingURL=Agua.js.map