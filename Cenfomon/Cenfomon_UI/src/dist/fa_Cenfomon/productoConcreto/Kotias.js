import { Especie } from "../../entities/Especie";
import { Observer } from "../../Observer/Concreto/Observer";
var Kotias = (function () {
    function Kotias() {
        this._observers = new Array();
        this._defence = Math.random() + 100;
        this._experience = 0;
        this._id = Math.random() + 9999;
        this._movimientos = new Array();
        this._name = "Kotias";
        this._protection = Math.random() + 100;
        this._specie = new Especie();
        this._vida = 100;
        this._rock = "none";
        var observador = new Observer();
        observador.setname(this._name);
        this._observers = [observador];
    }
    Kotias.prototype.decorateCenfomon = function (item) {
        if (item.getname() == "Potion") {
            var pot = item;
            if (pot.strength == "Normal") {
                this._vida += 20;
                if (this.getvida() > 100) {
                    this.setvida(100);
                }
            }
            else if (pot.strength == "Medium") {
                this._vida += 45;
                if (this.getvida() > 100) {
                    this.setvida(100);
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
    Kotias.prototype.getdefence = function () {
        return this._defence;
    };
    Kotias.prototype.setdefence = function (value) {
        this._defence = value;
    };
    Kotias.prototype.getexperience = function () {
        return this._experience;
    };
    Kotias.prototype.setexperience = function (value) {
        this._experience = value;
    };
    Kotias.prototype.getid = function () {
        return this._id;
    };
    Kotias.prototype.setid = function (value) {
        this._id = value;
    };
    Kotias.prototype.getmovimientos = function () {
        return this._movimientos;
    };
    Kotias.prototype.setmovimientos = function (value) {
        this._movimientos = value;
    };
    Kotias.prototype.getname = function () {
        return this._name;
    };
    Kotias.prototype.setname = function (value) {
        this._name = value;
    };
    Kotias.prototype.getprotection = function () {
        return this._protection;
    };
    Kotias.prototype.setprotection = function (value) {
        this._protection = value;
    };
    Kotias.prototype.getspecie = function () {
        return this._specie;
    };
    Kotias.prototype.getvida = function () {
        return this._vida;
    };
    Kotias.prototype.setspecie = function (value) {
        this._specie = value;
    };
    Kotias.prototype.setvida = function (value) {
        this._vida = value;
    };
    Kotias.prototype.getrock = function () {
        return this._rock;
    };
    Kotias.prototype.setrock = function (value) {
        this._rock = value;
    };
    Kotias.prototype.addObserver = function (o) {
        this._observers.push(o);
        this.notifyObervers();
    };
    Kotias.prototype.notifyObervers = function () {
        var _this = this;
        this._observers.forEach(function (element) {
            element.update(_this.getname(), _this.getexperience());
        });
    };
    return Kotias;
}());
export { Kotias };
//# sourceMappingURL=Kotias.js.map