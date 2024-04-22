import { GestorMovimiento } from "../../f_movimiento/GestorMovimiento";
import { GestorTipoElemento } from "../../fa_TipoElemento/GestorTipoElemento";
import { Especie } from "../../entities/Especie";
import { Kotias } from "../productoConcreto/Kotias";
var FabricaKotias = (function () {
    function FabricaKotias() {
    }
    FabricaKotias.prototype.crearCenfomon = function () {
        var gestorMov = new GestorMovimiento();
        var gestorTipoElem = new GestorTipoElemento();
        var especie = new Especie();
        var tiposmov = ["fuego", "agua", "planta", "electrico"];
        especie.evolution.push("polartias");
        especie.tipoElemento.push(gestorTipoElem.crearTipoElemento("agua"));
        var cenfomon = new Kotias();
        cenfomon.setspecie(especie);
        var rand = Math.floor(Math.random() * 4);
        var mov1 = gestorMov.crearMovimiento(tiposmov[rand], 10);
        var mov2 = gestorMov.crearMovimiento(tiposmov[rand], 20);
        var mov3 = gestorMov.crearMovimiento(tiposmov[rand], 30);
        cenfomon.getmovimientos().push(mov1, mov2, mov3);
        return cenfomon;
    };
    return FabricaKotias;
}());
export { FabricaKotias };
//# sourceMappingURL=FabricaKotias.js.map