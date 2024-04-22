var Movimiento = (function () {
    function Movimiento() {
        this._id = Math.random() + 9999;
        this._name = "";
        this._puntos = 0;
        this._tipo = new (function () {
            function class_1() {
            }
            return class_1;
        }());
    }
    Movimiento.prototype.getid = function () {
        return this._id;
    };
    Movimiento.prototype.setid = function (value) {
        this._id = value;
    };
    Movimiento.prototype.getname = function () {
        return this._name;
    };
    Movimiento.prototype.setname = function (value) {
        this._name = value;
    };
    Object.defineProperty(Movimiento.prototype, "puntos", {
        get: function () {
            return this._puntos;
        },
        set: function (value) {
            this._puntos = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Movimiento.prototype, "tipo", {
        get: function () {
            return this._tipo;
        },
        set: function (value) {
            this._tipo = value;
        },
        enumerable: false,
        configurable: true
    });
    return Movimiento;
}());
export { Movimiento };
//# sourceMappingURL=Movimiento.js.map