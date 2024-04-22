import {Item} from "../Producto/Item";

export class Expansion extends Item{


    constructor(_id: number, _location: Location, _cost: number,_name: string, _imgURL: string, private _beltUpgrade: number, private _idUsuario: number) {
        super(_id, _location , 60 ,_name ,_imgURL);
        this._beltUpgrade = _beltUpgrade;
        this._idUsuario = _idUsuario;
    }

    generarID(): {} {
        return {2000:+((Math.random() * 999))};
    }


    get beltUpgrade(): number {
        return this._beltUpgrade;
    }

    set beltUpgrade(value: number) {
        this._beltUpgrade = value;
    }

    get idUsuario(): number {
        return this._idUsuario;
    }

    set idUsuario(value: number) {
        this._idUsuario = value;
    }
}