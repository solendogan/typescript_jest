export class InvalidOperationException extends Error {
    constructor(msg: string,private _className:string) {
      super(msg);
    }
  }