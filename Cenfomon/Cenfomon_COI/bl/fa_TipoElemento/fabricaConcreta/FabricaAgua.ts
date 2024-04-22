import {Fabrica} from "../fabricaAbstracta/IFabrica";
import {Agua} from "../productoConcreto/Agua";
import {ITipoElemento} from "../productoAbstracto/ITipoElemento";

export class FabricaAgua extends Fabrica{
    crearTipoElemento(): ITipoElemento {
        let agua : Agua = new Agua();
        agua.ventajas.push("fuego", "volador","normal");
        agua.desventajas.push("planta","electrico", "fantasma");
        return agua;
    }

}