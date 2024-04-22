var Wallet = (function () {
    function Wallet() {
        this._id = Math.random() + 9999;
        this._credit = 100;
        this._debit = 0;
        this._total = 100;
    }
    Wallet.prototype.getid = function () {
        return this._id;
    };
    Wallet.prototype.setid = function (value) {
        this._id = value;
    };
    Object.defineProperty(Wallet.prototype, "credit", {
        get: function () {
            return this._credit;
        },
        set: function (value) {
            this._credit = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Wallet.prototype, "debit", {
        get: function () {
            return this._debit;
        },
        set: function (value) {
            this._debit = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Wallet.prototype, "total", {
        get: function () {
            return this._total;
        },
        set: function (value) {
            this._total = value;
        },
        enumerable: false,
        configurable: true
    });
    return Wallet;
}());
export { Wallet };
//# sourceMappingURL=Wallet.js.map