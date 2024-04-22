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
var Quadrant = (function (_super) {
    __extends(Quadrant, _super);
    function Quadrant(_orderPos, _imgURL) {
        var _this = _super.call(this) || this;
        _this._orderPos = _orderPos;
        _this._imgURL = _imgURL;
        _this.orderPos = _orderPos;
        _this._imgURL = _imgURL;
        return _this;
    }
    Object.defineProperty(Quadrant.prototype, "orderPos", {
        get: function () {
            return this._orderPos;
        },
        set: function (value) {
            this._orderPos = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Quadrant.prototype, "imgURL", {
        get: function () {
            return this._imgURL;
        },
        set: function (value) {
            this._imgURL = value;
        },
        enumerable: false,
        configurable: true
    });
    return Quadrant;
}(Location));
export { Quadrant };
//# sourceMappingURL=Quadrant.js.map