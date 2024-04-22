import { GestorMovimiento } from "../../f_movimiento/GestorMovimiento";
import { GestorTipoElemento } from "../../fa_TipoElemento/GestorTipoElemento";
import { Especie } from "../../entities/Especie";
import { Caporucros } from "../productoConcreto/Caporucros";
var FabricaCaporucros = (function () {
    function FabricaCaporucros() {
    }
    FabricaCaporucros.prototype.crearCenfomon = function () {
        var gestorMov = new GestorMovimiento();
        var gestorTipoElem = new GestorTipoElemento();
        var especie = new Especie();
        var tiposmov = new Array("fuego", "agua", "planta", "electrico");
        especie.evolution.push("monarucros");
        especie.tipoElemento.push(gestorTipoElem.crearTipoElemento("planta"), gestorTipoElem.crearTipoElemento("bicho"));
        var cenfomon = new Caporucros();
        cenfomon.setspecie(especie);
        var rand = Math.floor(Math.random() * 4);
        var mov1 = gestorMov.crearMovimiento(tiposmov[rand], 10);
        var mov2 = gestorMov.crearMovimiento(tiposmov[rand], 20);
        var mov3 = gestorMov.crearMovimiento(tiposmov[rand], 30);
        cenfomon.getmovimientos().push(mov1, mov2, mov3);
        return cenfomon;
    };
    return FabricaCaporucros;
}());
export { FabricaCaporucros };
//# sourceMappingURL=FabricaCaporucros.js.map