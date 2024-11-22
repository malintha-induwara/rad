
// Type Decleration

let x: number | string | boolean  = 1234;



x = 'abc'
x = false


// Array Decleration


let numberArray = [23,12,45];
let stringArray = ['1','2','3'];
let mixedArray = [1,'2',true];

let nothingArray = []; 
let typedArray : any[] = [];


let stringArray2: Array<string> ;
stringArray2 = ['1','2'];



function printArray (array: number[]){
    array.forEach((element) => {
        console.log(element)
    })
};



// printArray(stringArray2)     //This is compile error because you cant pass 
                                //string array to a function which expect number type array

printArray(numberArray);


// Spread Operator

let charArray = ['a','b'];
let charArray2 = ['c','d','e'];
let charArray3 = [...charArray,...charArray2];


console.log(charArray3)


// Tuple

let tupel1 : [number,number] = [1.09,2.89];
// let tupel2 : [number,string] = [1,1]; //Compile Error

 
let [number1,number2] = tupel1;

console.log(number1,':::',number2)


//Enums

const small = 1;
const medium = 2;
const large = 3;


//You only need to define staring number if the data type is number
enum Values {
    SMALL = 5,
    MEDIUM ,
    HARD,
}


//If its a string you have to define every value
enum Size {
    SMALL = 'a',
    MEDIUM = 'b',
    LARGE = 'c'
}

//With Const
const enum Days {
    MONDAY = 'M',
    TUESDAY = 'T',
    WEDNESDAY = 'W'
}


const mySize = Size.SMALL;

console.log(Size.SMALL);
console.log(Size.MEDIUM);
console.log(Size.LARGE);

console.log(Days.MONDAY);
console.log(Days.TUESDAY);
console.log(Days.WEDNESDAY);


console.log(Values.SMALL);
console.log(Values.MEDIUM);
console.log(Values.HARD);