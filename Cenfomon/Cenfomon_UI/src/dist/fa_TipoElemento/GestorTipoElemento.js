import { FabricaPlanta } from "./fabricaConcreta/FabricaPlanta";
import { FabricaAgua } from "./fabricaConcreta/FabricaAgua";
import { FabricaFuego } from "./fabricaConcreta/FabricaFuego";
import { FabricaElectrico } from "./fabricaConcreta/FabricaElectrico";
import { FabricaBicho } from "./fabricaConcreta/FabricaBicho";
import { FabricaVolador } from "./fabricaConcreta/FabricaVolador";
import { FabricaNormal } from "./fabricaConcreta/FabricaNormal";
import { FabricaFantasma } from "./fabricaConcreta/FabricaFantasma";
var GestorTipoElemento = (function () {
    function GestorTipoElemento() {
    }
    GestorTipoElemento.prototype.crearTipoElemento = function (tipo) {
        switch (tipo) {
            case "planta":
                return new FabricaPlanta();
            case "agua":
                return new FabricaAgua();
            case "fuego":
                return new FabricaFuego();
            case "electrico":
                return new FabricaElectrico();
            case "bicho":
                return new FabricaBicho();
            case "volador":
                return new FabricaVolador();
            case "normal":
                return new FabricaNormal();
            case "fantasma":
                return new FabricaFantasma();
            default:
                console.log("Error en el tipo de elemento que se desea crear, contacte al administrador.");
        }
        return new FabricaNormal();
    };
    return GestorTipoElemento;
}());
export { GestorTipoElemento };
//# sourceMappingURL=GestorTipoElemento.js.map