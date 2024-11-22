
interface Person {
    fName: string;
    Address: string;
    age: number;
}

class Customer{
    fName: string;
    Address: string;
    age: number;
}

const person1 ={
    fName: "Hello",
    Address: "Galle",
    age: 25
}

// const person : {fName:string,Address:string,age:number}  = {
//     fName: "Hello",
//     Address: "Galle",
//     age: 25
// }

const person : Person = {
    fName: "Hello",
    Address: "Galle",
    age: 25
}


const customer : Customer = {
    fName: "Hello",
    Address: "Galle",
    age: 25
}

