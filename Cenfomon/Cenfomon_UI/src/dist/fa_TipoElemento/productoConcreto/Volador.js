var Volador = (function () {
    function Volador() {
        this._desventajas = new Array();
        this._id = Math.random() + 9999;
        this._name = "volador";
        this._ventajas = new Array();
    }
    Object.defineProperty(Volador.prototype, "desventajas", {
        get: function () {
            return this._desventajas;
        },
        set: function (value) {
            this._desventajas = value;
        },
        enumerable: false,
        configurable: true
    });
    Volador.prototype.getid = function () {
        return this._id;
    };
    Volador.prototype.setid = function (value) {
        this._id = value;
    };
    Volador.prototype.getname = function () {
        return this._name;
    };
    Volador.prototype.setname = function (value) {
        this._name = value;
    };
    Object.defineProperty(Volador.prototype, "ventajas", {
        get: function () {
            return this._ventajas;
        },
        set: function (value) {
            this._ventajas = value;
        },
        enumerable: false,
        configurable: true
    });
    return Volador;
}());
export { Volador };
//# sourceMappingURL=Volador.js.map