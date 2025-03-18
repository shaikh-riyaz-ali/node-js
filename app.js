//method 1 to export
exports.add = function(a, b){
    return a+b;
}



//method 2 to export
function addition(a, b){
    return a+b

}
function substraction(a, b){
    return a-b

}
function multiplication(a, b){
    return a*b

}

function division(a, b){
    return a/b

}

module.exports.addition = addition
module.exports.substraction = substraction
module.exports.multiplication = multiplication
module.exports.division = division


//method 3 to export

function addition(a, b){
    return a+b

}
function substraction(a, b){
    return a-b

}
function multiplication(a, b){
    return a*b

}

function division(a, b){
    return a/b

}

module.exports = {addition, substraction, multiplication, division}



//method 4 to export
function framework(...framework){
    return framework

}
function lib(...lib){
    return lib

}
module.exports = {framework, lib}



//api exports 
async function fetchapi(){
    let data = await fetch('https://dummyjson.com/products')
    console.log(data);
    let result = await data.json()
    console.log(result.products);
    result.products.map((m)=>{
        console.log(m);
        

    })
    
    
  
 
}

module.exports.fetchapi = fetchapi



//os module
let os = require("os")
console.log(os);
console.log(os.arch());
console.log(os.cpus());
console.log(os.hostname());
console.log(os.machine());
console.log(os.platform());
console.log(os.version());
console.log(os.userInfo());
console.log(os.type());


//node js path.basename() method
let path1 = require('path')
console.log(path1.basename("c/users/admin/website/index.html"))


//node js path.dirname() method
let path2 = require('path'); 
console.log(path2.dirname("c/users/admin/website/index.html"))















