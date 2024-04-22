import {Movimiento} from "../Producto/Movimiento";
import {GestorTipoElemento} from "../../fa_TipoElemento/GestorTipoElemento";

export class FuegoDebil extends Movimiento{
    private listaNombres :Array<string> = ["Ascua","Lanzallamas", "Anillo de fuego", "Fuego Fatuo",
        "LLama blanca", "Llama Roja", "Llama Negra"];

    /**
     * Constructor
     */
    constructor() {
        super();
        let gestorTipo:GestorTipoElemento = new GestorTipoElemento();
        this.tipo = gestorTipo.crearTipoElemento("fuego");
        this.puntos = 10;
        let indice: number;
        indice = Math.floor(Math.random() * (this.listaNombres.length));
       this.setname(this.listaNombres[indice]);
    }
}