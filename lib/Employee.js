class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.role = "Employee"
        this.id = id;
        this.email = email;
    }

    printInfo() {
        console.log(this);
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return "Employee"
    }
}

module.exports = Employee;


