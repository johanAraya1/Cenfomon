import { Especie } from "../../entities/Especie";
import { Observer } from "../../Observer/Concreto/Observer";
var Caporucros = (function () {
    function Caporucros() {
        this._observers = new Array();
        this._defence = Math.random() + 100;
        this._experience = 0;
        this._id = Math.random() + 9999;
        this._movimientos = new Array();
        this._name = "Caporucros";
        this._protection = Math.random() + 100;
        this._specie = new Especie();
        this._vida = 100;
        this._rock = "none";
        var observador = new Observer();
        observador.setname(this._name);
        this._observers = [observador];
    }
    Caporucros.prototype.decorateCenfomon = function (item) {
        if (item.getname() == "Potion") {
            var pot = item;
            if (pot.strength == "Normal") {
                this._vida += 20;
                if (this._vida > 100) {
                    this._vida = 100;
                }
            }
            else if (pot.strength == "Medium") {
                this._vida += 45;
                if (this._vida > 100) {
                    this._vida = 100;
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
    Caporucros.prototype.getdefence = function () {
        return this._defence;
    };
    Caporucros.prototype.setdefence = function (value) {
        this._defence = value;
    };
    Caporucros.prototype.getexperience = function () {
        return this._experience;
    };
    Caporucros.prototype.setexperience = function (value) {
        this._experience = value;
    };
    Caporucros.prototype.getid = function () {
        return this._id;
    };
    Caporucros.prototype.setid = function (value) {
        this._id = value;
    };
    Caporucros.prototype.getmovimientos = function () {
        return this._movimientos;
    };
    Caporucros.prototype.setmovimientos = function (value) {
        this._movimientos = value;
    };
    Caporucros.prototype.getname = function () {
        return this._name;
    };
    Caporucros.prototype.setname = function (value) {
        this._name = value;
    };
    Caporucros.prototype.getprotection = function () {
        return this._protection;
    };
    Caporucros.prototype.setprotection = function (value) {
        this._protection = value;
    };
    Caporucros.prototype.getspecie = function () {
        return this._specie;
    };
    Caporucros.prototype.setspecie = function (value) {
        this._specie = value;
    };
    Caporucros.prototype.getvida = function () {
        return this._vida;
    };
    Caporucros.prototype.setvida = function (value) {
        this._vida = value;
    };
    Caporucros.prototype.getrock = function () {
        return this._rock;
    };
    Caporucros.prototype.setrock = function (value) {
        this._rock = value;
    };
    Caporucros.prototype.addObserver = function (o) {
        this._observers.push(o);
        this.notifyObervers();
    };
    Caporucros.prototype.notifyObervers = function () {
        var _this = this;
        this._observers.forEach(function (element) {
            element.update(_this.getname(), _this.getexperience());
        });
    };
    return Caporucros;
}());
export { Caporucros };
//# sourceMappingURL=Caporucros.js.map