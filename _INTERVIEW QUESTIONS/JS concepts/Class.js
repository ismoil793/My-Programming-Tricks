class Animal {
    static type = 'ANIMAL' // only available as Animal.type, not available for its instances

    constructor(animalFeatures) {
        const {name, age, legs} = animalFeatures;
        this.name = name;
        this.age = age;
        this.legs = legs;
    }
}


class Dog extends Animal {
    constructor(animalFeatures = {}) {
        super(animalFeatures) // will give error if super not called
        this.hasTail = animalFeatures.hasTail;
    }

    set setName(newName) {
        this.name = newName
    }

    get getName() {
        return this.name
    }
}

const dog = new Dog({
    name: 'Rex',
    age: 2,
    legs: 4,
    hasTail: true
})

dog.setName = 'Simba'

console.log(Dog.type) // will be ANIMAL
console.log(dog.getName)
console.log(dog)