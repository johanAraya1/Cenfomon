import {ITipoElemento} from "../productoAbstracto/ITipoElemento";
import {Helper} from "../../factoryMethodItems/Helper";

export class  Electrico extends ITipoElemento{
    private _desventajas: Array<string>;
    private _id: number;
    private _name: string;
    private _ventajas: Array<string>;

    /**
     * Constructor vacio
     */

    constructor() {
        super();
        this._desventajas = new Array<string>();
        this._id = new Helper().generarID();
        this._name = "electrico";
        this._ventajas = new Array<string>();
    }

    /**
     * get y sets
     */


    get desventajas(): Array<string> {
        return this._desventajas;
    }

    set desventajas(value: Array<string>) {
        this._desventajas = value;
    }

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

    get ventajas(): Array<string> {
        return this._ventajas;
    }

    set ventajas(value: Array<string>) {
        this._ventajas = value;
    }
}