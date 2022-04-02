// Javascript Design Patterns

// ---*-*--- Creational Design Pattern, example

// -------------------------Constructor -> create new objects of predefined type, using constructors
class Server {
    constructor(ip, port) {
        this.ip = ip
        this.port = port
    }

    getUrl() {
        return `https://${this.ip}:${this.port}`
    }

}

const aws = new Server('aws.api.com', 8080)
console.log(aws.getUrl())

// ------------------------Factory -> when you have collection of similar instances, 
//you don't have to initialize all of them separately, instead you can generalize them in 1 parent class

class SimpleMembership {
    constructor(name) {
        this.name = name
        this.cost = 50
    }
}

class PremiumMembership {
    constructor(name) {
        this.name = name
        this.cost = 500
    }
}

class MemberFactory {

    static list = {
        simple: SimpleMembership,
        premium: PremiumMembership
    }

    create(name, type = 'simple') {
        const Membership = MemberFactory.list[type] || MemberFactory.list.simple
        const member = new Membership(name)
        member.type = type
        member.define = function () {
            console.log(`${this.name}, (${this.type}): ${this.cost}`);
        }
        return member
    }
}

const factory = new MemberFactory()
const member = factory.create('Ismoil Shokirov', 'premium')
member.define()


// ---------------- Prototype -> javascript is made on prototypes, create new objects using the fundamentals of anther prototype

const car = {
    wheels: 4,
    init() {
        console.log(`I have: ${this.wheels} wheels, - ${this.owner}`);
    }
}

const carWithOwner = Object.create(car, {
    owner: {
        value: 'Ismoil'
    }
})

console.log(carWithOwner.__proto__)

carWithOwner.init()


// ---------------- Singleton, one instance of class and no more -> ex. connection to DB

class DataBase {
    constructor(data) {
        if (DataBase.exists) {
            return DataBase.instance
        }

        DataBase.instance = this
        DataBase.exists = true
        this.data = data
    }

    getData() {
        return this.data
    }
}

const mongo = new DataBase('MongoDB')
console.log(mongo.getData())

const mysql = new DataBase('MySQL')
console.log(mysql.getData())