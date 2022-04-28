//The Cat
class Cat {
    constructor() {
        this.hunger = 10,
            this.loneliness = 10,
            this.tiredness = 10
    }

    sleeping() {
        this.tiredness -= 5;
        this.hunger += 2;
        this.loneliness += 4;
    }

    playing() {
        this.tiredness += 4;
        this.loneliness -= 2;
        this.hunger += 3;
    }

    eating() {
        this.hunger -= 5;
        this.tiredness += 2;
    }

    purring() {
        this.loneliness -= 5;
    }

    grooming() {
        this.tiredness += 4;
        this.hunger += 2;
    }

    scratching() {
        this.loneliness += 4;
        this.tiredness += 3;
        this.hunger += 3
    }

    getStatus() {
        return `The cat is hungry: ${this.hunger}, lonely: ${this.loneliness}, tired: ${this.tiredness}`;
    }

    getCatNeeds() {
        let needs = '';
        if (this.hunger > 10) {
            needs += 'The cat needs to eat. ';
        }
        if (this.loneliness > 10) {
            needs += 'The cat needs to spend time with you. ';
        }
        if (this.tiredness > 10) {
            needs += 'The cat needs to rest. '
        }
        return needs;
    }
}

const myCat = new Cat();
console.log(myCat);
myCat.sleeping();
myCat.playing();
myCat.eating();
myCat.purring();
myCat.grooming();
myCat.scratching();
console.log(myCat.getCatNeeds());
console.log(myCat.getStatus());