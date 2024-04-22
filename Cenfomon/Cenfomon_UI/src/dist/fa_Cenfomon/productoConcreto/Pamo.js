import { Especie } from "../../entities/Especie";
import { Observer } from "../../Observer/Concreto/Observer";
var Pamo = (function () {
    function Pamo() {
        this._observers = new Array();
        this._defence = Math.random() + 100;
        this._experience = 0;
        this._id = Math.random() + 9999;
        this._movimientos = new Array();
        this._name = "Pamo";
        this._protection = Math.random() + 100;
        this._specie = new Especie();
        this._vida = 100;
        this._rock = "none";
        var observador = new Observer();
        observador.setname(this._name);
        this._observers = [observador];
    }
    Pamo.prototype.decorateCenfomon = function (item) {
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
    Pamo.prototype.getdefence = function () {
        return this._defence;
    };
    Pamo.prototype.setdefence = function (value) {
        this._defence = value;
    };
    Pamo.prototype.getexperience = function () {
        return this._experience;
    };
    Pamo.prototype.setexperience = function (value) {
        this._experience = value;
    };
    Pamo.prototype.getid = function () {
        return this._id;
    };
    Pamo.prototype.setid = function (value) {
        this._id = value;
    };
    Pamo.prototype.getmovimientos = function () {
        return this._movimientos;
    };
    Pamo.prototype.setmovimientos = function (value) {
        this._movimientos = value;
    };
    Pamo.prototype.getname = function () {
        return this._name;
    };
    Pamo.prototype.setname = function (value) {
        this._name = value;
    };
    Pamo.prototype.getprotection = function () {
        return this._protection;
    };
    Pamo.prototype.setprotection = function (value) {
        this._protection = value;
    };
    Pamo.prototype.getspecie = function () {
        return this._specie;
    };
    Object.defineProperty(Pamo.prototype, "specie", {
        set: function (value) {
            this._specie = value;
        },
        enumerable: false,
        configurable: true
    });
    Pamo.prototype.getvida = function () {
        return this._vida;
    };
    Object.defineProperty(Pamo.prototype, "vida", {
        set: function (value) {
            this._vida = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pamo.prototype, "rock", {
        get: function () {
            return this._rock;
        },
        set: function (value) {
            this._rock = value;
        },
        enumerable: false,
        configurable: true
    });
    Pamo.prototype.setspecie = function (value) {
        this._specie = value;
    };
    Pamo.prototype.setvida = function (value) {
        this._vida = value;
    };
    Pamo.prototype.getrock = function () {
        return this._rock;
    };
    Pamo.prototype.setrock = function (value) {
        this._rock = value;
    };
    Pamo.prototype.addObserver = function (o) {
        this._observers.push(o);
        this.notifyObervers();
    };
    Pamo.prototype.notifyObervers = function () {
        var _this = this;
        this._observers.forEach(function (element) {
            element.update(_this.getname(), _this.getexperience());
        });
    };
    return Pamo;
}());
export { Pamo };
//# sourceMappingURL=Pamo.js.map