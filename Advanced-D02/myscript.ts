//parent Class Vehicle
class Vehicle {

	name;
	buyInPrice;
	performanceType;
	seats;
	yearOfProduction;
	kilometersLeft;
	fuel;
	finalPrice;  //not in constructor, will be calculated after object-construction!!
	image;

	
	constructor(name, buyInPrice, performanceType, seats, yearOfProduction, kilometersLeft, fuel, image){
		this.name = name; 
		this.buyInPrice = buyInPrice;
		this.performanceType = performanceType;
		this.seats = seats;
		this.yearOfProduction = yearOfProduction;
		this.kilometersLeft = kilometersLeft;
		this.fuel = fuel;
		this.image = image;

	}
}

class Motorbike extends Vehicle{
	lugageSpace;   //difference to parent vehicle class


	constructor(name, buyInPrice, performanceType, seats, yearOfProduction, kilometersLeft, fuel, image, lugageSpace){
		super(name, buyInPrice, performanceType, seats, yearOfProduction, kilometersLeft, fuel, image);
		this.lugageSpace = lugageSpace;
	}

	calculatePrice(){
		if (this.performanceType == "Economy"){
			var perfTyp = 0.9;
		}
		else if (this.performanceType == "Sport"){
			var perfTyp = 1.0;
		}
		else  {
			var perfTyp = 1.1;
		}
		
		let seats = (this.seats * 0.05) + 1;

		let yeOfProd = 1-((2020 - this.yearOfProduction)/100) ;

		let kilomeLeft = this.kilometersLeft * 0.05;

		if (this.fuel == "Diesel"){
			var fuelCost = 1.1;
		}
		else{
			var fuelCost = 1.0;
		}

		if (this.lugageSpace == "yes"){
			var lugageSp = 1.1;
		}
		else{
			var lugageSp = 1;
		}
		console.log("Calculation for "+this.name+": (Buy Price:) "+ this.buyInPrice+ " X (Performance Typ: "+this.performanceType+") " + perfTyp + " X (Seats: "+this.seats+ ") "+ seats +  "X yearOfProduction-Multiplier: " + yeOfProd + " X (fuel-type-multiplier:) " + fuelCost + " X " + lugageSp +" + "+kilomeLeft+"=");
		
		this.finalPrice = this.buyInPrice * perfTyp * seats * yeOfProd  * fuelCost * lugageSp +kilomeLeft;  //lugageSp increases price if "yes"
		
		return this.finalPrice;	
	}
}

class Truck extends Vehicle {
	transportCapacity;  //difference to normal vehicle ->> capacity in KG affects the price: 

	constructor(name, buyInPrice, performanceType, seats, yearOfProduction, kilometersLeft, fuel, image, transportCapacity){
		super(name, buyInPrice, performanceType, seats, yearOfProduction, kilometersLeft, fuel, image);
		this.transportCapacity = transportCapacity;
	}

	calculatePrice(){
		if (this.performanceType == "Economy"){
			var perfTyp = 0.9;
		}
		else if (this.performanceType == "Sport"){
			var perfTyp = 1.0;
		}
		else  {
			var perfTyp = 1.1;
		}
		
		let seats = (this.seats * 0.05) + 1;

		let yeOfProd = 1-((2020 - this.yearOfProduction)/100) ;

		let kilomeLeft = this.kilometersLeft * 0.05;

		if (this.fuel == "Diesel"){
			var fuelCost = 1.1;
		}
		else{
			var fuelCost = 1.0;
		}

		if (this.transportCapacity <= 10000){
			var transportCap = 0.9;
		}
		
		else if (this.transportCapacity <=30000){
			var transportCap = 1.0;
		}

		else{
			var transportCap = 1.1;
		}
		console.log("Calculation for "+this.name+": (Buy Price:) "+ this.buyInPrice+ " X (Performance Typ: "+this.performanceType+") " + perfTyp + " X (Seats: "+this.seats+ ")" + seats + " X yearOfProduction-Multiplier: " + yeOfProd  + " X (fuel-type-multiplier:) " + fuelCost + " X " + transportCap +" + "+kilomeLeft+"=");
		this.finalPrice = this.buyInPrice * perfTyp * seats * yeOfProd  * fuelCost * transportCap +kilomeLeft;
		
		return this.finalPrice;

	
		}
	}


//Creation of Object starts here
var truck1 = new Truck("Super V100 Truck",10000, "Economy", 3, 1990, 100000, "Diesel", "Image/truck.jpg", 20000);
var truck2 = new Truck("Mega XL3000",15000,"Sport", 5, 2001, 15000, "Diesel", "Image/truck1.jpg", 8000);
var truck3 = new Truck("Mega XL3000",35000,"Sport", 5, 2000, 15000, "Diesel", "Image/truck2.jpg", 8000);

//Calculate price and log into console
console.log(truck1.calculatePrice());
console.log(truck2.calculatePrice());
console.log(truck3.calculatePrice());

var bike1 = new Motorbike("Super Bike 1000",2008, "Sport", 2, 2001, 60000, "Benzin","Image/bike.jpg", "yes");

console.log(bike1.calculatePrice());

var vehicles = new Array;

vehicles.push(truck1, bike1, truck2, truck3);

console.log(vehicles);

for (var i = 0; i < vehicles.length; i++) {
    var number= i;
    let vehic = `      <div class="col-md-4 col-12">
          <div class="card" style="">
              <img class="card-img-top" src=`+vehicles[i].image +` alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">`+vehicles[i].name +`</h5>
                <p class="card-text">
                  <ul class="list-group">	
                    <li class="list-group-item">Performance: `+vehicles[i].performanceType +`</li>
                    <li class="list-group-item">Seats: `+vehicles[i].seats +`</li>
                    <li class="list-group-item">Production Year: `+vehicles[i].yearOfProduction +`</li>
                    <li class="list-group-item">Kilometers Left: `+vehicles[i].kilometersLeft +`</li>
                    <li class="list-group-item">Fueltype: `+vehicles[i].fuel +`</li>
                  </ul>
                </p>
                <a href="#" class="btn btn-primary pricebutton" id = `+number+`>CLICK for Price Details<div id = "priceDiv"></div></a>
              </div>
            </div>          
        </div>`
    $(".bossrow").append(vehic);
    }

 $(document).ready(function(){
  $(".pricebutton").on("click", function(){
    var index = $(this).attr("id");
    var price = vehicles[index].finalPrice;
    
    $(this).parent().find("#priceDiv").html(price+",- EUR");

  })
 });
