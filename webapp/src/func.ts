//functions
//type Sum =(val1:number,val2:number)=>number;

interface Sum{
    (par1:number,par2:number):number;
}

let sum:Sum;
 sum = (value1:number,value2:number)=>value1 + value2;



