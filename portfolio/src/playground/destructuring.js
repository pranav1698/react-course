/* const person = {
    name: 'Pranav',
    age: 20,
    location: {
        city: 'kolkata',
        temperature: 36
    }
}

const {name: firstName = 'Anonymous', age} = person
const {city, temperature: temp} = person.location

console.log(`${firstName} is ${age}.`);

if(temp && city) console.log(`It's ${temp} in ${city}`);

const book = {
    title: 'Ego is the Name',
    author: 'Ryan Halliday',
    publisher: {
        name: 'Penguin',
    }
};

/* const {name: publisherName = "self-Published"} = book.publisher;

console.log(publisherName); */ 


const address = ['1299 s Juniper Street', 'Kolkata', 'West Bengal', '302017'];

const [, city, state= 'Jaipur'] = address;

console.log(`You are in ${city} ${state}`);

const item = ['Coffee (hot)', '$2', '$4', '$6'];

const [coffee, , medium] = item; 
console.log(`A medium ${coffee} costs ${medium}`);
