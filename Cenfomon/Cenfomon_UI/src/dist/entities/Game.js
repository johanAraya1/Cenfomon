var Game = (function () {
    function Game(_idGame, _idPlayer, _map) {
        this._idGame = _idGame;
        this._idPlayer = _idPlayer;
        this._map = _map;
        this._idGame = _idGame;
        this._idPlayer = _idPlayer;
        this._map = _map;
    }
    Object.defineProperty(Game.prototype, "idGame", {
        get: function () {
            return this._idGame;
        },
        set: function (value) {
            this._idGame = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "idPlayer", {
        get: function () {
            return this._idPlayer;
        },
        set: function (value) {
            this._idPlayer = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "map", {
        get: function () {
            return this._map;
        },
        set: function (value) {
            this._map = value;
        },
        enumerable: false,
        configurable: true
    });
    return Game;
}());
export { Game };
//# sourceMappingURL=Game.js.map