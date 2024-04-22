import { Especie } from "../../entities/Especie";
import { Observer } from "../../Observer/Concreto/Observer";
var Baji = (function () {
    function Baji() {
        this._observers = new Array();
        this._defence = Math.random() + 100;
        this._experience = 0;
        this._id = Math.random() + 9999;
        this._movimientos = new Array();
        this._name = "Baji";
        this._protection = Math.random() + 100;
        this._specie = new Especie();
        this._vida = 100;
        this._rock = "none";
        var observador = new Observer();
        observador.setname(this._name);
        this._observers = [observador];
    }
    Baji.prototype.decorateCenfomon = function (item) {
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
    Baji.prototype.getdefence = function () {
        return this._defence;
    };
    Baji.prototype.setdefence = function (value) {
        this._defence = value;
    };
    Baji.prototype.getexperience = function () {
        return this._experience;
    };
    Baji.prototype.setexperience = function (value) {
        this._experience = value;
    };
    Baji.prototype.getid = function () {
        return this._id;
    };
    Baji.prototype.setid = function (value) {
        this._id = value;
    };
    Baji.prototype.getmovimientos = function () {
        return this._movimientos;
    };
    Baji.prototype.setmovimientos = function (value) {
        this._movimientos = value;
    };
    Baji.prototype.getname = function () {
        return this._name;
    };
    Baji.prototype.setname = function (value) {
        this._name = value;
    };
    Baji.prototype.getprotection = function () {
        return this._protection;
    };
    Baji.prototype.setprotection = function (value) {
        this._protection = value;
    };
    Baji.prototype.getspecie = function () {
        return this._specie;
    };
    Object.defineProperty(Baji.prototype, "specie", {
        set: function (value) {
            this._specie = value;
        },
        enumerable: false,
        configurable: true
    });
    Baji.prototype.getvida = function () {
        return this._vida;
    };
    Object.defineProperty(Baji.prototype, "vida", {
        set: function (value) {
            this._vida = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Baji.prototype, "rock", {
        get: function () {
            return this._rock;
        },
        set: function (value) {
            this._rock = value;
        },
        enumerable: false,
        configurable: true
    });
    Baji.prototype.setspecie = function (value) {
        this._specie = value;
    };
    Baji.prototype.setvida = function (value) {
        this._vida = value;
    };
    Baji.prototype.getrock = function () {
        return this._rock;
    };
    Baji.prototype.setrock = function (value) {
        this._rock = value;
    };
    Baji.prototype.addObserver = function (o) {
        this._observers.push(o);
        this.notifyObervers();
    };
    Baji.prototype.notifyObervers = function () {
        var _this = this;
        this._observers.forEach(function (element) {
            element.update(_this.getname(), _this.getexperience());
        });
    };
    return Baji;
}());
export { Baji };
//# sourceMappingURL=Baji.js.map