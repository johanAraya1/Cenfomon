import {ICombate} from "./ICombate";
import {ICenfomon} from "../../../fa_Cenfomon/productoAbstracto/ICenfomon";
import {Movimiento} from "../../../f_movimiento/Producto/Movimiento";

export abstract class AbstractCombate implements ICombate{
    private _estrategia :string;


    constructor(estrategia: string) {
        this._estrategia = estrategia;
    }

    get estrategia(): string {
        return this._estrategia;
    }

    set estrategia(value: string) {
        this._estrategia = value;
    }

    abstract ataque(cenfomon: ICenfomon): Movimiento;


}