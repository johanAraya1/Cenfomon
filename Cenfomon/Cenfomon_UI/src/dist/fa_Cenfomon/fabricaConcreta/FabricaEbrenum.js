import { GestorMovimiento } from "../../f_movimiento/GestorMovimiento";
import { GestorTipoElemento } from "../../fa_TipoElemento/GestorTipoElemento";
import { Especie } from "../../entities/Especie";
import { Ebrenum } from "../productoConcreto/Ebrenum";
var FabricaEbrenum = (function () {
    function FabricaEbrenum() {
    }
    FabricaEbrenum.prototype.crearCenfomon = function () {
        var gestorMov = new GestorMovimiento();
        var gestorTipoElem = new GestorTipoElemento();
        var especie = new Especie();
        var tiposmov = ["fuego", "agua", "planta", "electrico"];
        especie.tipoElemento.push(gestorTipoElem.crearTipoElemento("volador"), gestorTipoElem.crearTipoElemento("fuego"));
        var cenfomon = new Ebrenum();
        cenfomon.specie = especie;
        var rand = Math.floor(Math.random() * 4);
        var mov1 = gestorMov.crearMovimiento(tiposmov[rand], 10);
        var mov2 = gestorMov.crearMovimiento(tiposmov[rand], 20);
        var mov3 = gestorMov.crearMovimiento(tiposmov[rand], 30);
        cenfomon.getmovimientos().push(mov1, mov2, mov3);
        return cenfomon;
    };
    return FabricaEbrenum;
}());
export { FabricaEbrenum };
//# sourceMappingURL=FabricaEbrenum.js.map