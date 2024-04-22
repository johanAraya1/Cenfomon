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
var EvolutionRocks = (function (_super) {
    __extends(EvolutionRocks, _super);
    function EvolutionRocks(_id, _cost, _name, _imgURL, _idCenfomon, _type) {
        var _this = _super.call(this, _id, 100, _name, _imgURL) || this;
        _this._idCenfomon = _idCenfomon;
        _this._type = _type;
        _this._idCenfomon = _idCenfomon;
        _this._type = _type;
        return _this;
    }
    EvolutionRocks.prototype.generarID = function () {
        return { 1400: +((Math.random() * 999)) };
    };
    Object.defineProperty(EvolutionRocks.prototype, "idCenfomon", {
        get: function () {
            return this._idCenfomon;
        },
        set: function (value) {
            this._idCenfomon = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EvolutionRocks.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    return EvolutionRocks;
}(Item));
export { EvolutionRocks };
//# sourceMappingURL=EvolutionRocks.js.map