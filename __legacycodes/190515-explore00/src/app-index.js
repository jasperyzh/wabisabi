/* var Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;

}

Person.prototype.calculateAge = function(){
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

// subclass
var Athlete = function(name, yearOfBirth, job, olympicGames, medals){

    // new operator 
    // pass the arguments
    Person.call(this, name, yearOfBirth, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
}

// object.create - allow manually set the prototype of an object
Athlete.prototype = Object.create(Person.prototype);
// both function constructors are connected

var johnAthlete = new Athlete('John', 1999, 'swimmer', 3, 10);
console.log(johnAthlete);
console.log(johnAthlete.calculateAge()) */


const name6 = 'Jane Smith';
let age6 = 23;



// let ages6 = years.map(el => 2016 - el);
// console.log(ages6);

// ages6 = years.map((el, index) => `Age element ${index + 1}: ${2016 - el}.`);
// console.log(ages6);

// ages6 = years.map((el, index) => {
//     const now = new Date().getFullYear();
//     const age = now - el;
//     return `Age element ${index + 1}: ${age}.`
// });
// console.log(ages6);

// const boxesArr6 = Array.from(boxes);
// Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerblue');

// for (const cur of boxesArr6) {
//     if (cur.className.includes('blue')) {
//         continue;
//     }
//     cur.textContent = 'I changed to blue!';
// }




class TownFacility {
    constructor(name, builtYear) {
        this.name = name;
        this.builtYear = builtYear;
    }

}

class Park extends TownFacility {
    constructor(name, builtYear, area, numTrees) {
        super(name, builtYear);
        this.area = area;
        this.numTrees = numTrees;
    }
    treeDensity() {
        const density = this.numTrees / this.area;
        console.log(`${this.name} has a tree density of ${density} trees per square km.`);
    }
    averageAge() {
        
    }
    nameOfLargePark() {

    }
}

class Street extends TownFacility {

    constructor(name, builtYear, length, size = 3) {
        super(name, builtYear);
        this.length = length;
        this.size = size;
    }
    classifyStreet(){
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');

        console.log(`${this.name} [${this.builtYear}], is a ${classification.get(this.size)} street.`);
    }
    totalLength() {

    }
    averageLengthOfStreets() {

    }
    sizeClassification() {


    }
}

const allParks = [
    new Park('Berkeley Park', 1899, 0.3, 220),
    new Park('National Park', 1799, 2.3, 1220),
    new Park('Albert Park', 1991, 1.3, 949),
];

const allStreets = [
    new Street('Ocean Avenue', 1999, 50, 1),
    new Street('Evergreen Avenue', 1989, 100, 5),
    new Street('Sejati Road', 2001, 10, 3),
    new Street('OneCity Road', 1970, 9.4, 4),

]

function calc(arr){
    const sum = arr.reduce((prev, cur, index) => prev + cur, 0);

    return [sum, sum/arr.length];
}
function reportParks(p){
    console.log('----PARKS REPORT----');

    // density
    p.forEach(el => el.treeDensity());

    // average age
    const ages = p.map( el => new Date().getFullYear() - el.builtYear )
    const [totalAge, avgAge] = calc(ages);
    console.log(`Our ${p.length} parks have an average of ${avgAge} years.`);

    // park with more than 1000 trees
    const i = p.map(el => el.numTrees).findIndex( el => el >= 1000);
    console.log(`${p[i].name} has more than 1,000 trees.`);
}
function reportStreets(s){
    console.log('----STREETS REPORT----');

    // total and average length of town street
    const [totalLength, avgLength] = calc( s.map(el => el.length));
    console.log(`Our ${s.length} streets have a total length of ${totalLength}km; with average of ${avgLength}km.`);

    // classify size
    s.forEach( el => el.classifyStreet());
}
reportParks(allParks);
reportStreets(allStreets);