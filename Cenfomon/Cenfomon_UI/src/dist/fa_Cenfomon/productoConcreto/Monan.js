import { Especie } from "../../entities/Especie";
import { Observer } from "../../Observer/Concreto/Observer";
var Monan = (function () {
    function Monan() {
        this._observers = new Array();
        this._defence = Math.random() + 100;
        this._experience = 0;
        this._id = Math.random() + 9999;
        this._movimientos = new Array();
        this._name = "Monan";
        this._protection = Math.random() + 100;
        this._specie = new Especie();
        this._vida = 100;
        this._rock = "none";
        var observador = new Observer();
        observador.setname(this._name);
        this._observers = [observador];
    }
    Monan.prototype.decorateCenfomon = function (item) {
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
    Monan.prototype.getdefence = function () {
        return this._defence;
    };
    Monan.prototype.setdefence = function (value) {
        this._defence = value;
    };
    Monan.prototype.getexperience = function () {
        return this._experience;
    };
    Monan.prototype.setexperience = function (value) {
        this._experience = value;
    };
    Monan.prototype.getid = function () {
        return this._id;
    };
    Monan.prototype.setid = function (value) {
        this._id = value;
    };
    Monan.prototype.getmovimientos = function () {
        return this._movimientos;
    };
    Monan.prototype.setmovimientos = function (value) {
        this._movimientos = value;
    };
    Monan.prototype.getname = function () {
        return this._name;
    };
    Monan.prototype.setname = function (value) {
        this._name = value;
    };
    Monan.prototype.getprotection = function () {
        return this._protection;
    };
    Monan.prototype.setprotection = function (value) {
        this._protection = value;
    };
    Monan.prototype.getspecie = function () {
        return this._specie;
    };
    Object.defineProperty(Monan.prototype, "specie", {
        set: function (value) {
            this._specie = value;
        },
        enumerable: false,
        configurable: true
    });
    Monan.prototype.getvida = function () {
        return this._vida;
    };
    Object.defineProperty(Monan.prototype, "vida", {
        set: function (value) {
            this._vida = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Monan.prototype, "rock", {
        get: function () {
            return this._rock;
        },
        set: function (value) {
            this._rock = value;
        },
        enumerable: false,
        configurable: true
    });
    Monan.prototype.setspecie = function (value) {
        this._specie = value;
    };
    Monan.prototype.setvida = function (value) {
        this._vida = value;
    };
    Monan.prototype.getrock = function () {
        return this._rock;
    };
    Monan.prototype.setrock = function (value) {
        this._rock = value;
    };
    Monan.prototype.addObserver = function (o) {
        this._observers.push(o);
        this.notifyObervers();
    };
    Monan.prototype.notifyObervers = function () {
        var _this = this;
        this._observers.forEach(function (element) {
            element.update(_this.getname(), _this.getexperience());
        });
    };
    return Monan;
}());
export { Monan };
//# sourceMappingURL=Monan.js.map