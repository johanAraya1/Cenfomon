import {Movimiento} from "../Producto/Movimiento";
import {GestorTipoElemento} from "../../fa_TipoElemento/GestorTipoElemento";

export class ElectricoBajo      extends Movimiento {
    private listaNombres: Array<string> = ["Bola eléctrica", "Campo eléctrico", "Carga", "Carga parábola", "Chispa", "Chispazo", "Colmillo rayo"];

    /**
     * Constructor
     */
    constructor() {
        super();
        let gestorTipo: GestorTipoElemento = new GestorTipoElemento();
        this.tipo = gestorTipo.crearTipoElemento("electrico");
        this.puntos = 10;
        let indice: number;
        indice = Math.floor(Math.random() * (this.listaNombres.length));
       this.setname(this.listaNombres[indice]);
    }
}