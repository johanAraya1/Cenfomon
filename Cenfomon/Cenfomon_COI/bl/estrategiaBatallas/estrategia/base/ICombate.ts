import {Movimiento} from "../../../f_movimiento/Producto/Movimiento";
import {ICenfomon} from "../../../fa_Cenfomon/productoAbstracto/ICenfomon";

export interface ICombate{
    ataque(cenfomon :ICenfomon) : Movimiento;
}