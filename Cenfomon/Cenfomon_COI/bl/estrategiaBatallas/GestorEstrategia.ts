import { Movimiento } from "../f_movimiento/Producto/Movimiento";
import { ICenfomon } from "../fa_Cenfomon/productoAbstracto/ICenfomon";
import { AtaqueFacil } from "./estrategia/clases.derivadas/AtaqueFacil";
import { AtaqueMedio } from "./estrategia/clases.derivadas/AtaqueMedio";
import { AtaqueDificil } from "./estrategia/clases.derivadas/AtaqueDificil";
import { CefomonNoSportadoException } from "./util.excepciones/CefomonNoSportadoException";
import { CefomonMalConstruidoException } from "./util.excepciones/CefomonMalConstruidoException";

export class GestorEstrategia {
    private basicos: Array<string> = ["Osotias", "Fenixluna", "Orucros", "Corder", "Pamo", "Yencorn", "Ebren", "Baji"];
    private medios: Array<string> = ["Kotias", "Salamluna", "Caporucros", "Corderion", "Monan", "Yencornio", "Ebrenum", "Bajife"];
    private avanzados: Array<string> = ["Polartias", "Polartias", "Monarucros", "Panantel"];


    constructor() {
    }

    public esoger_estrategia(cenfomon: ICenfomon): Movimiento | null {
        try {
            if (GestorEstrategia.find(this.basicos, cenfomon.getname())) {
                return new AtaqueFacil().ataque(cenfomon);
            } else if (GestorEstrategia.find(this.medios, cenfomon.getname())) {
                return new AtaqueMedio().ataque(cenfomon);
            } else if (GestorEstrategia.find(this.avanzados, cenfomon.getname())) {
                return new AtaqueDificil().ataque(cenfomon);
            } else {
                console.log(new CefomonMalConstruidoException());
                return null;
            }
        } catch (e) {
            console.log(new CefomonNoSportadoException());
            return null;
        }
    }

    private static find(array: Array<string>, value: string): boolean {
        for (const arrayItem of array) {
            if (value == arrayItem) {
                return true;
            }
        }
        return false;
    }
}