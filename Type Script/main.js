var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// You can define numbers like this too
let oneMilion = 1000000;
let twoMilion = 2000000;
let PI = 26.218;
var Cars;
(function (Cars) {
    Cars[Cars["Honda"] = 0] = "Honda";
    Cars[Cars["BMW"] = 1] = "BMW";
    Cars[Cars["Mercedies"] = 2] = "Mercedies";
})(Cars || (Cars = {}));
/**
 * New way to check regex i guess, but dont use it
 * instead use the perfomance one
 *
 * string = "(p"
 *
 * string[0] === '('   -> This is way better
 *
 */
if (/^\(/.test("(p")) {
    console.log("Yeeee");
}
console.log(oneMilion);
console.log(twoMilion);
/**
 * Symbols doesnt work lower than ES2015
 */
// let symbolA = Symbol('a')
// let symbolA2 = Symbol('a')
// console.log(symbolA === symbolA2)
const testObj = {
    something: 'a',
    holaAmigo: 'b'
};
// console.log([1,2,3].at(-1))
const someFun = () => __awaiter(this, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        resolve("Hello"); // Properly resolving the promise
    });
});
someFun();
