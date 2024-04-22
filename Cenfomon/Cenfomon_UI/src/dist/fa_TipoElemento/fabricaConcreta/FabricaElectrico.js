import { Electrico } from "../productoConcreto/Electrico";
var FabricaElectrico = (function () {
    function FabricaElectrico() {
    }
    FabricaElectrico.prototype.crearTipoElemento = function () {
        var electrico = new Electrico();
        electrico.ventajas.push("agua", "fuego", "fantasma");
        electrico.desventajas.push("planta", "volador", "normal");
        return electrico;
    };
    return FabricaElectrico;
}());
export { FabricaElectrico };
//# sourceMappingURL=FabricaElectrico.js.map