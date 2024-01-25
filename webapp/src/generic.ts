import { Person } from "./models/Person";
import { Student } from "./models/Student";
//Generic

function mirror<T>(param: T): T {
  return param;
}

let str: string = mirror<string>("test");

//generic clone
function clone<T>(list: Array<T>): T[] {
  return [...list];
}

let demo1 = clone<number>([1, 3, 4]);
let demo2 = clone<string>(["1", "3", "4"]);
let demo3 = clone<boolean>([true, false]);

//find what type
function findType<T extends Person>(name: string, list: T[]) {}

findType("solen", [new Student("sol", { grade: 67, studentID: 1234 })]);
