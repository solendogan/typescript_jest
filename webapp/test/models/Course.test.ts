import { Course } from "../../src/models/Course";

//Start learning Jest
describe.skip("General test for Course Class", () => {
  let cutStudent: Course;

  beforeEach(() => {
    //console.log("beforeeach is called");
  });

  afterEach(() => {
    // console.log("aftereeach is called");
  });

  it("should  have the right Name ", () => {
    //arrange
    let expected = "any";
    //act
    let actual = new Course("OO1", "Java Programming");

    const val = "courseCode";
    actual[val as keyof Course] = "12";

    console.log(actual); 
    //assert
    //expect(actual._courseCode).toBe(expected);
  });
});
