// function add(x: number, y: number): number {
//   if (x > 10) {
//     return x + y;
//   } else {
//     return x;
//   }
// }
console.log(10, 20);
/**Following function is not valid because compiler is not sure about
 * wether it will return a value or not
**/
// function addNumbers(x: number, y: number): number {
//     if (x > 10) {
//       return x + y;
//     }
// }
//Sometime you dont have to explicitly mention return type
function addNumbers(x, y) {
    return x + y;
}
function add(n1, n2) {
    return n1 + n2;
}
function subtract(n1, n2) {
    return n1 - n2;
}
function multiply(n1, n2) {
    return n1 * n2;
}
function calculate(n1, n2, calFn) {
    var result = calFn(n1, n2);
    return result;
}
console.log(calculate(10, 20, add));
console.log(calculate(10, 20, subtract));
console.log(calculate(10, 20, multiply));
