import { Especie } from "../../entities/Especie";
import { Observer } from "../../Observer/Concreto/Observer";
var Orucros = (function () {
    function Orucros() {
        this._observers = new Array();
        this._defence = Math.random() + 100;
        this._experience = 0;
        this._id = Math.random() + 9999;
        this._movimientos = new Array();
        this._name = "Orucros";
        this._protection = Math.random() + 100;
        this._specie = new Especie();
        this._vida = 100;
        this._rock = "none";
        var observador = new Observer();
        observador.setname(this._name);
        this._observers = [observador];
    }
    Orucros.prototype.decorateCenfomon = function (item) {
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
    Orucros.prototype.getdefence = function () {
        return this._defence;
    };
    Orucros.prototype.setdefence = function (value) {
        this._defence = value;
    };
    Orucros.prototype.getexperience = function () {
        return this._experience;
    };
    Orucros.prototype.setexperience = function (value) {
        this._experience = value;
    };
    Orucros.prototype.getid = function () {
        return this._id;
    };
    Orucros.prototype.setid = function (value) {
        this._id = value;
    };
    Orucros.prototype.getmovimientos = function () {
        return this._movimientos;
    };
    Orucros.prototype.setmovimientos = function (value) {
        this._movimientos = value;
    };
    Orucros.prototype.getname = function () {
        return this._name;
    };
    Orucros.prototype.setname = function (value) {
        this._name = value;
    };
    Orucros.prototype.getprotection = function () {
        return this._protection;
    };
    Orucros.prototype.setprotection = function (value) {
        this._protection = value;
    };
    Orucros.prototype.getspecie = function () {
        return this._specie;
    };
    Object.defineProperty(Orucros.prototype, "specie", {
        set: function (value) {
            this._specie = value;
        },
        enumerable: false,
        configurable: true
    });
    Orucros.prototype.getvida = function () {
        return this._vida;
    };
    Object.defineProperty(Orucros.prototype, "vida", {
        set: function (value) {
            this._vida = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Orucros.prototype, "rock", {
        get: function () {
            return this._rock;
        },
        set: function (value) {
            this._rock = value;
        },
        enumerable: false,
        configurable: true
    });
    Orucros.prototype.setspecie = function (value) {
        this._specie = value;
    };
    Orucros.prototype.setvida = function (value) {
        this._vida = value;
    };
    Orucros.prototype.getrock = function () {
        return this._rock;
    };
    Orucros.prototype.setrock = function (value) {
        this._rock = value;
    };
    Orucros.prototype.addObserver = function (o) {
        this._observers.push(o);
        this.notifyObervers();
    };
    Orucros.prototype.notifyObervers = function () {
        var _this = this;
        this._observers.forEach(function (element) {
            element.update(_this.getname(), _this.getexperience());
        });
    };
    return Orucros;
}());
export { Orucros };
//# sourceMappingURL=Orucros.js.map