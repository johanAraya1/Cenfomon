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
import { GestorMovimiento } from "../../../f_movimiento/GestorMovimiento";
var AtaqueDificil = (function (_super) {
    __extends(AtaqueDificil, _super);
    function AtaqueDificil() {
        var _this = _super.call(this, "dificil") || this;
        _this.gestorMov = new GestorMovimiento();
        return _this;
    }
    AtaqueDificil.prototype.ataque = function (cenfomon) {
        cenfomon.setdefence(10 + cenfomon.getdefence());
        var tiposmov = ["fuego", "agua", "planta", "electrico"];
        var rand = Math.floor(Math.random() * 4);
        cenfomon.getmovimientos().push(this.gestorMov.crearMovimiento(tiposmov[rand], 30));
        return cenfomon.getmovimientos()[rand];
    };
    return AtaqueDificil;
}(AbstractCombate));
export { AtaqueDificil };
//# sourceMappingURL=AtaqueDificil.js.map