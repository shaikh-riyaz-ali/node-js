//method 1 to export
exports.add = function(a, b){
    return a+b;
}



// //method 2 to export
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


// //node js path.basename() method
let path1 = require('path')
console.log(path1.basename("c/users/admin/website/index.html"))
console.log(path1.basename("c/users/admin/website"))


// //node js path.dirname() method
let path2 = require('path'); 
console.log(path2.dirname("c/users/admin/website/index.html"))
console.log(path2.dirname("c/users/admin/website"))



//path.extname() Method
let path = require('path'); 
console.log(path3.extname('c/users/admin/website/app.js'));



//path.extname() Method in array
let path = require('path'); 
let extName = [
    'c/users/admin/website/app.js',
    'c/users/admin/website/app.html',
    'c/users/admin/website/app.js',
    'c/users/admin/website/app.html'
]


console.log(extName);



extName.map((m)=>{
        if (path.extname(m) === ".js") {
            console.log(path.extname(m));
                      
        }
})


extName.map((m)=>{
    console.log(path.extname(m));
    
})



//path.normalise() Method

let path = require('path'); 

let resutl = path.normalize( 'c/users/../admin/../website/../app.js')
let resut2 = path.normalize( 'c/users/admin/website/.../app.js')
let resut3 = path.normalize( 'c/users/admin//website//app.js')
let resut4 = path.normalize( 'c/users/admin///website///app.js')
console.log(resutl);
console.log(resut2);
console.log(resut3);
console.log(resut4);




//path.format() Method

let path = require('path')
//cases1

let pathformat = path.format({
    dir : 'user/admin',
    root : 'c/random',
    base : 'text.txt'
})
console.log(pathformat);

//cases2
let pathformat = path.format({
    dir : 'user/admin',
    base : 'text.txt',
    ext : '.html'
})
console.log(pathformat);


//cases3
let pathformat = path.format({
    dir : 'user/admin',
    name : 'app',
    ext : '.html'
})
console.log(pathformat);

//assert Methods

let assert = require('assert')


//example1
let x = 5;
let y = 8;
try {
    assert(x<y)
} catch (error) {
    console.log(error);
    
    
}

//example2
function add(x,y){
    return x+y;
}

let expected = add(3, 6)

assert(expected == 9, 'expected value is not equal to actual value')
assert.ok(expected == 9, 'expected value is not equal to actual value')
assert.equal(expected == 9, 'expected value is not equal to actual value')


// //example3
//Array

let assert = require('assert')

let arr1 = [10, 20, 30, 40]
let arr2 = [10, 20, 30, 40]

assert(arr1, arr2, 'expected value is not equal to actual value')
assert.deepEqual(arr1, arr2, 'expected value is not equal to actual value')
assert.deepStrictEqual(arr1, arr2, 'expected value is not equal to actual value')
assert.notDeepStrictEqual(arr1, arr2, 'expected value is not equal to actual value')
assert.notStrictEqual(arr1, arr2, 'expected value is not equal to actual value')


//object
let assert = require('assert')
let obj1 = {
    emp_name : "dilip",
    emp_id : 401

}
let obj2 = {
    emp_name : "dilip",
    emp_id : "401"

}
assert(obj1, obj2, 'expected value is not equal to actual value')
assert.deepEqual(obj1, obj2, 'expected value is not equal to actual value')
assert.deepStrictEqual(obj1, obj2, 'expected value is not equal to actual value')
assert.notDeepStrictEqual(obj1, obj2, 'expected value is not equal to actual value')
assert.notStrictEqual(obj1, obj2, 'expected value is not equal to actual value')


































