
import { Request, testJsonPlaceHolder } from "../../src/api/Request";

//Start learning Jest
describe("General test for Request Class", () => {
    beforeEach(() => {
        //console.log("beforeeach is called");
    });

    afterEach(() => {
        // console.log("aftereeach is called");
    });

    it("should  return the correct Todo ", async () => {
        //arrange
        let expected = {
            userId: 1,
            id: 1,
            title: 'delectus aut autem',
            completed: false
        };
        //act
        let result =  await Request.getTodoFromJsonPlaceholder(1);
        //assert
        expect(result).toStrictEqual(expected);
    });

    it("should  return the correct Swapi Person ", async () => {
        //arrange
        let expected = "Luke Skywalker";
        //act
        let result =  await Request.getPersonFromSwapiAPI(1);

         //assert
         let actualKeys:string[] = Object.keys(result);
         expect(actualKeys).toContain("name");
        // Request.getPersonFromSwapiAPI(1)
        //     .then((result) => {
        //         let actualKeys:string[] = Object.keys(result);
        //         //assert
        //         expect(actualKeys).toContain("Name");
        //     });
    });
});


