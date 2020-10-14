//BASIC ONE
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//creating (Parent-) Class "Person"
var Person = /** @class */ (function () {
    function Person(firstName, lastName, job) {
        this.firstName = "";
        this.lastName = "";
        this.job = "";
        this.firstName = firstName;
        this.lastName = lastName;
        this.job = job;
    }
    //creating show method (for Class Person);
    Person.prototype.show = function () {
        return "<h1>Basic 1</h1>Hi, my name is " + this.firstName + " " + this.lastName + " and i am working as a " + this.job + ".";
    };
    return Person;
}());
//initialize a Person Object:
var me = new Person("Christian", "Sander", "future-Developer");
//log and print:
console.log(me.show());
document.write('<div>' + me.show() + '</div>');
//creating child of Person-Class calle DetailPerson:
var DetailPerson = /** @class */ (function (_super) {
    __extends(DetailPerson, _super);
    function DetailPerson(firstName, lastName, job, salary, jobLocation) {
        var _this = _super.call(this, firstName, lastName, job) || this;
        _this.salary = salary;
        _this.jobLocation = jobLocation;
        return _this;
    }
    //overwriting show-method for DetailPerson child-class: 	
    DetailPerson.prototype.show = function () {
        return "<h1>Basic 2</h1>Hi, my name is " + this.firstName + " " + this.lastName + " and i am working as a " + this.job + ". I will earn " + this.salary + " and be \n\t\tworking in " + this.jobLocation;
    };
    return DetailPerson;
}(Person));
var detailedPerson = new DetailPerson("Christina", "Snail", "Fotographer", "1.000.000 €UR", "Vienna");
document.write(detailedPerson.show());
