import { Util } from "../../src/utility/Util";

describe.skip("Make sure Generic Util finds correctly", () => {
  it.skip("should  find whether the value exists ", () => {
    //arrange
    let expected = true;
    const list = [23, 45, 7];
    const search = 45;

    //act
    let actual = Util.genericFind<number>(list, search);

    //assert
    expect(actual).toBe(expected);
  });

  it("Generic Find should  find whether the value exists ", () => {
    //arrange
    let expected = true;
    const list = [23, 45, 7];
    const search = 45;

    //act
    // Util.asyncGenericFind<number>(list, search)
    //   .then((result) => {
    //     //assert
    //     expect(result).toBe(45);
    //   })
    //   .catch((err) => {
    //     expect(err).toBe(Util.ERROR_MESSAGE);
    //   });
    let actual = Util.asyncFind<number>(list, search);
    expect(actual).toBe(45);
  });
});
