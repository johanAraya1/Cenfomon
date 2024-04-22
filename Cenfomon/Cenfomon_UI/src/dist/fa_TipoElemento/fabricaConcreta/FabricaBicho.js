import { Bicho } from "../productoConcreto/Bicho";
var FabricaBicho = (function () {
    function FabricaBicho() {
    }
    FabricaBicho.prototype.crearTipoElemento = function () {
        var bicho = new Bicho();
        bicho.ventajas.push("planta", "Normal", "fantasma");
        bicho.desventajas.push("agua", "fuego", "volador");
        return bicho;
    };
    return FabricaBicho;
}());
export { FabricaBicho };
//# sourceMappingURL=FabricaBicho.js.map