import {Item} from "../Producto/Item";

export interface Factory_Method_Items {

    createItem(id: number, pLocation : Location, pName: string, pImgURL: string, pPlayerID : number, pCenfomonID: number): Item;

}