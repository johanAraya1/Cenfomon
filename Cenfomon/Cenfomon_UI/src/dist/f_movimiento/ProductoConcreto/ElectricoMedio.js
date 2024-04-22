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
var ElectricoMedio = (function (_super) {
    __extends(ElectricoMedio, _super);
    function ElectricoMedio() {
        var _this = _super.call(this) || this;
        _this.listaNombres = ["Cortina plasma", "Defensa magnética", "Electrificación", "Electro punzado", "Electrocañón", "Electrotela"];
        var gestorTipo = new GestorTipoElemento();
        _this.tipo = gestorTipo.crearTipoElemento("planta");
        _this.puntos = 20;
        var indice;
        indice = Math.floor(Math.random() * (_this.listaNombres.length));
        _this.setname(_this.listaNombres[indice]);
        return _this;
    }
    return ElectricoMedio;
}(Movimiento));
export { ElectricoMedio };
//# sourceMappingURL=ElectricoMedio.js.map