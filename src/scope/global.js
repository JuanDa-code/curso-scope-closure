// Variables

var a; // Declarando
var b = 'b'; // Decalramos / asignamos
b = 'bb'; // Reasignacion
var a = 'aa'; // Redeclaracion


// Global Scope
var fruit = 'Apple'; // Global
console.log(fruit);

function bestFruit() {
    console.log(fruit);
}

bestFruit();


function countries() {
    country = 'Colombia';
    console.log(country);
}

countries();
console.log(country);