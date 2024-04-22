import {Item} from "../Producto/Item";

export class Potion extends Item{

    constructor(_id: number, _location: Location, _cost: number, _name: string, _imgURL: string, private _strength: string, private _idCenfomon: number) {
        super(_id, _location, 90, _name, _imgURL);
        this._idCenfomon = _idCenfomon;
        this._strength = _strength;
    }

    generarID(): {} {
        return {};
    }

    
    get strength(): string {
        return this._strength;
    }

    set strength(value: string) {
        this._strength = value;
    }

    get idCenfomon(): number {
        return this._idCenfomon;
    }

    set idCenfomon(value: number) {
        this._idCenfomon = value;
    }
}
