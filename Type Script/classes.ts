class Demo {
  // Properties
  private name: string;
  private age: number;

  // Constructor
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getAge(): number {
    return this.age;
  }

  setAge(age: number): void {
    this.age = age;
  }

  getName(): string {
    return this.name;
  }

  setName(name: string): void {
    this.name = name;
  }

  // Methods
  display(): void {
    console.log(`Name: ${this.name} and Age: ${this.age}`);
  }
}

//You cantnot give 0 as a value

const demo = new Demo("John", 0b10101);

demo.display();
console.log(demo.getName());
demo.setName("Doe");
demo.display();



//Default constructor

class Car{
    private name: string;
    private model: string;
    private year: number;

    setName(name: string): void{
        this.name = name;
    }

    getName(): string{
        return this.name;
    }

    setModel(model: string): void{
        this.model = model;
    }

    getModel(): string{
        return this.model;
    }

    setYear(year: number): void{
        this.year = year;
    }

    getYear(): number{
        return this.year;
    }

    display(): void{
        console.log(`Name: ${this.name} Model: ${this.model} Year: ${this.year}`);
    }
}


