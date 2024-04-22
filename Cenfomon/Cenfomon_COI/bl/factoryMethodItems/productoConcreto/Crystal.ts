import {Item} from "../Producto/Item";

export class Crystal extends Item {

    //Tipo de Cristal: Alfa, Beta
    constructor( _id: number,  _location: Location,  _cost: number,  _name: string,  _imgURL: string, private _idCenfomon:  number, private _catchRate: number, private _type: string) {
        super(_id,location, 150 ,_name ,_imgURL);
        this._idCenfomon = _idCenfomon;
        this._catchRate = _catchRate;
        this._type = _type;
    }

    public generarID(): number {
        return  3000 +((Math.random() * 999));
    }

    get idCenfomon(): number {
        return this._idCenfomon;
    }

    set idCenfomon(value: number) {
        this._idCenfomon = value;
    }

    get catchRate(): number {
        return this._catchRate;
    }

    set catchRate(value: number) {
        this._catchRate = value;
    }

    get type(): string {
        return this._type;
    }

    set type(value: string) {
        this._type = value;
    }
}