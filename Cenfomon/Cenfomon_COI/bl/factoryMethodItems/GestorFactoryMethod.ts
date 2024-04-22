import {Items_Factory} from "./creadorConcreto/ItemsFactory";
import {Helper} from "./Helper";
import {Item} from "./Producto/Item";

export class Gestor {

   //private static _itemsList : Array<Item> = new Array<Item>();
   private static itemsFactory : Items_Factory = new Items_Factory();
   private static helper : Helper = new Helper();
   

   public newItem(pLocation: Location, pName : string, pImgUrl: string, pPlayerID: number, pCenfomonID: number): Item {
    
        return Gestor.itemsFactory.createItem(Gestor.helper.generarID(),pLocation, pName, pImgUrl, pPlayerID, pCenfomonID)

   }

  // public addItem(pItem:Item):void{

    //   Gestor._itemsList.push(pItem);
  // }

}