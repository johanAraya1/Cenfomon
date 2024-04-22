import {Fabrica} from "../fabricaAbstracta/IFabrica";
import {ITipoElemento} from "../productoAbstracto/ITipoElemento";
import {Volador} from "../productoConcreto/Volador";

export class FabricaVolador  extends Fabrica{
    crearTipoElemento(): ITipoElemento {
        let volador : Volador = new Volador();
        volador.ventajas.push("agua", "electrico","normal");
        volador.desventajas.push("fuego","bicho", "volador");
        return volador;
    }

}