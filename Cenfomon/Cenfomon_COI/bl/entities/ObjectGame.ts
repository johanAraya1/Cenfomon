import {Location} from "./Location";

export abstract class ObjectGame{
    private _id:number;
    private _location:Location;


    constructor(id: number, location: Location) {
        this._id = id;
        this._location = location;
    }


    getid(): number {
        return this._id;
    }

    setid(value: number): void {
        this._id = value;
    }

    get location(): Location {
        return this._location;
    }

    set location(value: Location) {
        this._location = value;
    }
}