export class CefomonMalConstruidoException extends DOMException{

    constructor() {
        super("El Cenfomon que se esta usando esta mal construido o le faltan elementos para implementar la estrategia." +
            "Contacte a su administrador", "Constructor de Cenfomon");
    }
}