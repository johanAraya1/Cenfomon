import {ITipoElemento} from "../productoAbstracto/ITipoElemento";


export abstract class Fabrica{
    abstract crearTipoElemento():ITipoElemento;
}