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
var Potion = (function (_super) {
    __extends(Potion, _super);
    function Potion(_id, _cost, _name, _imgURL, _strength, _idCenfomon) {
        var _this = _super.call(this, _id, 90, _name, _imgURL) || this;
        _this._strength = _strength;
        _this._idCenfomon = _idCenfomon;
        _this._idCenfomon = _idCenfomon;
        _this._strength = _strength;
        return _this;
    }
    Potion.prototype.generarID = function () {
        return {};
    };
    Object.defineProperty(Potion.prototype, "strength", {
        get: function () {
            return this._strength;
        },
        set: function (value) {
            this._strength = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Potion.prototype, "idCenfomon", {
        get: function () {
            return this._idCenfomon;
        },
        set: function (value) {
            this._idCenfomon = value;
        },
        enumerable: false,
        configurable: true
    });
    return Potion;
}(Item));
export { Potion };
//# sourceMappingURL=Potion.js.map