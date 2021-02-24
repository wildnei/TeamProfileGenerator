const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const Employee = require("./Employee")
const Manager = require("./Manager")
const Engineer = require("./Engineer")
const Intern = require("./Intern")

const employee1 = new Employee ("will", "15", "will@test.com");
const manager1 = new Manager("will", "15", "will@test.com", "112233445566");
const engineer1 = new Engineer("will", "15", "will@test.com", "engineer@github.com")
const intern1 = new Intern("will", "15", "will@test.com", "Georgia Tech");

console.log(employee1);
console.log(manager1);
console.log(engineer1);
console.log(intern1);
console.log(employee1.getRole());

// TODO: INQUIRER 

const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input

function promptEmployee() {

    return inquirer.prompt([
        {
            type: "input",
            name: "employeeName",
            message: "What is your name?"
        },
        {
            type: "input",
            name: "ID",
            message: "What your employee ID?"
        },
 
        {
            message: "Please enter your email",
            name: "email",
            type: "input",
            default: () => { },
            validate: function (email) {

                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)

                if (valid) {
                    console.log("Great job");
                    return true;
                } else {
                    console.log(".Please enter a valid email")
                    return false;
                }
            }
    },
])}


function promptManager() { 
    return inquirer.prompt([
        {
            type: "input",
            name: "managerPrompt",
            message: "What is your office number?"
        },
    ])}

function promptEngineer() {
    return inquirer.prompt([
        {
            type: "input",
            name: "EngineerPrompt",
            message: "What is your school?"
        },
    ])
};

function promptIntern() {
    return inquirer.prompt([
        {
            type: "input",
            name: "internPrompt",
            message: "What is your school?"
        },
    ])
};


function generateReadMe(answers) {
    const EmployeeFile = `const employee1 = new Employee("${answers.employeeName}", "${answers.ID}", "${answers.email}")`
    return EmployeeFile
};

promptEmployee()
    .then(function (answers) {
        const readme = generateReadMe(answers);

        return writeFileAsync("test.js", readme)
    })
    .then(function () {
        console.log("Successfully wrote js.file");
    })
    .catch(function (err) {
        console.log(err);
    });

