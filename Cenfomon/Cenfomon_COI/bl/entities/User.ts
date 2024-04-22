export class User {

    constructor(private _idPlayer: number, private _email : string, private _name : string, private _alias : string) {
 
       this._idPlayer = _idPlayer;
       this._email = _email;
       this._name = _name;
       this._alias = _alias;
    }
 
    get idPlayer(): number {
       return this._idPlayer;
    }
 
    set idPlayer(value: number) {
       this._idPlayer = value;
    }
 
    get email(): string {
       return this._email;
    }
 
    set email(value: string) {
       this._email = value;
    }
 
    getname(): string {
       return this._name;
    }
 
    setname(value: string): void {
       this._name = value;
    }
 
    get alias(): string {
       return this._alias;
    }
 
    set alias(value: string) {
       this._alias = value;
    }
 }