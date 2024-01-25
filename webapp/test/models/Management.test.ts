import { Management } from "../../src/models/Management";
import { IStudentInfo } from "../../src/models/IStudent";

//Start learning Jest
describe.skip("General test for Management Class", () => {
  let cutManagement: Management;
  const studentaInfo: IStudentInfo = {
    studentID: 1234,
    grade: 69,
  };
  beforeEach(() => {
    //console.log("beforeeach is called");

    cutManagement = new Management();
  });

  afterEach(() => {
    // console.log("aftereeach is called");
  });

  describe("Make sure Management creates the student correctly", () => {
    it("should  check if student already exists ", () => {
      //arrange
      let expected = true;
      //act
      Management.createStudent("solen",studentaInfo);

      let actual = Management.checkStudentAlreadyExists(studentaInfo);

      //assert
      expect(actual).toBe(expected);
    });
  });
});
