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
var FuegoMedio = (function (_super) {
    __extends(FuegoMedio, _super);
    function FuegoMedio() {
        var _this = _super.call(this) || this;
        _this.listaNombres = ["Fuego Fatuo", "Fundir", "Lanzallamas", "Llama", "Llama blanca", "Llama final"];
        var gestorTipo = new GestorTipoElemento();
        _this.tipo = gestorTipo.crearTipoElemento("fuego");
        _this.puntos = 20;
        var indice;
        indice = Math.floor(Math.random() * (_this.listaNombres.length));
        _this.setname(_this.listaNombres[indice]);
        return _this;
    }
    return FuegoMedio;
}(Movimiento));
export { FuegoMedio };
//# sourceMappingURL=FuegoMedio.js.map