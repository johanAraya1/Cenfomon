import { Player } from "../../entities/Player";
import { IPermisoProxy } from "../Interface/IPermisoProxy";
import { Permiso } from "./Permiso";


export class PermisoProxy implements IPermisoProxy{
    private _per:Permiso;
    private _key:boolean;


    constructor() {
        this._per = new Permiso(false);
        this._key = false;
    }


    get per(): Permiso {
        return this._per;
    }

    set per(value: Permiso) {
        this._per = value;
    }

    get key(): boolean {
        return this._key;
    }

    set key(value: boolean) {
        this._key = value;
    }

    permiso(usuario:Player):Player{
        if(usuario.key == false){            
            usuario.key = true;           
        }
     
        return usuario;
    }
}