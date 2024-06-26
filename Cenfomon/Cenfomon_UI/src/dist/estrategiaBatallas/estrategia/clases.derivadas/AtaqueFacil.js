var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { AbstractCombate } from "../base/AbstractCombate";
var AtaqueFacil = (function (_super) {
    __extends(AtaqueFacil, _super);
    function AtaqueFacil() {
        return _super.call(this, "facil") || this;
    }
    AtaqueFacil.prototype.ataque = function (cenfomon) {
        return cenfomon.getmovimientos()[0];
    };
    return AtaqueFacil;
}(AbstractCombate));
export { AtaqueFacil };
//# sourceMappingURL=AtaqueFacil.js.map