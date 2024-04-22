var Bicho = (function () {
    function Bicho() {
        this._desventajas = new Array();
        this._id = Math.random() + 9999;
        this._name = "bicho";
        this._ventajas = new Array();
    }
    Object.defineProperty(Bicho.prototype, "desventajas", {
        get: function () {
            return this._desventajas;
        },
        set: function (value) {
            this._desventajas = value;
        },
        enumerable: false,
        configurable: true
    });
    Bicho.prototype.getid = function () {
        return this._id;
    };
    Bicho.prototype.setid = function (value) {
        this._id = value;
    };
    Bicho.prototype.getname = function () {
        return this._name;
    };
    Bicho.prototype.setname = function (value) {
        this._name = value;
    };
    Object.defineProperty(Bicho.prototype, "ventajas", {
        get: function () {
            return this._ventajas;
        },
        set: function (value) {
            this._ventajas = value;
        },
        enumerable: false,
        configurable: true
    });
    return Bicho;
}());
export { Bicho };
//# sourceMappingURL=Bicho.js.map