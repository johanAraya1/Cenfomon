import { Player } from "../entities/Player";
import { PermisoProxy } from "./Implementacion/PermisoProxy";
import { IPermisoProxy } from "./Interface/IPermisoProxy";

export class GestorProxy{
    per:IPermisoProxy;
    _player:Player;

    constructor(){
        this.per= new PermisoProxy();
        this._player = new Player();
        this.acceder(this._player);
    }

    acceder(user:Player):Player{
        return user;
    }
}


