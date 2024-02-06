import { describe, expect, it, test } from "@jest/globals";
import { IPerson, HOBBY } from "../../src/models/IPerson";
import { IStudentInfo } from "../../src/models/IStudent";
import { Student } from "../../src/models/Student";
import { InvalidOperationException } from "../../src/models/InvalidOperationException";

//Start learning Jest
describe.skip("General test for Student Class", () => {
  let cutStudent: IPerson;

  beforeEach(() => {
    //console.log("beforeeach is called");
    let studentaInfo: IStudentInfo = {
      studentID: 1234,
      grade: 69,
    };
    cutStudent = new Student("Solen",studentaInfo) as IPerson;
  });

  afterEach(() => {
    // console.log("aftereeach is called");
  });

  describe("Make sure Person attributes are set correctly", () => {
    it("should  have the right Name ", () => {
      //arrange
      let expected = "Solen";
      //act
      let actual = cutStudent.Name;

      //assert
      expect(actual).toBe(expected);
    });

    it("should  have the no Hobbies ", () => {
      //arrange
      let expected: Set<HOBBY> = new Set();
      //act
      let actual = cutStudent.Hobbies;
      //assert
      expect(actual).toStrictEqual(expected);
    });

    it("should throw invalidoperationexception when add Hobbies to a Student ", () => {
      //arrange
      //act
      let addHobby =  () => cutStudent.addHobby(HOBBY.SWIMMING);
      //assert
      expect(addHobby).toThrowError(
        InvalidOperationException
      );
    });


    it(" should not modify the prototype of a Student ", () => {
      //arrange
      //act
            
      //assert
    });


  });
});
