import { Especie } from "../../entities/Especie";
import { Observer } from "../../Observer/Concreto/Observer";
var Polartias = (function () {
    function Polartias() {
        this._observers = new Array();
        this._defence = Math.random() + 100;
        this._experience = 0;
        this._id = Math.random() + 9999;
        this._movimientos = new Array();
        this._name = "Polartias";
        this._protection = Math.random() + 100;
        this._specie = new Especie();
        this._vida = 100;
        this._rock = "none";
        var observador = new Observer();
        observador.setname(this._name);
        this._observers = [observador];
    }
    Polartias.prototype.decorateCenfomon = function (item) {
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
    Polartias.prototype.getdefence = function () {
        return this._defence;
    };
    Polartias.prototype.setdefence = function (value) {
        this._defence = value;
    };
    Polartias.prototype.getexperience = function () {
        return this._experience;
    };
    Polartias.prototype.setexperience = function (value) {
        this._experience = value;
    };
    Polartias.prototype.getid = function () {
        return this._id;
    };
    Polartias.prototype.setid = function (value) {
        this._id = value;
    };
    Polartias.prototype.getmovimientos = function () {
        return this._movimientos;
    };
    Polartias.prototype.setmovimientos = function (value) {
        this._movimientos = value;
    };
    Polartias.prototype.getname = function () {
        return this._name;
    };
    Polartias.prototype.setname = function (value) {
        this._name = value;
    };
    Polartias.prototype.getprotection = function () {
        return this._protection;
    };
    Polartias.prototype.setprotection = function (value) {
        this._protection = value;
    };
    Polartias.prototype.getspecie = function () {
        return this._specie;
    };
    Object.defineProperty(Polartias.prototype, "specie", {
        set: function (value) {
            this._specie = value;
        },
        enumerable: false,
        configurable: true
    });
    Polartias.prototype.getvida = function () {
        return this._vida;
    };
    Object.defineProperty(Polartias.prototype, "vida", {
        set: function (value) {
            this._vida = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Polartias.prototype, "rock", {
        get: function () {
            return this._rock;
        },
        set: function (value) {
            this._rock = value;
        },
        enumerable: false,
        configurable: true
    });
    Polartias.prototype.setspecie = function (value) {
        this._specie = value;
    };
    Polartias.prototype.setvida = function (value) {
        this._vida = value;
    };
    Polartias.prototype.getrock = function () {
        return this._rock;
    };
    Polartias.prototype.setrock = function (value) {
        this._rock = value;
    };
    Polartias.prototype.addObserver = function (o) {
        this._observers.push(o);
        this.notifyObervers();
    };
    Polartias.prototype.notifyObervers = function () {
        var _this = this;
        this._observers.forEach(function (element) {
            element.update(_this.getname(), _this.getexperience());
        });
    };
    return Polartias;
}());
export { Polartias };
//# sourceMappingURL=Polartias.js.map