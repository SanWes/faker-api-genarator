// FAKER API ASSIGNMENT

//Using Express AFTER install express and faker 
const express = require("express");
const { helpers } = require("faker");
const app = express();
const port = 8000;

var faker = require('faker');

// CLASSES //

class User{
    constructor() {
        this.id = faker.datatype.uuid()
        this.firstName = faker.name.firstName()
        this.lastName = faker.name.lastName()
        this.phoneNum = faker.phone.phoneNumber()
        this.email = faker.internet.email()
        this.password = faker.internet.password()

        this.companyCar = faker.vehicle.vehicle()
        this.mantra = faker.random.words()

        // faker.fake("{{name.lastName}}, {{name.firstName}} {{name.suffix}}")

    }
}


class Company {
    constructor() {
        this.id = faker.datatype.uuid()
        this.company = faker.company.companyName()
        this.address = faker.address.streetAddress()
        this.street = faker.address.streetName()
        this.state = faker.address.state()
        this.zipCode = faker.address.zipCode()
        this.country = faker.address.country()
        this.symbol = faker.random.image()

    }
}



// ROUTES // 


app.get("/api/user/new", (req, res) => {
    let newUser = new User()
    res.json({data: newUser})


})

app.get("/api/company/new", (req, res) => {
    let newCompany = new Company()
    res.json({
                data: newCompany
            })


})

app.get("/api/user/company/new", (req, res) => {
    let newUser = new User()
    let newCompany = new Company()
    res.json({
                data: {
                    newUser,
                    newCompany 
            }
            })


})



// LISTEN FOR THIS PORT 

app.listen( port, () => console.log(`Listening on port: ${port}`) );