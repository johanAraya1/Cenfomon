import { Answer } from "./Answer";
import {NPC} from "./NPC";

export class Message{
    private _id : number;
    private _to : NPC;
    private _from:NPC;
    private _reply: Answer;


    constructor(id: number, to: NPC, from: NPC, reply: Answer) {
        this._id = id;
        this._to = to;
        this._from = from;
        this._reply = reply;
    }


    getid(): number {
        return this._id;
    }

    setid(value: number): void {
        this._id = value;
    }

    get to(): NPC {
        return this._to;
    }

    set to(value: NPC) {
        this._to = value;
    }

    get from(): NPC {
        return this._from;
    }

    set from(value: NPC) {
        this._from = value;
    }

    get reply(): Answer {
        return this._reply;
    }

    set reply(value: Answer) {
        this._reply = value;
    }
}