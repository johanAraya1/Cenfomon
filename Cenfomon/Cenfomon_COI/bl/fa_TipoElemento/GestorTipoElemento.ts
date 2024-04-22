import {ITipoElemento} from "./productoAbstracto/ITipoElemento";
import {FabricaPlanta} from "./fabricaConcreta/FabricaPlanta";
import {FabricaAgua} from "./fabricaConcreta/FabricaAgua";
import {FabricaFuego} from "./fabricaConcreta/FabricaFuego";
import {FabricaElectrico} from "./fabricaConcreta/FabricaElectrico";
import {FabricaBicho} from "./fabricaConcreta/FabricaBicho";
import {FabricaVolador} from "./fabricaConcreta/FabricaVolador";
import {FabricaNormal} from "./fabricaConcreta/FabricaNormal";
import {FabricaFantasma} from "./fabricaConcreta/FabricaFantasma";

export class GestorTipoElemento{
    public crearTipoElemento(tipo:string) : ITipoElemento {
        switch (tipo){
            case "planta":
                return new FabricaPlanta().crearTipoElemento();
            case "agua":
                return new FabricaAgua().crearTipoElemento();
            case "fuego":
                return new FabricaFuego().crearTipoElemento();
            case "electrico":
                return new FabricaElectrico().crearTipoElemento();
            case "bicho":
                return new FabricaBicho().crearTipoElemento();
            case "volador":
                return new FabricaVolador().crearTipoElemento();
            case "normal":
                return new FabricaNormal().crearTipoElemento();
            case "fantasma":
                return new FabricaFantasma().crearTipoElemento();
            default:
                console.log("Error en el tipo de elemento que se desea crear, contacte al administrador.")
                return new FabricaNormal().crearTipoElemento();
        }

    }

}