/* Structural Design Patterns are used to add new features for an app, while not breaking the workflow of existing piece of code */

// ---------------- Adapter -> combining 2 different structures: old and new

class OldCalc {
    operations(t1, t2, operation) {
        switch (operation) {
            case 'add': return t1 + t2
            case 'sub': return t - t2
            default: return NaN
        }
    }
}

class NewCalc {
    add(t1, t2) {
        return t1 + t2
    }
    sub(t1, t2) {
        return t1 - t2
    }
}

class CalcAdapter {
    constructor() {
        this.calc = new NewCalc()
    }

    operations(t1, t2, operation) {
        switch (operation) {
            case 'add': return this.calc.add(t1, t2)
            case 'sub': return this.calc.sub(t1, t2)
            default: return NaN
        }
    }
}

const oldCalc = new OldCalc()
console.log(oldCalc.operations(4, 2, 'add'))

const newCalc = new NewCalc()
console.log(newCalc.add(4, 2))

const adapter = new CalcAdapter()
console.log(adapter.operations(4, 2, 'sub'))


// ---------------- Decorator -> 

class Server {
    constructor(ip, port) {
        this.ip = ip
        this.port = port
    }
    url() {
        return `https://${this.ip}:${this.port}`
    }
}

function aws(server) {
    server.isAws = true
    server.awsInfo = function () {
        return server.url()
    }
    return server
}

const s1 = aws(new Server('12.34.54.231', 8090))
console.log(s1.awsInfo());



// ---------------- Facade -> example jQuery

class Complaints {
    constructor() {
        this.complaints = []
    }

    reply(complaint) {

    }

    add(complaint) {
        this.complaints.push(complaint)
        return this.reply(complaint)
    }
}

class ProductComplaints extends Complaints {
    reply({ id, customer, details }) {
        return `Product: ${id}: ${customer} (${details})`;
    }
}

class ServiceComplaints extends Complaints {
    reply({ id, customer, details }) {
        return `Service: ${id}: ${customer} (${details})`;
    }
}

class ComplaintRegistry {
    register(customer, type, details) {
        const id = Date.now()
        let complaint;
        if (type === 'service')
            complaint = new ServiceComplaints()
        else complaint = new ProductComplaints()
        return complaint.add({ id, customer, details })
    }
}

const registry = new ComplaintRegistry()

console.log(registry.register('Ismoil', 'service', 'I don\'t like your service'));
console.log(registry.register('Ismoil', 'product', 'I don\'t like your product'));


// ---------------- Flyweight -> example Browser do not download already downloaded parts of code

class Car {
    constructor(model, price) {
        this.model = model
        this.price = price
    }
}

class CarFactory {
    constructor() {
        this.cars = []
    }
    create(model, price) {
        const candidate = this.getCar(model)
        if (candidate) {
            return candidate
        }
        const newCar = new Car(model, price)
        this.cars.push(newCar)
        return newCar
    }
    getCar(model) {
        return this.cars.find(car => car.model === model)
    }
}

const factory = new CarFactory()

const bmwX6 = factory.create('BMW', 100_500)
const audi = factory.create('Audi', 55_000)
const bmwX3 = factory.create('BMW', 31_000)
console.log(bmwX6);
console.log(audi);
console.log(bmwX3);