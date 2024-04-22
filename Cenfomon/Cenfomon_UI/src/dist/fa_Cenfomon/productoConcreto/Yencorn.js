import { Especie } from "../../entities/Especie";
import { Observer } from "../../Observer/Concreto/Observer";
var Yencorn = (function () {
    function Yencorn() {
        this._observers = new Array();
        this._defence = Math.random() + 100;
        this._experience = 0;
        this._id = Math.random() + 9999;
        this._movimientos = new Array();
        this._name = "Yencorn";
        this._protection = Math.random() + 100;
        this._specie = new Especie();
        this._vida = 100;
        this._rock = "none";
        var observador = new Observer();
        observador.setname(this._name);
        this._observers = [observador];
    }
    Yencorn.prototype.decorateCenfomon = function (item) {
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
    Yencorn.prototype.getdefence = function () {
        return this._defence;
    };
    Yencorn.prototype.setdefence = function (value) {
        this._defence = value;
    };
    Yencorn.prototype.getexperience = function () {
        return this._experience;
    };
    Yencorn.prototype.setexperience = function (value) {
        this._experience = value;
    };
    Yencorn.prototype.getid = function () {
        return this._id;
    };
    Yencorn.prototype.setid = function (value) {
        this._id = value;
    };
    Yencorn.prototype.getmovimientos = function () {
        return this._movimientos;
    };
    Yencorn.prototype.setmovimientos = function (value) {
        this._movimientos = value;
    };
    Yencorn.prototype.getname = function () {
        return this._name;
    };
    Yencorn.prototype.setname = function (value) {
        this._name = value;
    };
    Yencorn.prototype.getprotection = function () {
        return this._protection;
    };
    Yencorn.prototype.setprotection = function (value) {
        this._protection = value;
    };
    Yencorn.prototype.getspecie = function () {
        return this._specie;
    };
    Object.defineProperty(Yencorn.prototype, "specie", {
        set: function (value) {
            this._specie = value;
        },
        enumerable: false,
        configurable: true
    });
    Yencorn.prototype.getvida = function () {
        return this._vida;
    };
    Object.defineProperty(Yencorn.prototype, "vida", {
        set: function (value) {
            this._vida = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Yencorn.prototype, "rock", {
        get: function () {
            return this._rock;
        },
        set: function (value) {
            this._rock = value;
        },
        enumerable: false,
        configurable: true
    });
    Yencorn.prototype.setspecie = function (value) {
        this._specie = value;
    };
    Yencorn.prototype.setvida = function (value) {
        this._vida = value;
    };
    Yencorn.prototype.getrock = function () {
        return this._rock;
    };
    Yencorn.prototype.setrock = function (value) {
        this._rock = value;
    };
    Yencorn.prototype.addObserver = function (o) {
        this._observers.push(o);
        this.notifyObervers();
    };
    Yencorn.prototype.notifyObervers = function () {
        var _this = this;
        this._observers.forEach(function (element) {
            element.update(_this.getname(), _this.getexperience());
        });
    };
    return Yencorn;
}());
export { Yencorn };
//# sourceMappingURL=Yencorn.js.map