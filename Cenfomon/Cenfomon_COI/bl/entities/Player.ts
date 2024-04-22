import { Space } from "./Space";
import { Wallet } from "./Wallet";

export class Player{
    public _wallet:Wallet;
    public _space:Space;
    private _key:boolean;


    constructor() {
        this._wallet = new Wallet(1000);
        this._space = new Space();
        this._key = false;
    }


    get wallet(): Wallet {
        return this._wallet;
    }

    set wallet(value: Wallet) {
        this._wallet = value;
    }

    get space(): Space {
        return this._space;
    }

    set space(value: Space) {
        this._space = value;
    }


    get key(): boolean {
        return this._key;
    }

    set key(value: boolean) {
        this._key = value;
    }
}