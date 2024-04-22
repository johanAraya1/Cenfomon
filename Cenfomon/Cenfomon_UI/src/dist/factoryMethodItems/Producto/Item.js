var Item = (function () {
    function Item(_id, _cost, _name, _imgURL) {
        this._id = _id;
        this._cost = _cost;
        this._name = _name;
        this._imgURL = _imgURL;
        this.setid(_id);
        this.cost = _cost;
        this.setname(_name);
        this.imgURL = _imgURL;
    }
    Item.prototype.getid = function () { return this._id; };
    Item.prototype.setid = function (value) { this._id = value; };
    Object.defineProperty(Item.prototype, "cost", {
        get: function () { return this._cost; },
        set: function (value) { this._cost = value; },
        enumerable: false,
        configurable: true
    });
    Item.prototype.getname = function () { return this._name; };
    Item.prototype.setname = function (value) { this._name = value; };
    Object.defineProperty(Item.prototype, "imgURL", {
        get: function () { return this._imgURL; },
        set: function (value) { this._imgURL = value; },
        enumerable: false,
        configurable: true
    });
    return Item;
}());
export { Item };
//# sourceMappingURL=Item.js.map