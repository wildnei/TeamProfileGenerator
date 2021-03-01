const Employee = require("./Employee");

class Manager extends Employee {
    constructor (name, id, email, officeNumber){
    super(name, id, email);
    this.role = "Manager"
    this.officeNumber = officeNumber;
    }

    printInfo() {
        console.log(this);
    }

    getOffice() {
        return officeNumber;

    }
    getRole() {
        return "Manager"
    }
}

module.exports = Manager;