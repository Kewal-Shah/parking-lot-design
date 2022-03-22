const Store = require("./Store");

class ParkingLot {
  high = 1000;
  low = 1;
  constructor(numberOfSlots) {
    this.max_available_slots = numberOfSlots;
  }

  parkCar(car) {
    // Check for total cars parked and unique registration numbers

    if (this.max_available_slots > 0) {
      if (!this.checkExists(car.registrationNumber)) {
        // Generate a Unique ticket id and assign it to car
        const ticket = Math.floor(
          Math.random() * (this.high - this.low) + this.low
        );
        car.setTicketNumber(ticket);
        Store.addEntries(car);
        console.log(
          `Car with registration number ${car.registrationNumber} is parked`
        );
        this.max_available_slots = this.max_available_slots - 1;
      } else {
        console.log("Car already present with this registration number");
      }
    } else {
      console.log("Parking Full");
    }
  }

  unparkCar(registrationNumber) {
    // Check if car with this registration number exist
    if (this.checkExists(registrationNumber)) {
      Store.removeEntries(registrationNumber);
      this.max_available_slots = this.max_available_slots - 1;
      console.log(
        `Car with registration number ${registrationNumber} is out of parking`
      );
    } else {
      console.log(
        `Car with registration number ${registrationNumber} does not exist`
      );
    }
  }

  display() {
    const entries = Store.getEntries();
    for (const car of entries) {
      console.log(car);
    }
  }

  getRegistrationNumberOfCarsByColor(color) {
    const entries = Store.getEntries();
    const cars = [];
    for (const car of entries) {
      if (car.color === color) {
        cars.push(car.registrationNumber);
      }
    }
    return cars;
  }

  getTicketIdByRegistrationNumber(registrationNumber) {
    const entries = Store.getEntries();
    let ticketId = "";
    for (const car of entries) {
      if (car.registrationNumber === registrationNumber) {
        ticketId = car.ticketNumber;
        break;
      }
    }
    return ticketId;
  }

  getTicketNumberOfCarsByColor(color) {
    const entries = Store.getEntries();
    const cars = [];
    for (const car of entries) {
      if (car.color === color) {
        cars.push(car.ticketNumber);
      }
    }
    return cars;
  }

  checkExists(registrationNumber) {
    const entries = Store.getEntries();
    let carExist = false;
    for (const car of entries) {
      if (car.registrationNumber === registrationNumber) {
        carExist = true;
        break;
      }
    }

    return carExist;
  }
}

module.exports = ParkingLot;
