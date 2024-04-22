import { Especie } from "../../entities/Especie";
import { Observer } from "../../Observer/Concreto/Observer";
var Salamluna = (function () {
    function Salamluna() {
        this._observers = new Array();
        this._defence = Math.random() + 100;
        this._experience = 0;
        this._id = Math.random() + 9999;
        this._movimientos = new Array();
        this._name = "Salamluna";
        this._protection = Math.random() + 100;
        this._specie = new Especie();
        this._vida = 100;
        this._rock = "none";
        var observador = new Observer();
        observador.setname(this._name);
        this._observers = [observador];
    }
    Salamluna.prototype.decorateCenfomon = function (item) {
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
    Salamluna.prototype.getdefence = function () {
        return this._defence;
    };
    Salamluna.prototype.setdefence = function (value) {
        this._defence = value;
    };
    Salamluna.prototype.getexperience = function () {
        return this._experience;
    };
    Salamluna.prototype.setexperience = function (value) {
        this._experience = value;
    };
    Salamluna.prototype.getid = function () {
        return this._id;
    };
    Salamluna.prototype.setid = function (value) {
        this._id = value;
    };
    Salamluna.prototype.getmovimientos = function () {
        return this._movimientos;
    };
    Salamluna.prototype.setmovimientos = function (value) {
        this._movimientos = value;
    };
    Salamluna.prototype.getname = function () {
        return this._name;
    };
    Salamluna.prototype.setname = function (value) {
        this._name = value;
    };
    Salamluna.prototype.getprotection = function () {
        return this._protection;
    };
    Salamluna.prototype.setprotection = function (value) {
        this._protection = value;
    };
    Salamluna.prototype.getspecie = function () {
        return this._specie;
    };
    Object.defineProperty(Salamluna.prototype, "specie", {
        set: function (value) {
            this._specie = value;
        },
        enumerable: false,
        configurable: true
    });
    Salamluna.prototype.getvida = function () {
        return this._vida;
    };
    Object.defineProperty(Salamluna.prototype, "vida", {
        set: function (value) {
            this._vida = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Salamluna.prototype, "rock", {
        get: function () {
            return this._rock;
        },
        set: function (value) {
            this._rock = value;
        },
        enumerable: false,
        configurable: true
    });
    Salamluna.prototype.setspecie = function (value) {
        this._specie = value;
    };
    Salamluna.prototype.setvida = function (value) {
        this._vida = value;
    };
    Salamluna.prototype.getrock = function () {
        return this._rock;
    };
    Salamluna.prototype.setrock = function (value) {
        this._rock = value;
    };
    Salamluna.prototype.addObserver = function (o) {
        this._observers.push(o);
        this.notifyObervers();
    };
    Salamluna.prototype.notifyObervers = function () {
        var _this = this;
        this._observers.forEach(function (element) {
            element.update(_this.getname(), _this.getexperience());
        });
    };
    return Salamluna;
}());
export { Salamluna };
//# sourceMappingURL=Salamluna.js.map