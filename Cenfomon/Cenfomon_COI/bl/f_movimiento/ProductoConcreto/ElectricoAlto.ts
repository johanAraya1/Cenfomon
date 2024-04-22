import {Movimiento} from "../Producto/Movimiento";
import {GestorTipoElemento} from "../../fa_TipoElemento/GestorTipoElemento";

export class ElectricoAlto       extends Movimiento {
    private listaNombres: Array<string> = ["Gigavatios", "Golpe eléctrico", "Onda trueno", "Rayo", "Shock Estático", "Trueno"];

    /**
     * Constructor
     */
    constructor() {
        super();
        let gestorTipo: GestorTipoElemento = new GestorTipoElemento();
        this.tipo = gestorTipo.crearTipoElemento("electrico");
        this.puntos = 30;
        let indice: number;
        indice = Math.floor(Math.random() * (this.listaNombres.length));
       this.setname(this.listaNombres[indice]);
    }
}