//functions
//type Sum =(val1:number,val2:number)=>number;

interface Sum {
  (par1: number, par2: number): number;
}

let sum: Sum;
sum = (value1: number, value2: number) => value1 + value2;

//lets test
type Combinable = number | string;

//function overloads so that we still have the Type information!
function add(par1: number, par2: number): number;
function add(par1: number, par2: string): string;
function add(par1: string, par2: number): string;
function add(par1: string, par2: string): string;

//Adds two strings or two numbers
function add(par1: Combinable, par2: Combinable) {
  if (typeof par1 == "string" || typeof par2 == "string") {
    return par1.toString() + par2.toString();
  }
  return par1 + par2;
}

//We can keep the type information
let result1 = add(12, "12");
let result2 = add("12", "12");
let result3 = add("12", 1);
let result4 = add(12, 12);
