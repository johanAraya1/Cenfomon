import {Fabrica} from "../fabricaAbstracta/IFabrica";
import {ITipoElemento} from "../productoAbstracto/ITipoElemento";
import {Normal} from "../productoConcreto/Normal";

export class FabricaNormal    extends Fabrica{
    crearTipoElemento(): ITipoElemento {
        let normal : Normal = new Normal();
        normal.ventajas.push("electrico", "fantasma");
        normal.desventajas.push("planta","agua", "bicho");
        return normal;
    }

}