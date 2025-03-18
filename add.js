//method 1 to import
let fun = require("./app")
console.log(fun.add(10, 20));


//method 2 to import
let fun = require("./app")
console.log(fun.addition(10, 20));
console.log(fun.substraction(10, 20));
console.log(fun.multiplication(10, 20));
console.log(fun.division(10, 20));



//method 3 to import
let {addition, substraction, multiplication, division} = require("./app")
console.log(addition(10, 20));
console.log(substraction(10, 20));
console.log(multiplication(10, 20));
console.log(division(10, 20));



//method 4 to import
let {framework, lib} = require("./app")
console.log(framework("reactjs", "angular"));
console.log(lib("nodejs", "libu"))



//api imports 
let fetch = require("./app")
console.log(fetch.fetchapi());






















