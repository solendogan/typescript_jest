import { InvalidOperationException } from "../../src/models/InvalidOperationException";
import { Singleton } from "../../src/patterns/Singleton";

describe.skip("General test for Singleton Class", () => {
  it("Testing a valid singleton with the wrong ID", () => {
    //arrange act assert

    //Arrange
    let expectedID = 100;

    //assert
    expect(() => Singleton.getInstance(700)).toThrow(InvalidOperationException);
  });
});
