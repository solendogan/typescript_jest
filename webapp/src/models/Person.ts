import { IPerson, HOBBY } from "./IPerson";

export abstract class Person implements IPerson {
  _hobbies?: Set<HOBBY>;

  constructor(public _name: string, hobbies?: Set<HOBBY>) {
    if (typeof hobbies === "undefined") {
      this._hobbies = new Set<HOBBY>();
    } else {
      this._hobbies = hobbies;
    }
  }

  get Name() {
    return this._name;
  }

  get Hobbies() {
    return this._hobbies;
  }

  addHobby(hobby: HOBBY) {
    this._hobbies?.add(hobby);
  }
  removeHobby(hobby: HOBBY): void {
    this._hobbies?.delete(hobby);
  }

  isValidPerson(person: IPerson): boolean {
    return true;
  }

  public abstract describe(): string;
}
