import { InvalidOperationException } from "../../src/models/InvalidOperationException";
import { Singleton } from "../../src/patterns/Singleton";

describe("General test for Singleton Class", () => {
  it.skip("Testing a valid singleton with the right ID", () => {
    //arrange act assert

    //Arrange
    let expectedID = 100;

    //act
    let mySingle1 = Singleton.getInstance(100);

    //assert
    expect(mySingle1).not.toBeNull();
  });

  it("Testing a valid singleton with the wrong ID", () => {
    //arrange act assert

    //Arrange
    let expectedID = 100;

    //assert
    expect(() => Singleton.getInstance(700)).toThrow(InvalidOperationException);
  });
});
