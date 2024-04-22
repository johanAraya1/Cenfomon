import {AbstractCombate} from "../base/AbstractCombate";
import {ICenfomon} from "../../../fa_Cenfomon/productoAbstracto/ICenfomon";
import {Movimiento} from "../../../f_movimiento/Producto/Movimiento";
import {GestorMovimiento} from "../../../f_movimiento/GestorMovimiento";

export class AtaqueDificil extends AbstractCombate{
    private gestorMov :GestorMovimiento;


    constructor() {
        super("dificil");
        this.gestorMov = new GestorMovimiento();
    }

    ataque(cenfomon: ICenfomon): Movimiento {
        cenfomon.setdefence(10+cenfomon.getdefence());
        let tiposmov :Array<string> = ["fuego","agua","planta", "electrico"];
        let rand: number = Math.floor(Math.random() * 4);
        cenfomon.getmovimientos().push(this.gestorMov.crearMovimiento(tiposmov[rand],30));
        return cenfomon.getmovimientos()[rand];
    }

}