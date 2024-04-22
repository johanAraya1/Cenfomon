import { Especie } from "../../entities/Especie";
import { Observer } from "../../Observer/Concreto/Observer";
var Fenixluna = (function () {
    function Fenixluna() {
        this._observers = new Array();
        this._defence = Math.random() + 100;
        this._experience = 0;
        this._id = Math.random() + 9999;
        this._movimientos = new Array();
        this._name = "Fenixluna";
        this._protection = Math.random() + 100;
        this._specie = new Especie();
        this._vida = 100;
        this._rock = "none";
        var observador = new Observer();
        observador.setname(this._name);
        this._observers = [observador];
    }
    Fenixluna.prototype.decorateCenfomon = function (item) {
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
    Fenixluna.prototype.getdefence = function () {
        return this._defence;
    };
    Fenixluna.prototype.setdefence = function (value) {
        this._defence = value;
    };
    Fenixluna.prototype.getexperience = function () {
        return this._experience;
    };
    Fenixluna.prototype.setexperience = function (value) {
        this._experience = value;
    };
    Fenixluna.prototype.getid = function () {
        return this._id;
    };
    Fenixluna.prototype.setid = function (value) {
        this._id = value;
    };
    Fenixluna.prototype.getmovimientos = function () {
        return this._movimientos;
    };
    Fenixluna.prototype.setmovimientos = function (value) {
        this._movimientos = value;
    };
    Fenixluna.prototype.getname = function () {
        return this._name;
    };
    Fenixluna.prototype.setname = function (value) {
        this._name = value;
    };
    Fenixluna.prototype.getprotection = function () {
        return this._protection;
    };
    Fenixluna.prototype.setprotection = function (value) {
        this._protection = value;
    };
    Fenixluna.prototype.getspecie = function () {
        return this._specie;
    };
    Object.defineProperty(Fenixluna.prototype, "specie", {
        set: function (value) {
            this._specie = value;
        },
        enumerable: false,
        configurable: true
    });
    Fenixluna.prototype.getvida = function () {
        return this._vida;
    };
    Object.defineProperty(Fenixluna.prototype, "vida", {
        set: function (value) {
            this._vida = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Fenixluna.prototype, "rock", {
        get: function () {
            return this._rock;
        },
        set: function (value) {
            this._rock = value;
        },
        enumerable: false,
        configurable: true
    });
    Fenixluna.prototype.setspecie = function (value) {
        this._specie = value;
    };
    Fenixluna.prototype.setvida = function (value) {
        this._vida = value;
    };
    Fenixluna.prototype.getrock = function () {
        return this._rock;
    };
    Fenixluna.prototype.setrock = function (value) {
        this._rock = value;
    };
    Fenixluna.prototype.addObserver = function (o) {
        this._observers.push(o);
        this.notifyObervers();
    };
    Fenixluna.prototype.notifyObervers = function () {
        var _this = this;
        this._observers.forEach(function (element) {
            element.update(_this.getname(), _this.getexperience());
        });
    };
    return Fenixluna;
}());
export { Fenixluna };
//# sourceMappingURL=Fenixluna.js.map