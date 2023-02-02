class Player {
   constructor(name, country) {
    this.name = name,
    this.country = country
   }

   printInfo(club) {
    console.log(`${this.name} was born in ${this.country}`);
    console.log(`${this.name} played in ${club}`);    
   }

}


class TennisPlayer extends Player {
    constructor(name, country, age) {
        super(name, country),
        this.age = age
    }

    printInfo() {
        console.log(this.name + ' is ' + this.age + ' years old and knows how to play Tennis');
    }
}

const player1 = new Player('Messi', 'Argentina');
player1.printInfo('Barça');

const rafa = new TennisPlayer('Rafa Nadal', 'Spain', 34);
rafa.printInfo();
