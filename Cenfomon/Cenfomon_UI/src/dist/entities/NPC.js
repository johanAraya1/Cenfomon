var NPC = (function () {
    function NPC(id, dialog, picture) {
        this._id = id;
        this._dialog = dialog;
        this._picture = picture;
    }
    NPC.prototype.getid = function () {
        return this._id;
    };
    NPC.prototype.setid = function (value) {
        this._id = value;
    };
    Object.defineProperty(NPC.prototype, "dialog", {
        get: function () {
            return this._dialog;
        },
        set: function (value) {
            this._dialog = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NPC.prototype, "picture", {
        get: function () {
            return this._picture;
        },
        set: function (value) {
            this._picture = value;
        },
        enumerable: false,
        configurable: true
    });
    return NPC;
}());
export { NPC };
//# sourceMappingURL=NPC.js.map