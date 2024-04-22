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
var FuegoDebil = (function (_super) {
    __extends(FuegoDebil, _super);
    function FuegoDebil() {
        var _this = _super.call(this) || this;
        _this.listaNombres = ["Ascua", "Lanzallamas", "Anillo de fuego", "Fuego Fatuo",
            "LLama blanca", "Llama Roja", "Llama Negra"];
        var gestorTipo = new GestorTipoElemento();
        _this.tipo = gestorTipo.crearTipoElemento("fuego");
        _this.puntos = 10;
        var indice;
        indice = Math.floor(Math.random() * (_this.listaNombres.length));
        _this.setname(_this.listaNombres[indice]);
        return _this;
    }
    return FuegoDebil;
}(Movimiento));
export { FuegoDebil };
//# sourceMappingURL=FuegoDebil.js.map