import { Item } from "../factoryMethodItems/Producto/Item";
import {Quadrant} from "./Quadrant";


export class Map extends Quadrant{
    //Falta agregar ID
    constructor(_orderPos: number, _imgURL : string, private _QuadrantList: Array<Quadrant>, private _itemsList : Array<Item> ) {
        super(_orderPos, _imgURL );
        this._QuadrantList = _QuadrantList;
        this._itemsList = _itemsList;
    }

    get QuadrantList(): Array<Quadrant> {
        return this._QuadrantList;
    }

    set QuadrantList(value: Array<Quadrant>) {
        this._QuadrantList = value;
    }

    get itemsList(): Array<Item> {
        return this._itemsList;
    }

    set itemsList(value: Array<Item>) {
        this._itemsList = value;
    }
}