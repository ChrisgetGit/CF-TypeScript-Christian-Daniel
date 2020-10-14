//BASIC ONE


//creating (Parent-) Class "Person"
class Person {
	public firstName = "";
	public lastName = "";
	public job = "";

	constructor (firstName, lastName, job){
		this.firstName = firstName;
		this.lastName = lastName;
		this.job = job;
	}
//creating show method (for Class Person);
	show(){
		return `<h1>Basic 1</h1>Hi, my name is ${this.firstName} ${this.lastName} and i am working as a ${this.job}.`; 
	}

}
//initialize a Person Object:
var me = new Person ("Christian", "Sander", "future-Developer");
//log and print:
console.log(me.show());
document.write('<div>' +me.show()+ '</div>');

//creating child of Person-Class calle DetailPerson:
class DetailPerson extends Person {
	salary;
	jobLocation;

	constructor(firstName, lastName, job, salary, jobLocation){
		super(firstName, lastName, job);
		this.salary = salary;
		this.jobLocation = jobLocation;
	}
//overwriting show-method for DetailPerson child-class: 	
	show(){
		return `<h1>Basic 2</h1>Hi, my name is ${this.firstName} ${this.lastName} and i am working as a ${this.job}. I will earn ${this.salary} and be 
		working in ${this.jobLocation}`; 
	}
}

var detailedPerson = new DetailPerson ("Christina", "Snail", "Fotographer", "1.000.000 €UR", "Vienna");


document.write (detailedPerson.show());