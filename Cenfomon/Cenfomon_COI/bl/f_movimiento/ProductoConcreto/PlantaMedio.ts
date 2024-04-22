import {Movimiento} from "../Producto/Movimiento";
import {GestorTipoElemento} from "../../fa_TipoElemento/GestorTipoElemento";

export class PlantaMedio     extends Movimiento {
    private listaNombres: Array<string> = ["Hierba lazo", "Hoja afilada", "Hoja aguda", "Lanzas", "Látigo", "Látigo Dragón"];

    /**
     * Constructor
     */
    constructor() {
        super();
        let gestorTipo: GestorTipoElemento = new GestorTipoElemento();
        this.tipo = gestorTipo.crearTipoElemento("planta");
        this.puntos = 20;
        let indice: number;
        indice = Math.floor(Math.random() * (this.listaNombres.length));
       this.setname(this.listaNombres[indice]);
    }
}