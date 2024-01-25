export enum HOBBY {
  TENNIS,
  SWIMMING,
  JOGGING,
}

export interface IPerson {
  _name: String;
  _hobbies?: Set<HOBBY>;
  get Name(): string;
  get Hobbies(): Set<HOBBY> | undefined;
  //optional method
  isValidPerson?(person: IPerson): boolean;
  addHobby(hobby: HOBBY): void;
  removeHobby(hobby: HOBBY): void;
}
