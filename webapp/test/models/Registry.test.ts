import { HOBBY, IPerson } from "../../src/models/IPerson";
import { IStudentInfo } from "../../src/models/IStudent";
import { Person } from "../../src/models/Person";
import { Registry } from "../../src/models/Registry";
import { Student } from "../../src/models/Student";
import { Util } from "../../src/utility/Util";

describe("Make sure Generic Registry  stores correctly", () => {
  it.skip("should  find whether the value exists ", () => {
    //arrange
    const _student: IStudentInfo = {
      studentID: 100,
      grade: 56,
    };
    // let expectedStudent:Student = {
    //   _grade: 56,
    //   //_hobbies: Set<HOBBY>,
    //   _name: "solen",
    //   _studentID: 100,
    //   Grade: 0,
    //   StudentID: 0,
    //   describe: function (): string {
    //     throw new Error("Function not implemented.");
    //   },
    //   Hobbies: new Set<HOBBY>([]),
    //   addHobby: function (hobby: HOBBY): void {
    //     throw new Error("Function not implemented.");
    //   },
    //   removeHobby: function (hobby: HOBBY): void {
    //     throw new Error("Function not implemented.");
    //   },
    //   Name: "",
    //   isValidPerson: function (person: IPerson): boolean {
    //     throw new Error("Function not implemented.");
    //   }
    // };
    //let expected: Student[] = [expectedStudent];
    //act
    const registry = new Registry<Student>();
    registry.add(new Student("Solen",_student));

    //assert
    expect(registry.List.length).toBe(1);
  });
});
