import {Fabrica} from "../fabricaAbstracta/IFabrica";
import {ICenfomon} from "../productoAbstracto/ICenfomon";
import {GestorMovimiento} from "../../f_movimiento/GestorMovimiento";
import {GestorTipoElemento} from "../../fa_TipoElemento/GestorTipoElemento";
import {Especie} from "../../entities/Especie";
import {Polartias} from "../productoConcreto/Polartias";

export class FabricaPolartias implements Fabrica{
    crearCenfomon(): ICenfomon {
        let gestorMov = new GestorMovimiento();
        let gestorTipoElem : GestorTipoElemento = new  GestorTipoElemento();
        let especie :Especie =new Especie();
        let tiposmov :Array<string> = ["fuego","agua","planta" , "electrico"];
        especie.tipoElemento.push(gestorTipoElem.crearTipoElemento("agua"));
        let cenfomon : Polartias = new Polartias();
        cenfomon.specie = especie;
        let rand: number = Math.floor(Math.random() * 4);
        let mov1 = gestorMov.crearMovimiento(tiposmov[rand],10);
        let mov2 = gestorMov.crearMovimiento(tiposmov[rand],30);
        let mov3 = gestorMov.crearMovimiento(tiposmov[rand],30);
        cenfomon.getmovimientos().push(mov1,mov2,mov3);
        return cenfomon;
    }

}