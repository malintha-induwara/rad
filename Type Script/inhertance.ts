class Parent{
    protected myMethod2(str: string){
        console.log(str);
    }

    myMethod(str: string){
        console.log(str);
    }

    constructor(message: string){
        console.log("Parent constructor");
        console.log(message);
    }
}


class Child extends Parent{
    constructor(message: string){
        super(message );
    }
}

const child = new Child("Hello World");

child.myMethod("Something");


//You cant call protected methods outside the class

