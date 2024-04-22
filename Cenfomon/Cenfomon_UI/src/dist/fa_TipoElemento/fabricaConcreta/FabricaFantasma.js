import { Fantasma } from "../productoConcreto/Fantasma";
var FabricaFantasma = (function () {
    function FabricaFantasma() {
    }
    FabricaFantasma.prototype.crearTipoElemento = function () {
        var fantasma = new Fantasma();
        fantasma.ventajas.push("agua", "fuego", "volador");
        fantasma.desventajas.push("electrico", "bicho", "normal");
        return fantasma;
    };
    return FabricaFantasma;
}());
export { FabricaFantasma };
//# sourceMappingURL=FabricaFantasma.js.map