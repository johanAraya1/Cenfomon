import {Movimiento} from "../Producto/Movimiento";
import {GestorTipoElemento} from "../../fa_TipoElemento/GestorTipoElemento";

export class ElectricoMedio extends Movimiento {
    private listaNombres: Array<string> = ["Cortina plasma", "Defensa magnética", "Electrificación", "Electro punzado", "Electrocañón", "Electrotela"];

    /**
     * Constructor
     */
    constructor() {
        super();
        let gestorTipo: GestorTipoElemento = new GestorTipoElemento();
        this.tipo = gestorTipo.crearTipoElemento("electrico");
        this.puntos = 20;
        let indice: number;
        indice = Math.floor(Math.random() * (this.listaNombres.length));
       this.setname(this.listaNombres[indice]);
    }
}