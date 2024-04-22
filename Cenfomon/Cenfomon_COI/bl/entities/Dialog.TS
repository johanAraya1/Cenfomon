import { Message } from './Message';
export class Dialog{
    private _id:number;
    private _messages:Array<Message>;


    constructor(id: number, messages: Array<Message>) {
        this._id = id;
        this._messages = messages;
    }


    getid(): number {
        return this._id;
    }

    setid(value: number): void {
        this._id = value;
    }

    get messages(): Array<Message> {
        return this._messages;
    }

    set messages(value: Array<Message>) {
        this._messages = value;
    }
}