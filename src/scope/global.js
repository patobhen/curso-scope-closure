// Variables

var a; // Declarando 
var b = 'b'; // Declaramos y asignamos
b = 'bb'; // Reasignando
var a = 'aa' // Redeclarando y asignando

// Global scope
var fruit = 'Apple'; // global

function bestFruit() {
    console.log(fruit);
}

bestFruit();


function countries() {
    country = 'Colombia'; //
    console.log(country);
}

countries();

console.log(country)