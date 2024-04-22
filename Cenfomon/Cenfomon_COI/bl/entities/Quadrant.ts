export class Quadrant extends Location {
    
//Hereda de location
    //Falta agregar ID que se hereda de location
    constructor(private _orderPos: number, private _imgURL: string) {
        super();
        this.orderPos = _orderPos;
        this._imgURL = _imgURL;
    }


    get orderPos(): number {
        return this._orderPos;
    }

    set orderPos(value: number) {
        this._orderPos = value;
    }


    get imgURL(): string {
        return this._imgURL;
    }

    set imgURL(value: string) {
        this._imgURL = value;
    }

}