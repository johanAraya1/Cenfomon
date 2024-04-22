import { Especie } from "../../entities/Especie";
import { Observer } from "../../Observer/Concreto/Observer";
var Monarucros = (function () {
    function Monarucros() {
        this._observers = new Array();
        this._defence = Math.random() + 100;
        this._experience = 0;
        this._id = Math.random() + 9999;
        this._movimientos = new Array();
        this._name = "Monarucros";
        this._protection = Math.random() + 100;
        this._specie = new Especie();
        this._vida = 100;
        this._rock = "none";
        var observador = new Observer();
        observador.setname(this._name);
        this._observers = [observador];
    }
    Monarucros.prototype.decorateCenfomon = function (item) {
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
    Monarucros.prototype.getdefence = function () {
        return this._defence;
    };
    Monarucros.prototype.setdefence = function (value) {
        this._defence = value;
    };
    Monarucros.prototype.getexperience = function () {
        return this._experience;
    };
    Monarucros.prototype.setexperience = function (value) {
        this._experience = value;
    };
    Monarucros.prototype.getid = function () {
        return this._id;
    };
    Monarucros.prototype.setid = function (value) {
        this._id = value;
    };
    Monarucros.prototype.getmovimientos = function () {
        return this._movimientos;
    };
    Monarucros.prototype.setmovimientos = function (value) {
        this._movimientos = value;
    };
    Monarucros.prototype.getname = function () {
        return this._name;
    };
    Monarucros.prototype.setname = function (value) {
        this._name = value;
    };
    Monarucros.prototype.getprotection = function () {
        return this._protection;
    };
    Monarucros.prototype.setprotection = function (value) {
        this._protection = value;
    };
    Monarucros.prototype.getspecie = function () {
        return this._specie;
    };
    Object.defineProperty(Monarucros.prototype, "specie", {
        set: function (value) {
            this._specie = value;
        },
        enumerable: false,
        configurable: true
    });
    Monarucros.prototype.getvida = function () {
        return this._vida;
    };
    Object.defineProperty(Monarucros.prototype, "vida", {
        set: function (value) {
            this._vida = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Monarucros.prototype, "rock", {
        get: function () {
            return this._rock;
        },
        set: function (value) {
            this._rock = value;
        },
        enumerable: false,
        configurable: true
    });
    Monarucros.prototype.setspecie = function (value) {
        this._specie = value;
    };
    Monarucros.prototype.setvida = function (value) {
        this._vida = value;
    };
    Monarucros.prototype.getrock = function () {
        return this._rock;
    };
    Monarucros.prototype.setrock = function (value) {
        this._rock = value;
    };
    Monarucros.prototype.addObserver = function (o) {
        this._observers.push(o);
        this.notifyObervers();
    };
    Monarucros.prototype.notifyObervers = function () {
        var _this = this;
        this._observers.forEach(function (element) {
            element.update(_this.getname(), _this.getexperience());
        });
    };
    return Monarucros;
}());
export { Monarucros };
//# sourceMappingURL=Monarucros.js.map