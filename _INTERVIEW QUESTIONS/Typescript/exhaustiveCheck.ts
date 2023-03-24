type VehicleBrand = 'toyota' | 'mercedes' | 'chevrolet';

interface Vehicle {
    year: number;
    brand: VehicleBrand;
}

interface Toyota extends Vehicle {
    cruizeControl: boolean
    brand: 'toyota'
}

interface Mercedes extends Vehicle {
    isPremium: boolean
    brand: 'mercedes'
}

interface Chevrolet extends Vehicle {
    cruizeControl: boolean
    brand: 'chevrolet'
}

type Car = Toyota | Mercedes | Chevrolet

function doSomething(car: Car) {
    switch(car.brand) {
        case 'toyota':
            break;
        case 'mercedes':
            break;
        case 'chevrolet':
            break;
        default:
            exhaustiveCheck(car);
    }
}


function exhaustiveCheck(param: never) {
    console.log('Please give a type to ' + param);
}