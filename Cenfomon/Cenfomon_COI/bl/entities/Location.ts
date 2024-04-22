import { Quadrant } from './Quadrant';
export class Location{
    private _id:number;
    private _zoneName:string;
    private _coorX:number;
    private _coorY:number;
    public _quadrant:Quadrant;


    constructor(id: number, zoneName: string, coorX: number, coorY: number, quadrant: Quadrant) {
        this._id = id;
        this._zoneName = zoneName;
        this._coorX = coorX;
        this._coorY = coorY;
        this._quadrant = quadrant;
    }

    getid(): number {
        return this._id;
    }

    setid(value: number): void {
        this._id = value;
    }

    get zoneName(): string {
        return this._zoneName;
    }

    set zoneName(value: string) {
        this._zoneName = value;
    }

    get coorX(): number {
        return this._coorX;
    }

    set coorX(value: number) {
        this._coorX = value;
    }

    get coorY(): number {
        return this._coorY;
    }

    set coorY(value: number) {
        this._coorY = value;
    }
}