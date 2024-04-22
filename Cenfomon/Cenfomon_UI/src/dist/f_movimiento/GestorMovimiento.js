import { FabricaMovimiento } from "./CreadorConcreto/FabricaMovimiento";
var GestorMovimiento = (function () {
    function GestorMovimiento() {
    }
    GestorMovimiento.prototype.crearMovimiento = function (tipo, puntos) {
        var fabricaMovimientos = new FabricaMovimiento();
        return fabricaMovimientos.crearMovimiento(tipo, puntos);
    };
    return GestorMovimiento;
}());
export { GestorMovimiento };
//# sourceMappingURL=GestorMovimiento.js.map