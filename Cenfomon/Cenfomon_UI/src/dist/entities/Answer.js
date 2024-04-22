var Answer = (function () {
    function Answer(id) {
        this._id = id;
    }
    Answer.prototype.getid = function () {
        return this._id;
    };
    Answer.prototype.setid = function (value) {
        this._id = value;
    };
    return Answer;
}());
export { Answer };
//# sourceMappingURL=Answer.js.map