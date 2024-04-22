var User = (function () {
    function User(_idPlayer, _email, _name, _alias) {
        this._idPlayer = _idPlayer;
        this._email = _email;
        this._name = _name;
        this._alias = _alias;
        this._idPlayer = _idPlayer;
        this._email = _email;
        this._name = _name;
        this._alias = _alias;
    }
    Object.defineProperty(User.prototype, "idPlayer", {
        get: function () {
            return this._idPlayer;
        },
        set: function (value) {
            this._idPlayer = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (value) {
            this._email = value;
        },
        enumerable: false,
        configurable: true
    });
    User.prototype.getname = function () {
        return this._name;
    };
    User.prototype.setname = function (value) {
        this._name = value;
    };
    Object.defineProperty(User.prototype, "alias", {
        get: function () {
            return this._alias;
        },
        set: function (value) {
            this._alias = value;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
export { User };
//# sourceMappingURL=User.js.map