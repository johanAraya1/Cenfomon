import {Movimiento} from "../Producto/Movimiento";
import {GestorTipoElemento} from "../../fa_TipoElemento/GestorTipoElemento";

export class FuegoMedio extends Movimiento{
    private listaNombres :Array<string> = ["Fuego Fatuo", "Fundir", "Lanzallamas", "Llama", "Llama blanca", "Llama final"];

    /**
     * Constructor
     */
    constructor() {
        super();
        let gestorTipo:GestorTipoElemento = new GestorTipoElemento();
        this.tipo = gestorTipo.crearTipoElemento("fuego");
        this.puntos = 20;
        let indice: number;
        indice = Math.floor(Math.random() * (this.listaNombres.length));
       this.setname(this.listaNombres[indice]);
    }
}