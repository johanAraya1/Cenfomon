import { Agua } from "../productoConcreto/Agua";
var FabricaAgua = (function () {
    function FabricaAgua() {
    }
    FabricaAgua.prototype.crearTipoElemento = function () {
        var agua = new Agua();
        agua.ventajas.push("fuego", "volador", "normal");
        agua.desventajas.push("planta", "electrico", "fantasma");
        return agua;
    };
    return FabricaAgua;
}());
export { FabricaAgua };
//# sourceMappingURL=FabricaAgua.js.map