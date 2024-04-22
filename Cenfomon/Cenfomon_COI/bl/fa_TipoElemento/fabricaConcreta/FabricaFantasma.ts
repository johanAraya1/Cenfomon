import {Fabrica} from "../fabricaAbstracta/IFabrica";
import {ITipoElemento} from "../productoAbstracto/ITipoElemento";
import {Fantasma} from "../productoConcreto/Fantasma";

export class FabricaFantasma  extends Fabrica{
    crearTipoElemento(): ITipoElemento {
        let fantasma : Fantasma = new Fantasma();
        fantasma.ventajas.push("agua", "fuego","volador");
        fantasma.desventajas.push("electrico","bicho", "normal");
        return fantasma;
    }

}