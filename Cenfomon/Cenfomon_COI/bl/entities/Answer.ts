
export class Answer {
 // Atributos
  private _id: number;
  //private _options: Map <string, Dialog>;
//constructor 

  constructor(id: number) {
    this._id = id;
    //this._options = options;
  }

//get & set


  getid(): number {
    return this._id;
  }

  setid(value: number): void {
    this._id = value;
  }

//  get options(): Map<string, Dialog> {
//    return this._options;
//  }

//  set options(value: Map<string, Dialog>) {
//    this._options = value;
//  }
}