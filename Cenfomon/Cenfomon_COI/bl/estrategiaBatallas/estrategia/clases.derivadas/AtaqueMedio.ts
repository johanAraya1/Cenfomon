import {AbstractCombate} from "../base/AbstractCombate";
import {ICenfomon} from "../../../fa_Cenfomon/productoAbstracto/ICenfomon";
import {Movimiento} from "../../../f_movimiento/Producto/Movimiento";

export class AtaqueMedio extends AbstractCombate{


    constructor() {
        super("medio");
    }

    ataque(cenfomon: ICenfomon): Movimiento {
        let rand = Math.floor(Math.random()*2);
        return cenfomon.getmovimientos()[rand];
    }

}