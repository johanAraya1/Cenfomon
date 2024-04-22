var Normal = (function () {
    function Normal() {
        this._desventajas = new Array();
        this._id = Math.random() + 9999;
        this._name = "normal";
        this._ventajas = new Array();
    }
    Object.defineProperty(Normal.prototype, "desventajas", {
        get: function () {
            return this._desventajas;
        },
        set: function (value) {
            this._desventajas = value;
        },
        enumerable: false,
        configurable: true
    });
    Normal.prototype.getid = function () {
        return this._id;
    };
    Normal.prototype.setid = function (value) {
        this._id = value;
    };
    Normal.prototype.getname = function () {
        return this._name;
    };
    Normal.prototype.setname = function (value) {
        this._name = value;
    };
    Object.defineProperty(Normal.prototype, "ventajas", {
        get: function () {
            return this._ventajas;
        },
        set: function (value) {
            this._ventajas = value;
        },
        enumerable: false,
        configurable: true
    });
    return Normal;
}());
export { Normal };
//# sourceMappingURL=Normal.js.map