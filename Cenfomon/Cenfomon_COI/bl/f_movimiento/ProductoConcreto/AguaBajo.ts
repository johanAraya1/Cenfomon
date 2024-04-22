import {Movimiento} from "../Producto/Movimiento";
import {GestorTipoElemento} from "../../fa_TipoElemento/GestorTipoElemento";

export class AguaBajo   extends Movimiento {
    private listaNombres: Array<string> = ["Aro de agua", "Ataque Jet", "Baño María", "Bomba de agua", "Buceo", "Burbuja", "Cañón de agua"];

    /**
     * Constructor
     */
    constructor() {
        super();
        let gestorTipo: GestorTipoElemento = new GestorTipoElemento();
        this.tipo = gestorTipo.crearTipoElemento("agua");
        this.puntos = 10;
        let indice: number;
        indice = Math.floor(Math.random() * (this.listaNombres.length));
       this.setname(this.listaNombres[indice]);
    }
}