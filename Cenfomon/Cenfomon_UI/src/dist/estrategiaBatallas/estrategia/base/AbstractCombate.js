var AbstractCombate = (function () {
    function AbstractCombate(estrategia) {
        this._estrategia = estrategia;
    }
    Object.defineProperty(AbstractCombate.prototype, "estrategia", {
        get: function () {
            return this._estrategia;
        },
        set: function (value) {
            this._estrategia = value;
        },
        enumerable: false,
        configurable: true
    });
    return AbstractCombate;
}());
export { AbstractCombate };
//# sourceMappingURL=AbstractCombate.js.map