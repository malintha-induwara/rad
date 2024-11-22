// function add(x: number, y: number): number {
//   if (x > 10) {
//     return x + y;
//   } else {
//     return x;
//   }
// }

console.log(10,20)


/**Following function is not valid because compiler is not sure about 
 * wether it will return a value or not 
**/

// function addNumbers(x: number, y: number): number {
//     if (x > 10) {
//       return x + y;
//     }
// }

//Sometime you dont have to explicitly mention return type
function addNumbers(x: number, y: number){
      return x + y;   
}

/**
 * This is one way to define functinos
 * 
 */


// function calculate(n1:number,n2:number,calFn: (x:number,y:number) => number){
//     const result = calFn(n1,n2);
//     return result;
// }

// console.log(calculate(10,20,addNumbers))


/**
 * This is the other way
 */



type operatorFn = (x:number,y:number) => number;


function add(n1:number,n2:number): number {
    return n1+n2;
}

const subtract = (n1:number,n2:number):number =>  {
    return n1 -n2
}


function multiply(n1:number,n2:number): number {
    return n1*n2;
}


function calculate(n1:number,n2:number,calFn: operatorFn){
    const result = calFn(n1,n2);
    return result;
}

console.log(calculate(10,20,add))
console.log(calculate(10,20,subtract))
console.log(calculate(10,20,multiply))







