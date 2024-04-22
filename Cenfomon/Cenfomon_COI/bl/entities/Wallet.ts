import {Helper} from "../factoryMethodItems/Helper";

export class Wallet{
    private _id:number;
    private _totalCoins:number;


    constructor(coinsInit:number) {
        this._id = new Helper().generarID();
        this._totalCoins = coinsInit;
    }


    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get totalCoins(): number {
        return this._totalCoins;
    }

    set totalCoins(value: number) {
        this._totalCoins = value;
    }

    reduceCoins(amount: number){
        this.totalCoins -= amount;
    }

    addCoins(amount: number){
        this.totalCoins += amount;
    }


}