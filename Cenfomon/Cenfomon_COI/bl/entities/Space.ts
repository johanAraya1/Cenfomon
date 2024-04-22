import {ICenfomon} from "../fa_Cenfomon/productoAbstracto/ICenfomon";
import {Item} from "../factoryMethodItems/Producto/Item";
import {Helper} from "../factoryMethodItems/Helper";

export class Space{
    private _id:number;
    private _cenfomones:Array<ICenfomon>;
    private _items:Array<Item>;


    constructor() {
        this._id = new Helper().generarID();
        this._cenfomones = new Array<ICenfomon>();
        this._items = new Array<Item>();
    }


    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get cenfomones(): Array<ICenfomon> {
        return this._cenfomones;
    }

    set cenfomones(value: Array<ICenfomon>) {
        this._cenfomones = value;
    }

    get items(): Array<Item> {
        return this._items;
    }

    set items(value: Array<Item>) {
        this._items = value;
    }

    agregarCenfomon(cenfomon:ICenfomon){
        this._cenfomones.push(cenfomon);
    }

    agregarItem(item:Item){
        this._items.push(item);
    }

}