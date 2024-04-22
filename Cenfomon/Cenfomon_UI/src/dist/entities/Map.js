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
import { Quadrant } from "./Quadrant";
var Map = (function (_super) {
    __extends(Map, _super);
    function Map(_orderPos, _imgURL, _QuadrantList, _itemsList) {
        var _this = _super.call(this, _orderPos, _imgURL) || this;
        _this._QuadrantList = _QuadrantList;
        _this._itemsList = _itemsList;
        _this._QuadrantList = _QuadrantList;
        _this._itemsList = _itemsList;
        return _this;
    }
    Object.defineProperty(Map.prototype, "QuadrantList", {
        get: function () {
            return this._QuadrantList;
        },
        set: function (value) {
            this._QuadrantList = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Map.prototype, "itemsList", {
        get: function () {
            return this._itemsList;
        },
        set: function (value) {
            this._itemsList = value;
        },
        enumerable: false,
        configurable: true
    });
    return Map;
}(Quadrant));
export { Map };
//# sourceMappingURL=Map.js.map