var Demo = /** @class */ (function () {
    // Constructor
    function Demo(name, age) {
        this.name = name;
        this.age = age;
    }
    Demo.prototype.getAge = function () {
        return this.age;
    };
    Demo.prototype.setAge = function (age) {
        this.age = age;
    };
    Demo.prototype.getName = function () {
        return this.name;
    };
    Demo.prototype.setName = function (name) {
        this.name = name;
    };
    // Methods
    Demo.prototype.display = function () {
        console.log("Name: ".concat(this.name, " and Age: ").concat(this.age));
    };
    return Demo;
}());
//You cantnot give 0 as a value
var demo = new Demo("John", 21);
demo.display();
console.log(demo.getName());
demo.setName("Doe");
demo.display();
//Default constructor
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.setName = function (name) {
        this.name = name;
    };
    Car.prototype.getName = function () {
        return this.name;
    };
    Car.prototype.setModel = function (model) {
        this.model = model;
    };
    Car.prototype.getModel = function () {
        return this.model;
    };
    Car.prototype.setYear = function (year) {
        this.year = year;
    };
    Car.prototype.getYear = function () {
        return this.year;
    };
    Car.prototype.display = function () {
        console.log("Name: ".concat(this.name, " Model: ").concat(this.model, " Year: ").concat(this.year));
    };
    return Car;
}());
