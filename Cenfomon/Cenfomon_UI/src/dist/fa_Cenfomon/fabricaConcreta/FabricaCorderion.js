import { GestorMovimiento } from "../../f_movimiento/GestorMovimiento";
import { GestorTipoElemento } from "../../fa_TipoElemento/GestorTipoElemento";
import { Especie } from "../../entities/Especie";
import { Corderion } from "../productoConcreto/Corderion";
var FabricaCorderion = (function () {
    function FabricaCorderion() {
    }
    FabricaCorderion.prototype.crearCenfomon = function () {
        var gestorMov = new GestorMovimiento();
        var gestorTipoElem = new GestorTipoElemento();
        var especie = new Especie();
        var tiposmov = ["fuego", "agua", "planta", "electrico"];
        especie.tipoElemento.push(gestorTipoElem.crearTipoElemento("normal"));
        var cenfomon = new Corderion();
        cenfomon.specie = especie;
        var rand = Math.floor(Math.random() * 4);
        var mov1 = gestorMov.crearMovimiento(tiposmov[rand], 10);
        var mov2 = gestorMov.crearMovimiento(tiposmov[rand], 20);
        var mov3 = gestorMov.crearMovimiento(tiposmov[rand], 30);
        cenfomon.getmovimientos().push(mov1, mov2, mov3);
        return cenfomon;
    };
    return FabricaCorderion;
}());
export { FabricaCorderion };
//# sourceMappingURL=FabricaCorderion.js.map