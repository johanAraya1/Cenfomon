var batalla = (function () {
    function batalla(id, players, movTime, state, expReward, coins, cenfoReward, itemReward) {
        this._id = id;
        this._players = players;
        this._movTime = movTime;
        this._state = state;
        this._expReward = expReward;
        this._coins = coins;
        this._cenfoReward = cenfoReward;
        this.itemReward = itemReward;
    }
    batalla.prototype.getid = function () {
        return this._id;
    };
    batalla.prototype.setid = function (value) {
        this._id = value;
    };
    Object.defineProperty(batalla.prototype, "players", {
        get: function () {
            return this._players;
        },
        set: function (value) {
            this._players = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(batalla.prototype, "movTime", {
        get: function () {
            return this._movTime;
        },
        set: function (value) {
            this._movTime = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(batalla.prototype, "state", {
        get: function () {
            return this._state;
        },
        set: function (value) {
            this._state = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(batalla.prototype, "expReward", {
        get: function () {
            return this._expReward;
        },
        set: function (value) {
            this._expReward = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(batalla.prototype, "coins", {
        get: function () {
            return this._coins;
        },
        set: function (value) {
            this._coins = value;
        },
        enumerable: false,
        configurable: true
    });
    return batalla;
}());
export { batalla };
//# sourceMappingURL=Batalla.js.map