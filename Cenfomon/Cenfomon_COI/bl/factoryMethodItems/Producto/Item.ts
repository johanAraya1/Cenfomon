
export abstract class Item {


    constructor(private _id: number, private _location : Location, private _cost : number, private _name : string, private _imgURL : string) {
        this.setid(_id);
        this._location = _location;
        this.cost = _cost;
        this.setname(_name);
        this.imgURL = _imgURL;

    }

    public abstract generarID(): {}

  // public abstract getDetails(): {}

    getid(): number {return this._id;}

    setid(value: number): void {this._id = value;}


    get location(): Location {
        return this._location;
    }

    set location(value: Location) {
        this._location = value;
    }

    get cost(): number {return this._cost;}

    set cost(value: number) {this._cost = value;}

    getname(): string {return this._name;}

    setname(value: string): void {this._name = value;}

    get imgURL(): string {return this._imgURL;}

    set imgURL(value: string) {this._imgURL = value;}
}