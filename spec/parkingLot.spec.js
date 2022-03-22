const ParkingLot = require("../parkingLot");
const Car = require("../car");
const Store = require("../Store");

describe("Parking Lot", function () {
  const cars = [
    {
      color: "Blue",
      registrationNumber: "MH12",
      ticketNumber: 656,
    },
    {
      color: "Red",
      registrationNumber: "MH14",
      ticketNumber: 657,
    },
    {
      color: "Blue",
      registrationNumber: "MH13",
      ticketNumber: 658,
    },
  ];
  describe("Park Car", function () {
    it("test when parking slots are available and registration number is unique", function () {
      var hyundai = new Car("Yellow", "MH12");
      var parkingLot = new ParkingLot(5);
      parkingLot.max_available_slots = 5;
      parkingLot.parkCar(hyundai);
      spyOn(parkingLot, "checkExists").andCallFake(() => false);
      expect(hyundai.getTicketNumber()).toBeDefined();
      expect(parkingLot.max_available_slots).toEqual(4);
    });

    it("test when parking slots are available and registration number is already present", function () {
      var hyundai = new Car("Yellow", "MH12");
      var parkingLot = new ParkingLot(5);
      parkingLot.max_available_slots = 5;
      parkingLot.parkCar(hyundai);
      spyOn(parkingLot, "checkExists").andCallFake(() => true);
      expect(hyundai.getTicketNumber()).not.toBeDefined();
      expect(parkingLot.max_available_slots).toEqual(5);
    });

    it("test when parking slots are not available", function () {
      var hyundai = new Car("Yellow", "MH12");
      var parkingLot = new ParkingLot(5);
      parkingLot.max_available_slots = 0;
      parkingLot.parkCar(hyundai);
      expect(hyundai.getTicketNumber()).not.toBeDefined();
      expect(parkingLot.max_available_slots).toEqual(0);
    });
  });

  describe("Unpark Car", function () {
    it("test when registration number is present in parking lot", function () {
      var parkingLot = new ParkingLot(5);
      parkingLot.max_available_slots = 3;
      parkingLot.unparkCar("MH12");
      spyOn(parkingLot, "checkExists").andCallFake(() => true);
      expect(parkingLot.max_available_slots).toEqual(2);
    });

    it("test when registration number is not present in parking lot", function () {
      var parkingLot = new ParkingLot(5);
      parkingLot.max_available_slots = 3;
      parkingLot.unparkCar("MH14");
      spyOn(parkingLot, "checkExists").andCallFake(() => false);
      expect(parkingLot.max_available_slots).toEqual(3);
    });
  });

  describe("Get Registration Number of Cars By Color", function () {
    it("test getRegistrationNumberOfCarsByColor function", function () {
      var parkingLot = new ParkingLot(5);
      spyOn(Store, "getEntries").andCallFake(() => {
        return cars;
      });
      expect(parkingLot.getRegistrationNumberOfCarsByColor("Blue")).toEqual([
        "MH12",
        "MH13",
      ]);
    });
  });

  describe("Get Ticket Number of Car By Registration Number", function () {
    it("test getTicketIdByRegistrationNumber function", function () {
      var parkingLot = new ParkingLot(5);
      spyOn(Store, "getEntries").andCallFake(() => {
        return cars;
      });
      expect(parkingLot.getTicketIdByRegistrationNumber("MH12")).toEqual(656);
    });
  });

  describe("Get Ticket Number of Cars By Color", function () {
    it("test getTicketNumberOfCarsByColor function", function () {
      var parkingLot = new ParkingLot(5);
      spyOn(Store, "getEntries").andCallFake(() => {
        return cars;
      });
      expect(parkingLot.getTicketNumberOfCarsByColor("Blue")).toEqual([
        656, 658,
      ]);
    });
  });

  describe("Check Exists Function", function () {
    it("test check exists function when registration number is present", function () {
      var parkingLot = new ParkingLot(5);
      spyOn(Store, "getEntries").andCallFake(() => {
        return cars;
      });
      expect(parkingLot.checkExists("MH12")).toEqual(true);
    });

    it("test check exists function when registration number is not present", function () {
      var parkingLot = new ParkingLot(5);
      spyOn(Store, "getEntries").andCallFake(() => {
        return cars;
      });
      expect(parkingLot.checkExists("MH16")).toEqual(false);
    });
  });
});
