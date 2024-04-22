import {Movimiento} from "../Producto/Movimiento";
import {GestorTipoElemento} from "../../fa_TipoElemento/GestorTipoElemento";

export class PlantaBajo    extends Movimiento {
    private listaNombres: Array<string> = ["Absorber", "Danza floral", "Dormilona", "Espinas", "Espora", "Follaje", "Giga drenaje"];

    /**
     * Constructor
     */
    constructor() {
        super();
        let gestorTipo: GestorTipoElemento = new GestorTipoElemento();
        this.tipo = gestorTipo.crearTipoElemento("planta");
        this.puntos = 10;
        let indice: number;
        indice = Math.floor(Math.random() * (this.listaNombres.length));
       this.setname(this.listaNombres[indice]);
    }
}