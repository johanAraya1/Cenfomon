import { FabricaAbstractaMovimiento } from "../Creador/FabricaAbstractaMovimiento";
import { Movimiento } from "../Producto/Movimiento";
import {FuegoDebil} from "../ProductoConcreto/FuegoDebil";
import {FuegoMedio} from "../ProductoConcreto/FuegoMedio";
import {FuegoAlto} from "../ProductoConcreto/FuegoAlto";
import {AguaBajo} from "../ProductoConcreto/AguaBajo";
import {AguaMedio} from "../ProductoConcreto/AguaMedio";
import {AguaAlto} from "../ProductoConcreto/AguaAlto";
import {PlantaBajo} from "../ProductoConcreto/PlantaBajo";
import {PlantaMedio} from "../ProductoConcreto/PlantaMedio";
import {PlantaAlto} from "../ProductoConcreto/PlantaAlto";
import {ElectricoBajo} from "../ProductoConcreto/ElectricoBajo";
import {ElectricoMedio} from "../ProductoConcreto/ElectricoMedio";
import {ElectricoAlto} from "../ProductoConcreto/ElectricoAlto";

export class FabricaMovimiento implements FabricaAbstractaMovimiento{

    crearMovimiento(tipo: string, puntos : number): Movimiento {
        switch (tipo) {
            case "fuego":
                if (puntos == 10){
                    return new FuegoDebil();
                }else if (puntos == 20){
                    return new FuegoMedio();
                }else {
                    return new FuegoAlto();
            }
                break;
            case "agua":
                if (puntos == 10){
                    return new AguaBajo();
                }else if (puntos == 20){
                    return new AguaMedio();
                }else {
                    return new AguaAlto();
                }
                break;
            case "planta":
                if (puntos == 10){
                    return new PlantaBajo();
                }else if (puntos == 20){
                    return new PlantaMedio();
                }else {
                    return new PlantaAlto();
                }
                break;
            case "electrico":
                if (puntos == 10){
                    return new ElectricoBajo();
                }else if (puntos == 20){
                    return new ElectricoMedio();
                }else {
                    return new ElectricoAlto();
                }
                break;
            default:
                console.log("Error en el tipo de Movimiento seleccionado. Consulte al administrador. ")
        }
        return new AguaBajo();
    }
}