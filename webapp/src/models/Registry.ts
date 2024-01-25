import { IPerson } from "./IPerson";
import { Person } from "./Person";

export class Registry<T extends Person> {
  private _list: Array<T>;

  static {}

  constructor() {
    this._list = [];
  }

  public add(person: T) {
    this._list.push(person);
  }

  public remove(item: T) {
    let length = this._list.length;
    this._list.splice(length, 1);
  }

  get List() {
    return this._list;
  }
}
