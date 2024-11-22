// Type Decleration
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var x = 1234;
x = 'abc';
x = false;
// Array Decleration
var numberArray = [23, 12, 45];
var stringArray = ['1', '2', '3'];
var mixedArray = [1, '2', true];
var nothingArray = [];
var typedArray = [];
var stringArray2;
stringArray2 = ['1', '2'];
function printArray(array) {
    array.forEach(function (element) {
        console.log(element);
    });
}
;
// printArray(stringArray2)     //This is compile error because you cant pass 
//string array to a function which expect number type array
printArray(numberArray);
// Spread Operator
var charArray = ['a', 'b'];
var charArray2 = ['c', 'd', 'e'];
var charArray3 = __spreadArray(__spreadArray([], charArray, true), charArray2, true);
console.log(charArray3);
// Tuple
var tupel1 = [1.09, 2.89];
// let tupel2 : [number,string] = [1,1]; //Compile Error
var number1 = tupel1[0], number2 = tupel1[1];
console.log(number1, ':::', number2);
//Enums
var small = 1;
var medium = 2;
var large = 3;
var Values;
(function (Values) {
    Values[Values["SMALL"] = 5] = "SMALL";
    Values[Values["MEDIUM"] = 6] = "MEDIUM";
    Values[Values["HARD"] = 7] = "HARD";
})(Values || (Values = {}));
//Without Const
var Size;
(function (Size) {
    Size["SMALL"] = "a";
    Size["MEDIUM"] = "b";
    Size["LARGE"] = "c";
})(Size || (Size = {}));
var mySize = Size.SMALL;
console.log(Size.SMALL);
console.log(Size.MEDIUM);
console.log(Size.LARGE);
console.log("M" /* Days.MONDAY */);
console.log("T" /* Days.TUESDAY */);
console.log("W" /* Days.WEDNESDAY */);
console.log(Values.SMALL);
console.log(Values.MEDIUM);
console.log(Values.HARD);
