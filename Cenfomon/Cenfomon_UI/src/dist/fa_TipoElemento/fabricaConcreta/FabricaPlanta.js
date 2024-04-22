import { Planta } from "../productoConcreto/Planta";
var FabricaPlanta = (function () {
    function FabricaPlanta() {
    }
    FabricaPlanta.prototype.crearTipoElemento = function () {
        var planta = new Planta();
        planta.ventajas.push("agua", "electrico", "normal");
        planta.desventajas.push("fuego", "bicho", "volador");
        return planta;
    };
    return FabricaPlanta;
}());
export { FabricaPlanta };
//# sourceMappingURL=FabricaPlanta.js.map