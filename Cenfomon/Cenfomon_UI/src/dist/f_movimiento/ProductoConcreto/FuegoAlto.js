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
var FuegoAlto = (function (_super) {
    __extends(FuegoAlto, _super);
    function FuegoAlto() {
        var _this = _super.call(this) || this;
        _this.listaNombres = ["Llama Negra", "Llama Roja", "Lluvia de lava", "Puño de fuego", "Rueda de fuego", "Venganza de fuego"];
        var gestorTipo = new GestorTipoElemento();
        _this.tipo = gestorTipo.crearTipoElemento("fuego");
        _this.puntos = 30;
        var indice;
        indice = Math.floor(Math.random() * (_this.listaNombres.length));
        _this.setname(_this.listaNombres[indice]);
        return _this;
    }
    return FuegoAlto;
}(Movimiento));
export { FuegoAlto };
//# sourceMappingURL=FuegoAlto.js.map