var Observer = (function () {
    function Observer() {
        this._name = "";
    }
    Observer.prototype.getname = function () {
        return this._name;
    };
    Observer.prototype.update = function (name, experience) {
        if (name.toUpperCase() == "OSOTIAS" && experience >= 12) {
            this._name = "Kotias";
        }
        if (name.toUpperCase() == "KOTIAS" && experience >= 32) {
            this._name = "Polartias";
        }
        if (name.toUpperCase() == "FENIXLUNA" && experience >= 12) {
            this._name = "Salamluna";
        }
        if (name.toUpperCase() == "SALAMLUNA" && experience >= 32) {
            this._name = "Dragoluna";
        }
        if (name.toUpperCase() == "ORUCROS" && experience >= 12) {
            this._name = "Caporucros";
        }
        if (name.toUpperCase() == "CAPORUCROS" && experience >= 32) {
            this._name = "Monarucros";
        }
        if (name.toUpperCase() == "CORDER" && experience >= 20) {
            this._name = "Corderion";
        }
        if (name.toUpperCase() == "PAMO" && experience >= 15) {
            this._name = "Monan";
        }
        if (name.toUpperCase() == "MONAN" && experience >= 35) {
            this._name = "Panantel";
        }
        if (name.toUpperCase() == "BAJI" && experience >= 10) {
            this._name = "Bajife";
        }
    };
    Observer.prototype.setname = function (value) {
        this._name = value;
    };
    return Observer;
}());
export { Observer };
//# sourceMappingURL=Observer.js.map