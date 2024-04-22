import { ICenfomon } from "../fa_Cenfomon/productoAbstracto/ICenfomon";
import {Item} from "../factoryMethodItems/Producto/Item";

export class batalla{
    public _id:number;
    public _players: Array<string>;
    public _movTime:number;
    public _state:string;
    public _expReward:number;
    public _coins:number;
    public _cenfoReward:ICenfomon
    public itemReward:Array<Item>


    constructor(id: number, players: Array<string>, movTime: number, state: string, expReward: number, coins: number, cenfoReward: ICenfomon, itemReward: Array<Item>) {
        this._id = id;
        this._players = players;
        this._movTime = movTime;
        this._state = state;
        this._expReward = expReward;
        this._coins = coins;
        this._cenfoReward = cenfoReward;
        this.itemReward = itemReward;
    }

    getid(): number {
        return this._id;
    }

    setid(value: number): void {
        this._id = value;
    }

    get players(): Array<string> {
        return this._players;
    }

    set players(value: Array<string>) {
        this._players = value;
    }

    get movTime(): number {
        return this._movTime;
    }

    set movTime(value: number) {
        this._movTime = value;
    }

    get state(): string {
        return this._state;
    }

    set state(value: string) {
        this._state = value;
    }

    get expReward(): number {
        return this._expReward;
    }

    set expReward(value: number) {
        this._expReward = value;
    }

    get coins(): number {
        return this._coins;
    }

    set coins(value: number) {
        this._coins = value;
    }


}