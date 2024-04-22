import {ITipoElemento} from "../fa_TipoElemento/productoAbstracto/ITipoElemento";
import {Helper} from "../factoryMethodItems/Helper";

export class Especie{
    private _id : number;
    private _name : string;
    private _gender : string;
    private _captureRate: number;
    private _imgUrl: string;
    private _location: Location;
    private _evolution : Array<string>;
    private _tipoElemento : Array<ITipoElemento>;


    constructor() {
        this._id = new Helper().generarID();
        this._name = "";
        let rand = new Helper().generarRand100();
        if(rand>50){
            this._gender = "M";
        }else {
            this._gender = "F";
        }
        this._captureRate = new Helper().generarRand100();
        this._imgUrl = "";
        this._location = new Location();
        this._evolution = new Array<string>();
        this._tipoElemento = new Array<ITipoElemento>();
    }


    getid(): number {
        return this._id;
    }

    setid(value: number): void {
        this._id = value;
    }

    getname(): string {
        return this._name;
    }

    setname(value: string): void {
        this._name = value;
    }

    get gender(): string {
        return this._gender;
    }

    set gender(value: string) {
        this._gender = value;
    }

    get captureRate(): number {
        return this._captureRate;
    }

    set captureRate(value: number) {
        this._captureRate = value;
    }

    get imgUrl(): string {
        return this._imgUrl;
    }

    set imgUrl(value: string) {
        this._imgUrl = value;
    }

    get location(): Location {
        return this._location;
    }

    set location(value: Location) {
        this._location = value;
    }

    get evolution(): Array<string> {
        return this._evolution;
    }

    set evolution(value: Array<string>) {
        this._evolution = value;
    }

    get tipoElemento(): Array<ITipoElemento> {
        return this._tipoElemento;
    }

    set tipoElemento(value: Array<ITipoElemento>) {
        this._tipoElemento = value;
    }
}