import { Especie } from "../../entities/Especie";
import { Observer } from "../../Observer/Concreto/Observer";
var Dragoluna = (function () {
    function Dragoluna() {
        this._observers = new Array();
        this._defence = Math.random() + 100;
        this._experience = 0;
        this._id = Math.random() + 9999;
        this._movimientos = new Array();
        this._name = "Dragoluna";
        this._protection = Math.random() + 100;
        this._specie = new Especie();
        this._vida = 100;
        this._rock = "none";
        var observador = new Observer();
        observador.setname(this._name);
        this._observers = [observador];
    }
    Dragoluna.prototype.decorateCenfomon = function (item) {
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
    Dragoluna.prototype.getdefence = function () {
        return this._defence;
    };
    Dragoluna.prototype.setdefence = function (value) {
        this._defence = value;
    };
    Dragoluna.prototype.getexperience = function () {
        return this._experience;
    };
    Dragoluna.prototype.setexperience = function (value) {
        this._experience = value;
    };
    Dragoluna.prototype.getid = function () {
        return this._id;
    };
    Dragoluna.prototype.setid = function (value) {
        this._id = value;
    };
    Dragoluna.prototype.getmovimientos = function () {
        return this._movimientos;
    };
    Dragoluna.prototype.setmovimientos = function (value) {
        this._movimientos = value;
    };
    Dragoluna.prototype.getname = function () {
        return this._name;
    };
    Dragoluna.prototype.setname = function (value) {
        this._name = value;
    };
    Dragoluna.prototype.getprotection = function () {
        return this._protection;
    };
    Dragoluna.prototype.setprotection = function (value) {
        this._protection = value;
    };
    Dragoluna.prototype.getspecie = function () {
        return this._specie;
    };
    Object.defineProperty(Dragoluna.prototype, "specie", {
        set: function (value) {
            this._specie = value;
        },
        enumerable: false,
        configurable: true
    });
    Dragoluna.prototype.getvida = function () {
        return this._vida;
    };
    Object.defineProperty(Dragoluna.prototype, "vida", {
        set: function (value) {
            this._vida = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Dragoluna.prototype, "rock", {
        get: function () {
            return this._rock;
        },
        set: function (value) {
            this._rock = value;
        },
        enumerable: false,
        configurable: true
    });
    Dragoluna.prototype.setspecie = function (value) {
        this._specie = value;
    };
    Dragoluna.prototype.setvida = function (value) {
        this._vida = value;
    };
    Dragoluna.prototype.getrock = function () {
        return this._rock;
    };
    Dragoluna.prototype.setrock = function (value) {
        this._rock = value;
    };
    Dragoluna.prototype.addObserver = function (o) {
        this._observers.push(o);
        this.notifyObervers();
    };
    Dragoluna.prototype.notifyObervers = function () {
        var _this = this;
        this._observers.forEach(function (element) {
            element.update(_this.getname(), _this.getexperience());
        });
    };
    return Dragoluna;
}());
export { Dragoluna };
//# sourceMappingURL=Dragoluna.js.map