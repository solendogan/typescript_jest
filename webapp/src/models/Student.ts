import { IPerson, HOBBY } from "./IPerson";
import { Person } from "./Person";
import { InvalidOperationException } from "./InvalidOperationException";
import { IStudent } from "./IStudent";


export class Student extends Person {
  private _studentID: number;
  private _grade: number;
  constructor(studentDetails: IStudent) {
    super(studentDetails.studentName);
    this._studentID = studentDetails.studentID;
    this._grade = studentDetails.grade;
  }

  public get Grade() {
    return this._grade;
  }

  public set Grade(newScore: number) {
    this._grade = newScore;
  }

  public get StudentID(): number {
    return this._studentID;
  }

  public override describe(): string {
    return "Student  class";
  }

  //Hobbies are not allowed for students
  public override get Hobbies() {
    return new Set<HOBBY>();
  }

  public override addHobby(hobby: HOBBY): void {
    throw new InvalidOperationException(
      "Hobbies for Students not allowed",
      "Student class"
    );
  }

  public override removeHobby(hobby: HOBBY): void {
    throw new InvalidOperationException(
      "Hobbies for Students not allowed",
      "Student class"
    );
  }
}
