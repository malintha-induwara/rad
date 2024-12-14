// You can define numbers like this too
let oneMilion = 1_000_000
let twoMilion = 2_000_000


let PI:26.218 = 26.218

enum Cars{
    Honda,BMW,Mercedies
}

/**
 * New way to check regex i guess, but dont use it 
 * instead use the perfomance one
 * 
 * string = "(p"
 * 
 * string[0] === '('   -> This is way better
 * 
 */
if(/^\(/.test("(p")){
    console.log("Yeeee");
}


console.log(oneMilion)
console.log(twoMilion)

/**
 * Symbols doesnt work lower than ES2015
 */

// let symbolA = Symbol('a')
// let symbolA2 = Symbol('a')


// console.log(symbolA === symbolA2)


const testObj = {
    something: 'a',
    holaAmigo: 'b'
}

// console.log([1,2,3].at(-1))

const someFun = async (): Promise<String> => {
    return new Promise((resolve, reject) => {
        resolve("Hello"); // Properly resolving the promise
    });
};

someFun();