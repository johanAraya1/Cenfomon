import { Especie } from "../../entities/Especie";
import { Observer } from "../../Observer/Concreto/Observer";
var Yencornio = (function () {
    function Yencornio() {
        this._observers = new Array();
        this._defence = Math.random() + 100;
        this._experience = 0;
        this._id = Math.random() + 9999;
        this._movimientos = new Array();
        this._name = "Yencornio";
        this._protection = Math.random() + 100;
        this._specie = new Especie();
        this._vida = 100;
        this._rock = "none";
        var observador = new Observer();
        observador.setname(this._name);
        this._observers = [observador];
    }
    Yencornio.prototype.decorateCenfomon = function (item) {
        if (item.getname() == "Potion") {
            var pot = item;
            if (pot.strength == "Normal") {
                this._vida += 20;
                if (this.vida > 100) {
                    this.vida = 100;
                }
            }
            else if (pot.strength == "Medium") {
                this._vida += 45;
                if (this.vida > 100) {
                    this.vida = 100;
                }
            }
            else if (pot.strength == "Maximun") {
                this._vida = 100;
            }
        }
        else if (item.getname() == "Evolution Rocks") {
            var rock = item;
            this._rock = rock.type;
        }
    };
    Yencornio.prototype.getdefence = function () {
        return this._defence;
    };
    Yencornio.prototype.setdefence = function (value) {
        this._defence = value;
    };
    Yencornio.prototype.getexperience = function () {
        return this._experience;
    };
    Yencornio.prototype.setexperience = function (value) {
        this._experience = value;
    };
    Yencornio.prototype.getid = function () {
        return this._id;
    };
    Yencornio.prototype.setid = function (value) {
        this._id = value;
    };
    Yencornio.prototype.getmovimientos = function () {
        return this._movimientos;
    };
    Yencornio.prototype.setmovimientos = function (value) {
        this._movimientos = value;
    };
    Yencornio.prototype.getname = function () {
        return this._name;
    };
    Yencornio.prototype.setname = function (value) {
        this._name = value;
    };
    Yencornio.prototype.getprotection = function () {
        return this._protection;
    };
    Yencornio.prototype.setprotection = function (value) {
        this._protection = value;
    };
    Yencornio.prototype.getspecie = function () {
        return this._specie;
    };
    Object.defineProperty(Yencornio.prototype, "specie", {
        set: function (value) {
            this._specie = value;
        },
        enumerable: false,
        configurable: true
    });
    Yencornio.prototype.getvida = function () {
        return this._vida;
    };
    Object.defineProperty(Yencornio.prototype, "vida", {
        set: function (value) {
            this._vida = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Yencornio.prototype, "rock", {
        get: function () {
            return this._rock;
        },
        set: function (value) {
            this._rock = value;
        },
        enumerable: false,
        configurable: true
    });
    Yencornio.prototype.setspecie = function (value) {
        this._specie = value;
    };
    Yencornio.prototype.setvida = function (value) {
        this._vida = value;
    };
    Yencornio.prototype.getrock = function () {
        return this._rock;
    };
    Yencornio.prototype.setrock = function (value) {
        this._rock = value;
    };
    Yencornio.prototype.addObserver = function (o) {
        this._observers.push(o);
        this.notifyObervers();
    };
    Yencornio.prototype.notifyObervers = function () {
        var _this = this;
        this._observers.forEach(function (element) {
            element.update(_this.getname(), _this.getexperience());
        });
    };
    return Yencornio;
}());
export { Yencornio };
//# sourceMappingURL=Yencornio.js.map