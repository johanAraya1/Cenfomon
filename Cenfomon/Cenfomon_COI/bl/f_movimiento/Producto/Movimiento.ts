import {ITipoElemento} from "../../fa_TipoElemento/productoAbstracto/ITipoElemento";
import {Helper} from "../../factoryMethodItems/Helper";

export abstract class Movimiento{
    private _id :number;
    private _name : string;
    private _puntos: number;
    private _tipo :ITipoElemento;
    /**
     * Constructor
     */


    constructor() {
        this._id = new Helper().generarID();
        this._name = "";
        this._puntos = 0;
        this._tipo = new class implements ITipoElemento {};
    }

    /**
     * Get y sets
     */


    getid(): number {
        return this._id;
    }

    setid(value: number): void {
        this._id = value;
    }

    getname(): string {
        return this._name;
    }

    setname(value: string): void {
        this._name = value;
    }

    get puntos(): number {
        return this._puntos;
    }

    set puntos(value: number) {
        this._puntos = value;
    }

    get tipo(): ITipoElemento {
        return this._tipo;
    }

    set tipo(value: ITipoElemento) {
        this._tipo = value;
    }

}