import {Fabrica} from "../fabricaAbstracta/IFabrica";
import {ITipoElemento} from "../productoAbstracto/ITipoElemento";
import {Fuego} from "../productoConcreto/Fuego";

export class FabricaFuego   extends Fabrica{
    crearTipoElemento(): ITipoElemento {
        let fuego : Fuego = new Fuego();
        fuego.ventajas.push("planta", "bicho","volador");
        fuego.desventajas.push("agua","electrico", "fantasma");
        return fuego;
    }

}