import {Movimiento} from "./Producto/Movimiento";
import {FabricaAbstractaMovimiento} from "./Creador/FabricaAbstractaMovimiento";
import {FabricaMovimiento} from "./CreadorConcreto/FabricaMovimiento";

export class GestorMovimiento {
    crearMovimiento (tipo: string, puntos: number): Movimiento{
        let fabricaMovimientos : FabricaAbstractaMovimiento = new FabricaMovimiento()
        return fabricaMovimientos.crearMovimiento(tipo,puntos);
    }


}