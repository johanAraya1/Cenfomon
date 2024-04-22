import { Normal } from "../productoConcreto/Normal";
var FabricaNormal = (function () {
    function FabricaNormal() {
    }
    FabricaNormal.prototype.crearTipoElemento = function () {
        var normal = new Normal();
        normal.ventajas.push("electrico", "fantasma");
        normal.desventajas.push("planta", "agua", "bicho");
        return normal;
    };
    return FabricaNormal;
}());
export { FabricaNormal };
//# sourceMappingURL=FabricaNormal.js.map