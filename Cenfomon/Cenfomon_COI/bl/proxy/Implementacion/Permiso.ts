import { Player } from "../../entities/Player";
import { IPermisoProxy } from "../Interface/IPermisoProxy";

export class Permiso implements IPermisoProxy{
    private _key:boolean;

    get key(): boolean {
        return this._key;
    }
    set key(value: boolean) {
        this._key = value;
    }


    constructor(key: boolean) {
        this._key = key;
    }

    permiso(usuario: Player): Player {
        return usuario;
    }

}