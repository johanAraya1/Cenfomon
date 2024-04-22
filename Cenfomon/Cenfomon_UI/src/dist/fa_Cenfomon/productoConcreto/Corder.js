import { Especie } from "../../entities/Especie";
import { Observer } from "../../Observer/Concreto/Observer";
var Corder = (function () {
    function Corder() {
        this._observers = new Array();
        this._defence = Math.random() + 100;
        this._experience = 0;
        this._id = Math.random() + 9999;
        this._movimientos = new Array();
        this._name = "Corder";
        this._protection = Math.random() + 100;
        this._specie = new Especie();
        this._vida = 100;
        this._rock = "none";
        var observador = new Observer();
        observador.setname(this._name);
        this._observers = [observador];
    }
    Corder.prototype.decorateCenfomon = function (item) {
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
    Corder.prototype.getdefence = function () {
        return this._defence;
    };
    Corder.prototype.setdefence = function (value) {
        this._defence = value;
    };
    Corder.prototype.getexperience = function () {
        return this._experience;
    };
    Corder.prototype.setexperience = function (value) {
        this._experience = value;
    };
    Corder.prototype.getid = function () {
        return this._id;
    };
    Corder.prototype.setid = function (value) {
        this._id = value;
    };
    Corder.prototype.getmovimientos = function () {
        return this._movimientos;
    };
    Corder.prototype.setmovimientos = function (value) {
        this._movimientos = value;
    };
    Corder.prototype.getname = function () {
        return this._name;
    };
    Corder.prototype.setname = function (value) {
        this._name = value;
    };
    Corder.prototype.getprotection = function () {
        return this._protection;
    };
    Corder.prototype.setprotection = function (value) {
        this._protection = value;
    };
    Corder.prototype.getspecie = function () {
        return this._specie;
    };
    Object.defineProperty(Corder.prototype, "specie", {
        set: function (value) {
            this._specie = value;
        },
        enumerable: false,
        configurable: true
    });
    Corder.prototype.getvida = function () {
        return this._vida;
    };
    Object.defineProperty(Corder.prototype, "vida", {
        set: function (value) {
            this._vida = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Corder.prototype, "rock", {
        get: function () {
            return this._rock;
        },
        set: function (value) {
            this._rock = value;
        },
        enumerable: false,
        configurable: true
    });
    Corder.prototype.setspecie = function (value) {
        this._specie = value;
    };
    Corder.prototype.setvida = function (value) {
        this._vida = value;
    };
    Corder.prototype.getrock = function () {
        return this._rock;
    };
    Corder.prototype.setrock = function (value) {
        this._rock = value;
    };
    Corder.prototype.addObserver = function (o) {
        this._observers.push(o);
        this.notifyObervers();
    };
    Corder.prototype.notifyObervers = function () {
        var _this = this;
        this._observers.forEach(function (element) {
            element.update(_this.getname(), _this.getexperience());
        });
    };
    return Corder;
}());
export { Corder };
//# sourceMappingURL=Corder.js.map