import { AtaqueFacil } from "./estrategia/clases.derivadas/AtaqueFacil";
import { AtaqueMedio } from "./estrategia/clases.derivadas/AtaqueMedio";
import { AtaqueDificil } from "./estrategia/clases.derivadas/AtaqueDificil";
import { CefomonNoSportadoException } from "./util.excepciones/CefomonNoSportadoException";
import { CefomonMalConstruidoException } from "./util.excepciones/CefomonMalConstruidoException";
var GestorEstrategia = (function () {
    function GestorEstrategia() {
        this.basicos = ["Osotias", "Fenixluna", "Orucros", "Corder", "Pamo", "Yencorn", "Ebren", "Baji"];
        this.medios = ["Kotias", "Salamluna", "Caporucros", "Corderion", "Monan", "Yencornio", "Ebrenum", "Bajife"];
        this.avanzados = ["Polartias", "Polartias", "Monarucros", "Panantel"];
    }
    GestorEstrategia.prototype.esoger_estrategia = function (cenfomon) {
        try {
            if (GestorEstrategia.find(this.basicos, cenfomon.getname())) {
                return new AtaqueFacil().ataque(cenfomon);
            }
            else if (GestorEstrategia.find(this.medios, cenfomon.getname())) {
                return new AtaqueMedio().ataque(cenfomon);
            }
            else if (GestorEstrategia.find(this.avanzados, cenfomon.getname())) {
                return new AtaqueDificil().ataque(cenfomon);
            }
            else {
                console.log(new CefomonMalConstruidoException());
                return null;
            }
        }
        catch (e) {
            console.log(new CefomonNoSportadoException());
            return null;
        }
    };
    GestorEstrategia.find = function (array, value) {
        for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
            var arrayItem = array_1[_i];
            if (value == arrayItem) {
                return true;
            }
        }
        return false;
    };
    return GestorEstrategia;
}());
export { GestorEstrategia };
//# sourceMappingURL=GestorEstrategia.js.map