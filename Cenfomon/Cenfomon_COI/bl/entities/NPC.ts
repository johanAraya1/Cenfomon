import { Dialog } from "./Dialog";


export class NPC{
    private _id:number;
    private _dialog:Array<Dialog>;
    private _picture:string;


    constructor(id: number, dialog: Array<Dialog>, picture: string) {
        this._id = id;
        this._dialog = dialog;
        this._picture = picture;
    }


    getid(): number {
        return this._id;
    }

    setid(value: number): void {
        this._id = value;
    }

    get dialog(): Array<Dialog> {
        return this._dialog;
    }

    set dialog(value: Array<Dialog>) {
        this._dialog = value;
    }

    get picture(): string {
        return this._picture;
    }

    set picture(value: string) {
        this._picture = value;
    }
}