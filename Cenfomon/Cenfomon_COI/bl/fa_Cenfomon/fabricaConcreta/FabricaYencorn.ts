import {Fabrica} from "../fabricaAbstracta/IFabrica";
import {ICenfomon} from "../productoAbstracto/ICenfomon";
import {GestorMovimiento} from "../../f_movimiento/GestorMovimiento";
import {GestorTipoElemento} from "../../fa_TipoElemento/GestorTipoElemento";
import {Especie} from "../../entities/Especie";
import {Yencorn} from "../productoConcreto/Yencorn";

export class FabricaYencorn implements Fabrica{
    crearCenfomon(): ICenfomon {
        let gestorMov = new GestorMovimiento();
        let gestorTipoElem : GestorTipoElemento = new  GestorTipoElemento();
        let especie :Especie =new Especie();
        let tiposmov :Array<string> = ["fuego","agua","planta", "electrico"];
        especie.tipoElemento.push(gestorTipoElem.crearTipoElemento("fantasma"));
        especie.evolution.push("yencornio");
        let cenfomon : Yencorn = new Yencorn();
        cenfomon.specie = especie;
        let rand: number = Math.floor(Math.random() * 4);
        let mov1 = gestorMov.crearMovimiento(tiposmov[rand],10);
        let mov2 = gestorMov.crearMovimiento(tiposmov[rand],20);
        let mov3 = gestorMov.crearMovimiento(tiposmov[rand],30);
        cenfomon.getmovimientos().push(mov1,mov2,mov3);
        return cenfomon;
    }

}