import {Fabrica} from "../fabricaAbstracta/IFabrica";
import {ITipoElemento} from "../productoAbstracto/ITipoElemento";
import {Bicho} from "../productoConcreto/Bicho";

export class FabricaBicho extends Fabrica{
    crearTipoElemento(): ITipoElemento {
        let bicho : Bicho = new Bicho();
        bicho.ventajas.push("planta", "Normal","fantasma");
        bicho.desventajas.push("agua", "fuego", "volador");
        return bicho;
    }

}