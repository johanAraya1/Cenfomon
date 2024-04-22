import {Map} from "./Map";

export class Game {

    constructor(private _idGame : number, private _idPlayer: number, private _map: Map) {

        this._idGame = _idGame;
        this._idPlayer = _idPlayer;
        this._map = _map;
    }


    get idGame(): number {
        return this._idGame;
    }

    set idGame(value: number) {
        this._idGame = value;
    }

    get idPlayer(): number {
        return this._idPlayer;
    }

    set idPlayer(value: number) {
        this._idPlayer = value;
    }

    get map(): Map {
        return this._map;
    }

    set map(value: Map) {
        this._map = value;
    }
}