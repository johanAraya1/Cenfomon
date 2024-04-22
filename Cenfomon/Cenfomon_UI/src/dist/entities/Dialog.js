var Dialog = (function () {
    function Dialog(id, messages) {
        this._id = id;
        this._messages = messages;
    }
    Dialog.prototype.getid = function () {
        return this._id;
    };
    Dialog.prototype.setid = function (value) {
        this._id = value;
    };
    Object.defineProperty(Dialog.prototype, "messages", {
        get: function () {
            return this._messages;
        },
        set: function (value) {
            this._messages = value;
        },
        enumerable: false,
        configurable: true
    });
    return Dialog;
}());
export { Dialog };
//# sourceMappingURL=Dialog.js.map