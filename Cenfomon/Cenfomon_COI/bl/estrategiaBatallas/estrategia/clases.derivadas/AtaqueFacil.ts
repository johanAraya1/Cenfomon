import {AbstractCombate} from "../base/AbstractCombate";
import {ICenfomon} from "../../../fa_Cenfomon/productoAbstracto/ICenfomon";
import {Movimiento} from "../../../f_movimiento/Producto/Movimiento";

export class AtaqueFacil extends AbstractCombate{

    constructor() {
        super("facil");
    }

    ataque(cenfomon: ICenfomon): Movimiento {
        return cenfomon.getmovimientos()[0];
    }

}