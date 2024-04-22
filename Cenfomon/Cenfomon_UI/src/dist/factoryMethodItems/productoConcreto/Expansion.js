import { Item } from "../Producto/Item";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Expansion = (function (_super) {
    __extends(Expansion, _super);
    function Expansion(_id, _cost, _name, _imgURL, _beltUpgrade, _idUsuario) {
        var _this = _super.call(this, _id, 60, _name, _imgURL) || this;
        _this._beltUpgrade = _beltUpgrade;
        _this._idUsuario = _idUsuario;
        _this._beltUpgrade = _beltUpgrade;
        _this._idUsuario = _idUsuario;
        return _this;
    }
    Expansion.prototype.generarID = function () {
        return { 2000: +((Math.random() * 999)) };
    };
    Object.defineProperty(Expansion.prototype, "beltUpgrade", {
        get: function () {
            return this._beltUpgrade;
        },
        set: function (value) {
            this._beltUpgrade = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Expansion.prototype, "idUsuario", {
        get: function () {
            return this._idUsuario;
        },
        set: function (value) {
            this._idUsuario = value;
        },
        enumerable: false,
        configurable: true
    });
    return Expansion;
}(Item));
export { Expansion };
//# sourceMappingURL=Expansion.js.map