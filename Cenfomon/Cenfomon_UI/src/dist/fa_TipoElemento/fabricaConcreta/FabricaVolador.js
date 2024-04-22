import { Volador } from "../productoConcreto/Volador";
var FabricaVolador = (function () {
    function FabricaVolador() {
    }
    FabricaVolador.prototype.crearTipoElemento = function () {
        var volador = new Volador();
        volador.ventajas.push("agua", "electrico", "normal");
        volador.desventajas.push("fuego", "bicho", "volador");
        return volador;
    };
    return FabricaVolador;
}());
export { FabricaVolador };
//# sourceMappingURL=FabricaVolador.js.map