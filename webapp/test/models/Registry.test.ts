import { IStudent } from "../../src/models/IStudent";
import { Person } from "../../src/models/Person";
import { Registry } from "../../src/models/Registry";
import { Student } from "../../src/models/Student";
import { Util } from "../../src/utility/Util";

describe.skip("Make sure Generic Util finds correctly", () => {
  it.skip("should  find whether the value exists ", () => {
    //arrange
    let expected = true;
    const list = [23, 45, 7];
    const search = 45;
    const _student: IStudent = {
      studentName: "solen",
      studentID: 100,
      grade: 56,
    };
    //act
    const registry = new Registry<Student>();
    registry.add(new Student(_student));

    //assert
    // expect(actual).toBe(expected);
  });
});
