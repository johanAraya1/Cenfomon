var Location = (function () {
    function Location(id, zoneName, coorX, coorY, quadrant) {
        this._id = id;
        this._zoneName = zoneName;
        this._coorX = coorX;
        this._coorY = coorY;
        this._quadrant = quadrant;
    }
    Location.prototype.getid = function () {
        return this._id;
    };
    Location.prototype.setid = function (value) {
        this._id = value;
    };
    Object.defineProperty(Location.prototype, "zoneName", {
        get: function () {
            return this._zoneName;
        },
        set: function (value) {
            this._zoneName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Location.prototype, "coorX", {
        get: function () {
            return this._coorX;
        },
        set: function (value) {
            this._coorX = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Location.prototype, "coorY", {
        get: function () {
            return this._coorY;
        },
        set: function (value) {
            this._coorY = value;
        },
        enumerable: false,
        configurable: true
    });
    return Location;
}());
export { Location };
//# sourceMappingURL=Location.js.map