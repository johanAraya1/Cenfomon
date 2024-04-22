import { Fuego } from "../productoConcreto/Fuego";
var FabricaFuego = (function () {
    function FabricaFuego() {
    }
    FabricaFuego.prototype.crearTipoElemento = function () {
        var fuego = new Fuego();
        fuego.ventajas.push("planta", "bicho", "volador");
        fuego.desventajas.push("agua", "electrico", "fantasma");
        return fuego;
    };
    return FabricaFuego;
}());
export { FabricaFuego };
//# sourceMappingURL=FabricaFuego.js.map