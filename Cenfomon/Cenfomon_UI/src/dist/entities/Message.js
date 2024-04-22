var Message = (function () {
    function Message(id, to, from, reply) {
        this._id = id;
        this._to = to;
        this._from = from;
        this._reply = reply;
    }
    Message.prototype.getid = function () {
        return this._id;
    };
    Message.prototype.setid = function (value) {
        this._id = value;
    };
    Object.defineProperty(Message.prototype, "to", {
        get: function () {
            return this._to;
        },
        set: function (value) {
            this._to = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Message.prototype, "from", {
        get: function () {
            return this._from;
        },
        set: function (value) {
            this._from = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Message.prototype, "reply", {
        get: function () {
            return this._reply;
        },
        set: function (value) {
            this._reply = value;
        },
        enumerable: false,
        configurable: true
    });
    return Message;
}());
export { Message };
//# sourceMappingURL=Message.js.map