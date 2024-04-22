import {Fabrica} from "../fabricaAbstracta/IFabrica";
import {ITipoElemento} from "../productoAbstracto/ITipoElemento";
import {Electrico} from "../productoConcreto/Electrico";

export class FabricaElectrico  extends Fabrica{
    crearTipoElemento(): ITipoElemento {
        let electrico : Electrico = new Electrico();
        electrico.ventajas.push("agua", "fuego","fantasma");
        electrico.desventajas.push("planta", "volador","normal");
        return electrico;
    }

}