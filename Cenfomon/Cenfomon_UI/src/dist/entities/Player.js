import { Space } from "./Space";
import { Wallet } from "./Wallet";
var Player = (function () {
    function Player() {
        this._wallet = new Wallet();
        this._space = new Space();
        this._key = false;
    }
    Object.defineProperty(Player.prototype, "wallet", {
        get: function () {
            return this._wallet;
        },
        set: function (value) {
            this._wallet = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "space", {
        get: function () {
            return this._space;
        },
        set: function (value) {
            this._space = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "key", {
        get: function () {
            return this._key;
        },
        set: function (value) {
            this._key = value;
        },
        enumerable: false,
        configurable: true
    });
    return Player;
}());
export { Player };
//# sourceMappingURL=Player.js.map