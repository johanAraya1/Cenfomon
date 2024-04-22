export class CefomonNoSportadoException extends DOMException{

    constructor() {
        super("Este cenfomon no esta soportado en este modulo de estrategia, contacte al administrador", "Cenfomon");
    }
}