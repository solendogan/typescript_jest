import { InvalidOperationException } from "../models/InvalidOperationException";

export class Singleton {
  private static _instance: Singleton;

  private static _allowedIDS: Set<number>;
  static {
    this._allowedIDS = new Set<number>([100, 500]);
  }

  private constructor(private readonly _id: number) {}

  //get the instance
  public static getInstance(id: number): Singleton {
    if (Singleton._instance) {
      return Singleton._instance;
    }
    //check valid Ids
    if (this._allowedIDS.has(id)) {
      this._instance = new Singleton(id);
    } else {
      throw new InvalidOperationException(
        "This ID is not allowed here",
        "Singleton.class"
      );
    }

    return Singleton._instance;
  }

  public get Id(): number {
    return this._id;
  }
}
