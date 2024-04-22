import {Fabrica} from "../fabricaAbstracta/IFabrica";
import {ITipoElemento} from "../productoAbstracto/ITipoElemento";
import {Planta} from "../productoConcreto/Planta";

export class FabricaPlanta     extends Fabrica{
    crearTipoElemento(): ITipoElemento {
        let planta : Planta = new Planta();
        planta.ventajas.push("agua", "electrico","normal");
        planta.desventajas.push("fuego","bicho", "volador");
        return planta;
    }

}