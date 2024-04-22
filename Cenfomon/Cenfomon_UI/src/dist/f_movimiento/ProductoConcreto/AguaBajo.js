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
import { Movimiento } from "../Producto/Movimiento";
import { GestorTipoElemento } from "../../fa_TipoElemento/GestorTipoElemento";
var AguaBajo = (function (_super) {
    __extends(AguaBajo, _super);
    function AguaBajo() {
        var _this = _super.call(this) || this;
        _this.listaNombres = ["Aro de agua", "Ataque Jet", "Baño María", "Bomba de agua", "Buceo", "Burbuja", "Cañón de agua"];
        var gestorTipo = new GestorTipoElemento();
        _this.tipo = gestorTipo.crearTipoElemento("agua");
        _this.puntos = 10;
        var indice;
        indice = Math.floor(Math.random() * (_this.listaNombres.length));
        _this.setname(_this.listaNombres[indice]);
        return _this;
    }
    return AguaBajo;
}(Movimiento));
export { AguaBajo };
//# sourceMappingURL=AguaBajo.js.map