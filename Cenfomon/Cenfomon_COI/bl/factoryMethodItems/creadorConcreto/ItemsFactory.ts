import { Factory_Method_Items } from "../creador/IFactoryMethodItems"
import { Expansion } from "../productoConcreto/Expansion";
import { Potion } from "../productoConcreto/Potion";
import { Crystal } from "../productoConcreto/Crystal";
import { EvolutionRocks } from "../productoConcreto/EvolutionRocks";
import {Item} from "../Producto/Item";

export class Items_Factory implements Factory_Method_Items{

    createItem(id: number, pLocation : Location, pName: string, pImgURL: string, nPlayerID: number, pCenfomonID: number): Item {

        if(pName == "Expansion"){
            return new Expansion(id, pLocation,  0, pName, pImgURL, 2, nPlayerID)
        }else if(pName == "Potion"){
            return new Potion(id,pLocation, 0, "Potion", pImgURL, "Normal", pCenfomonID)}
        else if(pName == "Med Potion"){
                return new Potion(id,pLocation, 0, "Potion", pImgURL, "Medium", pCenfomonID)
        }  else if(pName == "Max Potion"){
            return new Potion(id,pLocation, 0, "Potion", pImgURL, "Maximum", pCenfomonID)
        }else if (pName == "Crystal Beta"){
            //Cual es el catchRate? Definir como se va a enviar el nombre desde la interfaz
            return new Crystal(id, pLocation, 0, "Crystal", pImgURL, pCenfomonID, 1, "Beta" )
        }else if (pName == "Crystal Alfa"){
            return new Crystal(id, pLocation, 0, "Crystal", pImgURL, pCenfomonID, 2, "Alfa" )
        }else if(pName == "Fire Rock"){
            return new EvolutionRocks(id, pLocation, 0, "Evolution Rocks", pImgURL, pCenfomonID, "Fire")
        }else if(pName == "Dark Rock"){
            return new EvolutionRocks(id, pLocation, 0, "Evolution Rocks", pImgURL, pCenfomonID, "Dark")
        }
        else {
            return new Crystal(id, pLocation, 0, "Crystal", pImgURL, pCenfomonID, 1, "Beta" );
        }
    }

}