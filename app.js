const ParkingLot = require("./parkingLot");
const Car = require("./car");

// create a parking Lot
var parkingLot = new ParkingLot(5);

// park Cars
console.log("Parking Cars");
var hyundai = new Car("Yellow", "MH12");
var maruti = new Car("Red", "MH14");
var maruti2 = new Car("Blue", "MH13");
var maruti3 = new Car("Blue", "MH12");
var maruti4 = new Car("Blue", "MH2");
var maruti5 = new Car("Blue", "MH3");
var maruti6 = new Car("Blue", "MH4");

parkingLot.parkCar(hyundai);
parkingLot.parkCar(maruti);
parkingLot.parkCar(maruti2);
parkingLot.parkCar(maruti3);
parkingLot.parkCar(maruti4);
parkingLot.parkCar(maruti5);
parkingLot.parkCar(maruti6);

// Display Parked Cars
parkingLot.display();

parkingLot.getRegistrationNumberOfCarsByColor("Blue");
parkingLot.getTicketIdByRegistrationNumber("MH14");
parkingLot.getTicketNumberOfCarsByColor("Yellow");
