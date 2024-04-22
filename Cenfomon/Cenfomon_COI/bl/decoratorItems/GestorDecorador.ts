
import { Cenfo } from "./componente/Cenfo";
import {Item} from "../factoryMethodItems/Producto/Item";

export class GestorDecorador {

    decorarCenfo(pItem: Item, pCenfomon : Cenfo): void {

      pCenfomon.decorateCenfomon(pItem);
      
    }

}