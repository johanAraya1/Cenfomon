import { Especie } from "../../entities/Especie";
import { Observer } from "../../Observer/Concreto/Observer";
var Corderion = (function () {
    function Corderion() {
        this._observers = new Array();
        this._defence = Math.random() + 100;
        this._experience = 0;
        this._id = Math.random() + 9999;
        this._movimientos = new Array();
        this._name = "Corderion";
        this._protection = Math.random() + 100;
        this._specie = new Especie();
        this._vida = 100;
        this._rock = "none";
        var observador = new Observer();
        observador.setname(this._name);
        this._observers = [observador];
    }
    Corderion.prototype.decorateCenfomon = function (item) {
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
    Corderion.prototype.getdefence = function () {
        return this._defence;
    };
    Corderion.prototype.setdefence = function (value) {
        this._defence = value;
    };
    Corderion.prototype.getexperience = function () {
        return this._experience;
    };
    Corderion.prototype.setexperience = function (value) {
        this._experience = value;
    };
    Corderion.prototype.getid = function () {
        return this._id;
    };
    Corderion.prototype.setid = function (value) {
        this._id = value;
    };
    Corderion.prototype.getmovimientos = function () {
        return this._movimientos;
    };
    Corderion.prototype.setmovimientos = function (value) {
        this._movimientos = value;
    };
    Corderion.prototype.getname = function () {
        return this._name;
    };
    Corderion.prototype.setname = function (value) {
        this._name = value;
    };
    Corderion.prototype.getprotection = function () {
        return this._protection;
    };
    Corderion.prototype.setprotection = function (value) {
        this._protection = value;
    };
    Corderion.prototype.getspecie = function () {
        return this._specie;
    };
    Object.defineProperty(Corderion.prototype, "specie", {
        set: function (value) {
            this._specie = value;
        },
        enumerable: false,
        configurable: true
    });
    Corderion.prototype.getvida = function () {
        return this._vida;
    };
    Object.defineProperty(Corderion.prototype, "vida", {
        set: function (value) {
            this._vida = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Corderion.prototype, "rock", {
        get: function () {
            return this._rock;
        },
        set: function (value) {
            this._rock = value;
        },
        enumerable: false,
        configurable: true
    });
    Corderion.prototype.setspecie = function (value) {
        this._specie = value;
    };
    Corderion.prototype.setvida = function (value) {
        this._vida = value;
    };
    Corderion.prototype.getrock = function () {
        return this._rock;
    };
    Corderion.prototype.setrock = function (value) {
        this._rock = value;
    };
    Corderion.prototype.addObserver = function (o) {
        this._observers.push(o);
        this.notifyObervers();
    };
    Corderion.prototype.notifyObervers = function () {
        var _this = this;
        this._observers.forEach(function (element) {
            element.update(_this.getname(), _this.getexperience());
        });
    };
    return Corderion;
}());
export { Corderion };
//# sourceMappingURL=Corderion.js.map