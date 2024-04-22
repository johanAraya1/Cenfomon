import {Movimiento} from "../Producto/Movimiento";
import {GestorTipoElemento} from "../../fa_TipoElemento/GestorTipoElemento";

export class PlantaAlto     extends Movimiento {
    private listaNombres: Array<string> = ["Pétalos remolino", "Rayo Lunar", "Rosa de sangre", "Semillas drenaje", "Tormenta Floral"];

    /**
     * Constructor
     */
    constructor() {
        super();
        let gestorTipo: GestorTipoElemento = new GestorTipoElemento();
        this.tipo = gestorTipo.crearTipoElemento("planta");
        this.puntos = 30;
        let indice: number;
        indice = Math.floor(Math.random() * (this.listaNombres.length));
       this.setname(this.listaNombres[indice]);
    }
}