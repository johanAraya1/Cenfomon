import { GestorMovimiento } from "../../f_movimiento/GestorMovimiento";
import { GestorTipoElemento } from "../../fa_TipoElemento/GestorTipoElemento";
import { Especie } from "../../entities/Especie";
import { Salamluna } from "../productoConcreto/Salamluna";
var FabricaSalamluna = (function () {
    function FabricaSalamluna() {
    }
    FabricaSalamluna.prototype.crearCenfomon = function () {
        var gestorMov = new GestorMovimiento();
        var gestorTipoElem = new GestorTipoElemento();
        var especie = new Especie();
        var tiposmov = ["fuego", "agua", "planta", "electrico"];
        especie.evolution.push("dragoluna");
        especie.tipoElemento.push(gestorTipoElem.crearTipoElemento("fuego"));
        var cenfomon = new Salamluna();
        cenfomon.specie = especie;
        var rand = Math.floor(Math.random() * 4);
        var mov1 = gestorMov.crearMovimiento(tiposmov[rand], 10);
        var mov2 = gestorMov.crearMovimiento(tiposmov[rand], 20);
        var mov3 = gestorMov.crearMovimiento(tiposmov[rand], 30);
        cenfomon.getmovimientos().push(mov1, mov2, mov3);
        return cenfomon;
    };
    return FabricaSalamluna;
}());
export { FabricaSalamluna };
//# sourceMappingURL=FabricaSalamluna.js.map