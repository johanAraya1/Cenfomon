var Especie = (function () {
    function Especie() {
        this._id = Math.random() + 9999;
        this._name = "";
        var rand = Math.floor(Math.random() * 100);
        if (rand > 50) {
            this._gender = "M";
        }
        else {
            this._gender = "F";
        }
        this._captureRate = Math.random() + 100;
        this._imgUrl = "";
        this._location = new Location();
        this._evolution = new Array();
        this._tipoElemento = new Array();
    }
    Especie.prototype.getid = function () {
        return this._id;
    };
    Especie.prototype.setid = function (value) {
        this._id = value;
    };
    Especie.prototype.getname = function () {
        return this._name;
    };
    Especie.prototype.setname = function (value) {
        this._name = value;
    };
    Object.defineProperty(Especie.prototype, "gender", {
        get: function () {
            return this._gender;
        },
        set: function (value) {
            this._gender = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Especie.prototype, "captureRate", {
        get: function () {
            return this._captureRate;
        },
        set: function (value) {
            this._captureRate = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Especie.prototype, "imgUrl", {
        get: function () {
            return this._imgUrl;
        },
        set: function (value) {
            this._imgUrl = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Especie.prototype, "location", {
        get: function () {
            return this._location;
        },
        set: function (value) {
            this._location = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Especie.prototype, "evolution", {
        get: function () {
            return this._evolution;
        },
        set: function (value) {
            this._evolution = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Especie.prototype, "tipoElemento", {
        get: function () {
            return this._tipoElemento;
        },
        set: function (value) {
            this._tipoElemento = value;
        },
        enumerable: false,
        configurable: true
    });
    return Especie;
}());
export { Especie };
//# sourceMappingURL=Especie.js.map