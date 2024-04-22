import { Especie } from "../../entities/Especie";
import { Observer } from "../../Observer/Concreto/Observer";
var Panantel = (function () {
    function Panantel() {
        this._observers = new Array();
        this._defence = Math.random() + 100;
        this._experience = 0;
        this._id = Math.random() + 9999;
        this._movimientos = new Array();
        this._name = "Panantel";
        this._protection = Math.random() + 100;
        this._specie = new Especie();
        this._vida = 100;
        this._rock = "none";
        var observador = new Observer();
        observador.setname(this._name);
        this._observers = [observador];
    }
    Panantel.prototype.decorateCenfomon = function (item) {
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
    Panantel.prototype.getdefence = function () {
        return this._defence;
    };
    Panantel.prototype.setdefence = function (value) {
        this._defence = value;
    };
    Panantel.prototype.getexperience = function () {
        return this._experience;
    };
    Panantel.prototype.setexperience = function (value) {
        this._experience = value;
    };
    Panantel.prototype.getid = function () {
        return this._id;
    };
    Panantel.prototype.setid = function (value) {
        this._id = value;
    };
    Panantel.prototype.getmovimientos = function () {
        return this._movimientos;
    };
    Panantel.prototype.setmovimientos = function (value) {
        this._movimientos = value;
    };
    Panantel.prototype.getname = function () {
        return this._name;
    };
    Panantel.prototype.setname = function (value) {
        this._name = value;
    };
    Panantel.prototype.getprotection = function () {
        return this._protection;
    };
    Panantel.prototype.setprotection = function (value) {
        this._protection = value;
    };
    Panantel.prototype.getspecie = function () {
        return this._specie;
    };
    Object.defineProperty(Panantel.prototype, "specie", {
        set: function (value) {
            this._specie = value;
        },
        enumerable: false,
        configurable: true
    });
    Panantel.prototype.getvida = function () {
        return this._vida;
    };
    Object.defineProperty(Panantel.prototype, "vida", {
        set: function (value) {
            this._vida = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Panantel.prototype, "rock", {
        get: function () {
            return this._rock;
        },
        set: function (value) {
            this._rock = value;
        },
        enumerable: false,
        configurable: true
    });
    Panantel.prototype.setspecie = function (value) {
        this._specie = value;
    };
    Panantel.prototype.setvida = function (value) {
        this._vida = value;
    };
    Panantel.prototype.getrock = function () {
        return this._rock;
    };
    Panantel.prototype.setrock = function (value) {
        this._rock = value;
    };
    Panantel.prototype.addObserver = function (o) {
        this._observers.push(o);
        this.notifyObervers();
    };
    Panantel.prototype.notifyObervers = function () {
        var _this = this;
        this._observers.forEach(function (element) {
            element.update(_this.getname(), _this.getexperience());
        });
    };
    return Panantel;
}());
export { Panantel };
//# sourceMappingURL=Panantel.js.map