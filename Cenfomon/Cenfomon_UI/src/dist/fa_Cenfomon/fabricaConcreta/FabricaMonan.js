import { GestorMovimiento } from "../../f_movimiento/GestorMovimiento";
import { GestorTipoElemento } from "../../fa_TipoElemento/GestorTipoElemento";
import { Especie } from "../../entities/Especie";
import { Monan } from "../productoConcreto/Monan";
var FabricaMonan = (function () {
    function FabricaMonan() {
    }
    FabricaMonan.prototype.crearCenfomon = function () {
        var gestorMov = new GestorMovimiento();
        var gestorTipoElem = new GestorTipoElemento();
        var especie = new Especie();
        var tiposmov = ["fuego", "agua", "planta", "electrico"];
        especie.tipoElemento.push(gestorTipoElem.crearTipoElemento("electrico"), gestorTipoElem.crearTipoElemento("normal"));
        especie.evolution.push("panantel");
        var cenfomon = new Monan();
        cenfomon.specie = especie;
        var rand = Math.floor(Math.random() * 4);
        var mov1 = gestorMov.crearMovimiento(tiposmov[rand], 10);
        var mov2 = gestorMov.crearMovimiento(tiposmov[rand], 20);
        var mov3 = gestorMov.crearMovimiento(tiposmov[rand], 30);
        cenfomon.getmovimientos().push(mov1, mov2, mov3);
        return cenfomon;
    };
    return FabricaMonan;
}());
export { FabricaMonan };
//# sourceMappingURL=FabricaMonan.js.map