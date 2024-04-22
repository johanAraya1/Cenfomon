import { GestorMovimiento } from "../../f_movimiento/GestorMovimiento";
import { GestorTipoElemento } from "../../fa_TipoElemento/GestorTipoElemento";
import { Especie } from "../../entities/Especie";
import { Osotias } from "../productoConcreto/Osotias";
var FabricaOsotias = (function () {
    function FabricaOsotias() {
    }
    FabricaOsotias.prototype.crearCenfomon = function () {
        var gestorMov = new GestorMovimiento();
        var gestorTipoElem = new GestorTipoElemento();
        var especie = new Especie();
        var tiposmov = ["fuego", "agua", "planta", "electrico"];
        especie.evolution.push("kotias", "polartias");
        especie.tipoElemento.push(gestorTipoElem.crearTipoElemento("agua"));
        var cenfomon = new Osotias();
        cenfomon.specie = especie;
        var rand = Math.floor(Math.random() * 4);
        var mov1 = gestorMov.crearMovimiento(tiposmov[rand], 10);
        var mov2 = gestorMov.crearMovimiento(tiposmov[rand], 20);
        var mov3 = gestorMov.crearMovimiento(tiposmov[rand], 30);
        cenfomon.getmovimientos().push(mov1, mov2, mov3);
        return cenfomon;
    };
    return FabricaOsotias;
}());
export { FabricaOsotias };
//# sourceMappingURL=FabricaOsotias.js.map