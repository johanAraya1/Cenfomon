import {Movimiento} from "../Producto/Movimiento";
import {GestorTipoElemento} from "../../fa_TipoElemento/GestorTipoElemento";

export class AguaMedio    extends Movimiento {
    private listaNombres: Array<string> = ["Cascada", "Chorro Afilado", "Chorro de agua", "Cola de agua", "Defensa Acuosa", "Defensa de vapor"];

    /**
     * Constructor
     */
    constructor() {
        super();
        let gestorTipo: GestorTipoElemento = new GestorTipoElemento();
        this.tipo = gestorTipo.crearTipoElemento("agua");
        this.puntos = 20;
        let indice: number;
        indice = Math.floor(Math.random() * (this.listaNombres.length));
       this.setname(this.listaNombres[indice]);
    }
}