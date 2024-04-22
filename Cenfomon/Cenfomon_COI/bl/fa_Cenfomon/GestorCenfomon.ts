import {FabricaOsotias} from "./fabricaConcreta/FabricaOsotias";
import {FabricaKotias} from "./fabricaConcreta/FabricaKotias";
import {FabricaPolartias} from "./fabricaConcreta/FabricaPolartias";
import {FabricaSalamluna} from "./fabricaConcreta/FabricaSalamluna";
import {FabricaFenuixluna} from "./fabricaConcreta/FabricaFenuixluna";
import {FabricaDragoluna} from "./fabricaConcreta/FabricaDragoluna";
import {FabricaOrucros} from "./fabricaConcreta/FabricaOrucros";
import {FabricaCaporucros} from "./fabricaConcreta/FabricaCaporucros";
import {FabricaMonanrucros} from "./fabricaConcreta/FabricaMonanrucros";
import {FabricaCorder} from "./fabricaConcreta/FabricaCorder";
import {FabricaCorderion} from "./fabricaConcreta/FabricaCorderion";
import {FabricaPamo} from "./fabricaConcreta/FabricaPamo";
import {FabricaMonan} from "./fabricaConcreta/FabricaMonan";
import {FabricaPanantel} from "./fabricaConcreta/FabricaPanantel";
import {FabricaYencorn} from "./fabricaConcreta/FabricaYencorn";
import {FabricaYencornio} from "./fabricaConcreta/FabricaYencornio";
import {FabricaEbren} from "./fabricaConcreta/FabricaEbren";
import {FabricaEbrenum} from "./fabricaConcreta/FabricaEbrenum";
import {FabricaBaji} from "./fabricaConcreta/FabricaBaji";
import {FabricaBajife} from "./fabricaConcreta/FabricaBajife";

export class GestorCenfomon{
    public crearCenfomon (nombre : string){
        switch (nombre){
            case "osotias":
                return new FabricaOsotias();
            case "kotias":
                return new FabricaKotias();
            case "polartias":
                return new FabricaPolartias();
            case "fenixluna":
                return new FabricaFenuixluna();
            case "salamluna":
                return new FabricaSalamluna();
            case "dragoluna":
                return new FabricaDragoluna();
            case "orucros":
                return new FabricaOrucros();
            case "caporucros":
                return new FabricaCaporucros();
            case "monarucros":
                return new FabricaMonanrucros();
            case "corder":
                return new FabricaCorder();
            case "corderion":
                return new FabricaCorderion();
            case "pamo":
                return new FabricaPamo();
            case "monan":
                return new FabricaMonan();
            case "panantel":
                return new FabricaPanantel();
            case "yencorn":
                return new FabricaYencorn();
            case "yencornio":
                return new FabricaYencornio();
            case "ebren":
                return new FabricaEbren();
            case "ebrenum":
                return new FabricaEbrenum();
            case "baji":
                return new FabricaBaji();
            case "bajife":
                return new FabricaBajife();
            default:
                console.log("Error en el nombre del cenfomon que se desea crear, contacte al administrador.")
                return null;
        }
    }
}