import {Item} from "../../factoryMethodItems/Producto/Item";


export interface Cenfo {
    
    decorateCenfomon(item: Item):void;
    getvida():number;
    getrock() :string;
   
}