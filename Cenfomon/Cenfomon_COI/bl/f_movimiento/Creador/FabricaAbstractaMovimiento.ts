import {Movimiento} from "../Producto/Movimiento";


export interface FabricaAbstractaMovimiento {
    crearMovimiento(tipo : string, puntos : number): Movimiento;
}