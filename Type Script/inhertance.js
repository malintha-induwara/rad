var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Parent = /** @class */ (function () {
    function Parent(message) {
        console.log("Parent constructor");
        console.log(message);
    }
    Parent.prototype.myMethod2 = function (str) {
        console.log(str);
    };
    Parent.prototype.myMethod = function (str) {
        console.log(str);
    };
    return Parent;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child(message) {
        return _super.call(this, message) || this;
    }
    return Child;
}(Parent));
var child = new Child("Hello World");
child.myMethod("Something");
//You cant call protected methods outside the class
