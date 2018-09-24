const add = (a, b) => {
    //console.log(arguments);
    return a + b;
} 
console.log(add(55,1));

const user = {
    name: 'Pranav',
    cities: ['Jaipur', 'Chandigarh'],
    printPlacesLived() {
       return this.cities.map((city) => this.name + ' has lived in ' + city);
    

        //this.cities.forEach((item) => console.log(this.name) )
    }
}

console.log(user.printPlacesLived());

const multiplier = {
    numbers: [ 0, 1 ,2],
    multipleBy: 6,
    multiply() {
        return this.numbers.map((number) => number * this.multipleBy);
    }
}

console.log(multiplier.multiply());