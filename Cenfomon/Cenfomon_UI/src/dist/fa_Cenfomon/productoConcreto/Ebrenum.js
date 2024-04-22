import { Especie } from "../../entities/Especie";
import { Observer } from "../../Observer/Concreto/Observer";
var Ebrenum = (function () {
    function Ebrenum() {
        this._observers = new Array();
        this._defence = Math.random() + 100;
        this._experience = 0;
        this._id = Math.random() + 9999;
        this._movimientos = new Array();
        this._name = "Ebrenum";
        this._protection = Math.random() + 100;
        this._specie = new Especie();
        this._vida = 100;
        this._rock = "none";
        var observador = new Observer();
        observador.setname(this._name);
        this._observers = [observador];
    }
    Ebrenum.prototype.decorateCenfomon = function (item) {
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
    Ebrenum.prototype.getdefence = function () {
        return this._defence;
    };
    Ebrenum.prototype.setdefence = function (value) {
        this._defence = value;
    };
    Ebrenum.prototype.getexperience = function () {
        return this._experience;
    };
    Ebrenum.prototype.setexperience = function (value) {
        this._experience = value;
    };
    Ebrenum.prototype.getid = function () {
        return this._id;
    };
    Ebrenum.prototype.setid = function (value) {
        this._id = value;
    };
    Ebrenum.prototype.getmovimientos = function () {
        return this._movimientos;
    };
    Ebrenum.prototype.setmovimientos = function (value) {
        this._movimientos = value;
    };
    Ebrenum.prototype.getname = function () {
        return this._name;
    };
    Ebrenum.prototype.setname = function (value) {
        this._name = value;
    };
    Ebrenum.prototype.getprotection = function () {
        return this._protection;
    };
    Ebrenum.prototype.setprotection = function (value) {
        this._protection = value;
    };
    Ebrenum.prototype.getspecie = function () {
        return this._specie;
    };
    Object.defineProperty(Ebrenum.prototype, "specie", {
        set: function (value) {
            this._specie = value;
        },
        enumerable: false,
        configurable: true
    });
    Ebrenum.prototype.getvida = function () {
        return this._vida;
    };
    Object.defineProperty(Ebrenum.prototype, "vida", {
        set: function (value) {
            this._vida = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ebrenum.prototype, "rock", {
        get: function () {
            return this._rock;
        },
        set: function (value) {
            this._rock = value;
        },
        enumerable: false,
        configurable: true
    });
    Ebrenum.prototype.setspecie = function (value) {
        this._specie = value;
    };
    Ebrenum.prototype.setvida = function (value) {
        this._vida = value;
    };
    Ebrenum.prototype.getrock = function () {
        return this._rock;
    };
    Ebrenum.prototype.setrock = function (value) {
        this._rock = value;
    };
    Ebrenum.prototype.addObserver = function (o) {
        this._observers.push(o);
        this.notifyObervers();
    };
    Ebrenum.prototype.notifyObervers = function () {
        var _this = this;
        this._observers.forEach(function (element) {
            element.update(_this.getname(), _this.getexperience());
        });
    };
    return Ebrenum;
}());
export { Ebrenum };
//# sourceMappingURL=Ebrenum.js.map