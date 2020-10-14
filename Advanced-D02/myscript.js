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
//parent Class Vehicle
var Vehicle = /** @class */ (function () {
    function Vehicle(name, buyInPrice, performanceType, seats, yearOfProduction, kilometersLeft, fuel, image) {
        this.name = name;
        this.buyInPrice = buyInPrice;
        this.performanceType = performanceType;
        this.seats = seats;
        this.yearOfProduction = yearOfProduction;
        this.kilometersLeft = kilometersLeft;
        this.fuel = fuel;
        this.image = image;
    }
    return Vehicle;
}());
var Motorbike = /** @class */ (function (_super) {
    __extends(Motorbike, _super);
    function Motorbike(name, buyInPrice, performanceType, seats, yearOfProduction, kilometersLeft, fuel, image, lugageSpace) {
        var _this = _super.call(this, name, buyInPrice, performanceType, seats, yearOfProduction, kilometersLeft, fuel, image) || this;
        _this.lugageSpace = lugageSpace;
        return _this;
    }
    Motorbike.prototype.calculatePrice = function () {
        if (this.performanceType == "Economy") {
            var perfTyp = 0.9;
        }
        else if (this.performanceType == "Sport") {
            var perfTyp = 1.0;
        }
        else {
            var perfTyp = 1.1;
        }
        var seats = (this.seats * 0.05) + 1;
        var yeOfProd = 1 - ((2020 - this.yearOfProduction) / 100);
        var kilomeLeft = this.kilometersLeft * 0.05;
        if (this.fuel == "Diesel") {
            var fuelCost = 1.1;
        }
        else {
            var fuelCost = 1.0;
        }
        if (this.lugageSpace == "yes") {
            var lugageSp = 1.1;
        }
        else {
            var lugageSp = 1;
        }
        console.log("Calculation for " + this.name + ": (Buy Price:) " + this.buyInPrice + " X (Performance Typ: " + this.performanceType + ") " + perfTyp + " X (Seats: " + this.seats + ") " + seats + "X yearOfProduction-Multiplier: " + yeOfProd + " X (fuel-type-multiplier:) " + fuelCost + " X " + lugageSp + " + " + kilomeLeft + "=");
        this.finalPrice = this.buyInPrice * perfTyp * seats * yeOfProd * fuelCost * lugageSp + kilomeLeft; //lugageSp increases price if "yes"
        return this.finalPrice;
    };
    return Motorbike;
}(Vehicle));
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(name, buyInPrice, performanceType, seats, yearOfProduction, kilometersLeft, fuel, image, transportCapacity) {
        var _this = _super.call(this, name, buyInPrice, performanceType, seats, yearOfProduction, kilometersLeft, fuel, image) || this;
        _this.transportCapacity = transportCapacity;
        return _this;
    }
    Truck.prototype.calculatePrice = function () {
        if (this.performanceType == "Economy") {
            var perfTyp = 0.9;
        }
        else if (this.performanceType == "Sport") {
            var perfTyp = 1.0;
        }
        else {
            var perfTyp = 1.1;
        }
        var seats = (this.seats * 0.05) + 1;
        var yeOfProd = 1 - ((2020 - this.yearOfProduction) / 100);
        var kilomeLeft = this.kilometersLeft * 0.05;
        if (this.fuel == "Diesel") {
            var fuelCost = 1.1;
        }
        else {
            var fuelCost = 1.0;
        }
        if (this.transportCapacity <= 10000) {
            var transportCap = 0.9;
        }
        else if (this.transportCapacity <= 30000) {
            var transportCap = 1.0;
        }
        else {
            var transportCap = 1.1;
        }
        console.log("Calculation for " + this.name + ": (Buy Price:) " + this.buyInPrice + " X (Performance Typ: " + this.performanceType + ") " + perfTyp + " X (Seats: " + this.seats + ")" + seats + " X yearOfProduction-Multiplier: " + yeOfProd + " X (fuel-type-multiplier:) " + fuelCost + " X " + transportCap + " + " + kilomeLeft + "=");
        this.finalPrice = this.buyInPrice * perfTyp * seats * yeOfProd * fuelCost * transportCap + kilomeLeft;
        return this.finalPrice;
    };
    return Truck;
}(Vehicle));
//Creation of Object starts here
var truck1 = new Truck("Super V100 Truck", 10000, "Economy", 3, 1990, 100000, "Diesel", "Image/truck.jpg", 20000);
var truck2 = new Truck("Mega XL3000", 15000, "Sport", 5, 2001, 15000, "Diesel", "Image/truck1.jpg", 8000);
var truck3 = new Truck("Mega XL3000", 35000, "Sport", 5, 2000, 15000, "Diesel", "Image/truck2.jpg", 8000);
//Calculate price and log into console
console.log(truck1.calculatePrice());
console.log(truck2.calculatePrice());
console.log(truck3.calculatePrice());
var bike1 = new Motorbike("Super Bike 1000", 2008, "Sport", 2, 2001, 60000, "Benzin", "Image/bike.jpg", "yes");
console.log(bike1.calculatePrice());
var vehicles = new Array;
vehicles.push(truck1, bike1, truck2, truck3);
console.log(vehicles);
for (var i = 0; i < vehicles.length; i++) {
    var number = i;
    var vehic = "      <div class=\"col-md-4 col-12\">\n          <div class=\"card\" style=\"\">\n              <img class=\"card-img-top\" src=" + vehicles[i].image + " alt=\"Card image cap\">\n              <div class=\"card-body\">\n                <h5 class=\"card-title\">" + vehicles[i].name + "</h5>\n                <p class=\"card-text\">\n                  <ul class=\"list-group\">\t\n                    <li class=\"list-group-item\">Performance: " + vehicles[i].performanceType + "</li>\n                    <li class=\"list-group-item\">Seats: " + vehicles[i].seats + "</li>\n                    <li class=\"list-group-item\">Production Year: " + vehicles[i].yearOfProduction + "</li>\n                    <li class=\"list-group-item\">Kilometers Left: " + vehicles[i].kilometersLeft + "</li>\n                    <li class=\"list-group-item\">Fueltype: " + vehicles[i].fuel + "</li>\n                  </ul>\n                </p>\n                <a href=\"#\" class=\"btn btn-primary pricebutton\" id = " + number + ">CLICK for Price Details<div id = \"priceDiv\"></div></a>\n              </div>\n            </div>          \n        </div>";
    $(".bossrow").append(vehic);
}
$(document).ready(function () {
    $(".pricebutton").on("click", function () {
        var index = $(this).attr("id");
        var price = vehicles[index].finalPrice;
        $(this).parent().find("#priceDiv").html(price + ",- EUR");
    });
});
