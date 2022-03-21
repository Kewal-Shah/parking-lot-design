const localStorage = require("local-storage");
// Store Class: Handle Local Storage
class Store {
  static getEntries() {
    let entries;
    if (localStorage.get("entries") === null) {
      entries = [];
    } else {
      entries = JSON.parse(localStorage.get("entries"));
    }
    return entries;
  }

  static addEntries(entry) {
    const entries = Store.getEntries();
    entries.push(entry);
    localStorage.set("entries", JSON.stringify(entries));
  }

  static removeEntries(registrationNumber) {
    const entries = Store.getEntries();
    entries.forEach((entry, index) => {
      if (entry.registrationNumber === registrationNumber) {
        entries.splice(index, 1);
      }
    });
    localStorage.set("entries", JSON.stringify(entries));
  }
}

module.exports = Store;
