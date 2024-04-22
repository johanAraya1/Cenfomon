import {Item} from "../Producto/Item";

export class EvolutionRocks extends Item{

    constructor(_id: number, _location: Location, _cost: number, _name: string, _imgURL: string, private _idCenfomon: number, private _type: string) {
        super(_id, location, 100, _name, _imgURL);
        this._idCenfomon = _idCenfomon;
        this._type = _type;
    }

    generarID(): {} {
        return {1400: +((Math.random() * 999))};
    }

    get idCenfomon(): number {
        return this._idCenfomon;
    }

    set idCenfomon(value: number) {
        this._idCenfomon = value;
    }

    get type(): string {
        return this._type;
    }

    set type(value: string) {
        this._type = value;
    }
}