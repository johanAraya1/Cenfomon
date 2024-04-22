var Space = (function () {
    function Space() {
        this._id = Math.random() + 9999;
        this._credit = 100;
        this._debit = 0;
    }
    Space.prototype.getid = function () {
        return this._id;
    };
    Space.prototype.setid = function (value) {
        this._id = value;
    };
    Object.defineProperty(Space.prototype, "credit", {
        get: function () {
            return this._credit;
        },
        set: function (value) {
            this._credit = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Space.prototype, "debit", {
        get: function () {
            return this._debit;
        },
        set: function (value) {
            this._debit = value;
        },
        enumerable: false,
        configurable: true
    });
    return Space;
}());
export { Space };
//# sourceMappingURL=Space.js.map