var ObjectGame = (function () {
    function ObjectGame(id, location) {
        this._id = id;
        this._location = location;
    }
    ObjectGame.prototype.getid = function () {
        return this._id;
    };
    ObjectGame.prototype.setid = function (value) {
        this._id = value;
    };
    Object.defineProperty(ObjectGame.prototype, "location", {
        get: function () {
            return this._location;
        },
        set: function (value) {
            this._location = value;
        },
        enumerable: false,
        configurable: true
    });
    return ObjectGame;
}());
export { ObjectGame };
//# sourceMappingURL=ObjectGame.js.map