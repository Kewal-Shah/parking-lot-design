//Car Class: Represent each car in the parking lot
class Car {
  constructor(color, registrationNumber) {
    this.color = color;
    this.registrationNumber = registrationNumber;
  }

  setTicketNumber(number) {
    this.ticketNumber = number;
  }

  getTicketNumber() {
    return this.ticketNumber;
  }
}

module.exports = Car;
