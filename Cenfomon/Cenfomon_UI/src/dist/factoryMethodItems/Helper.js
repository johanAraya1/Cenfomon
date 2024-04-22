var Helper = (function () {
    function Helper() {
    }
    Helper.prototype.generarID = function () {
        return 10000 + ((Math.random() * 999));
    };
    return Helper;
}());
export { Helper };
//# sourceMappingURL=Helper.js.map