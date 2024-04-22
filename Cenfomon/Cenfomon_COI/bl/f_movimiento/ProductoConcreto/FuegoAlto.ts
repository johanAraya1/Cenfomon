import {Movimiento} from "../Producto/Movimiento";
import {GestorTipoElemento} from "../../fa_TipoElemento/GestorTipoElemento";

export class FuegoAlto  extends Movimiento {
    private listaNombres: Array<string> = ["Llama Negra", "Llama Roja", "Lluvia de lava", "Puño de fuego", "Rueda de fuego", "Venganza de fuego"];

    /**
     * Constructor
     */
    constructor() {
        super();
        let gestorTipo: GestorTipoElemento = new GestorTipoElemento();
        this.tipo = gestorTipo.crearTipoElemento("fuego");
        this.puntos = 30;
        let indice: number;
        indice = Math.floor(Math.random() * (this.listaNombres.length));
       this.setname(this.listaNombres[indice]);
    }
}