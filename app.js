// //method 1 to export
// exports.add = function(a, b){
//     return a+b;
// }



// //method 2 to export
// function addition(a, b){
//     return a+b

// }
// function substraction(a, b){
//     return a-b

// }
// function multiplication(a, b){
//     return a*b

// }

// function division(a, b){
//     return a/b

// }

// module.exports.addition = addition
// module.exports.substraction = substraction
// module.exports.multiplication = multiplication
// module.exports.division = division


// //method 3 to export

// function addition(a, b){
//     return a+b

// }
// function substraction(a, b){
//     return a-b

// }
// function multiplication(a, b){
//     return a*b

// }

// function division(a, b){
//     return a/b

// }

// module.exports = {addition, substraction, multiplication, division}



// //method 4 to export
// function framework(...framework){
//     return framework

// }
// function lib(...lib){
//     return lib

// }
// module.exports = {framework, lib}



// //api exports 
// async function fetchapi(){
//     let data = await fetch('https://dummyjson.com/products')
//     console.log(data);
//     let result = await data.json()
//     console.log(result.products);
//     result.products.map((m)=>{
//         console.log(m);
        

//     })
    
    
  
 
// }

// module.exports.fetchapi = fetchapi



// os module
// let os = require("os")
// console.log(os);
// console.log(os.arch());
// console.log(os.cpus());
// console.log(os.hostname());
// console.log(os.machine());
// console.log(os.platform());
// console.log(os.version());
// console.log(os.userInfo());
// console.log(os.type());


// //node js path.basename() method
// let path1 = require('path')
// console.log(path1.basename("c/users/admin/website/index.html"))
// console.log(path1.basename("c/users/admin/website"))


// //node js path.dirname() method
// let path2 = require('path'); 
// console.log(path2.dirname("c/users/admin/website/index.html"))
// console.log(path2.dirname("c/users/admin/website"))



//path.extname() Method
// let path = require('path'); 
// console.log(path3.extname('c/users/admin/website/app.js'));



//path.extname() Method in array
// let path = require('path'); 
// let extName = [
//     'c/users/admin/website/app.js',
//     'c/users/admin/website/app.html',
//     'c/users/admin/website/app.js',
//     'c/users/admin/website/app.html'
// ]


// console.log(extName);



// extName.map((m)=>{
//         if (path.extname(m) === ".js") {
//             console.log(path.extname(m));
                      
//         }
// })


// extName.map((m)=>{
//     console.log(path.extname(m));
    
// })



//path.normalise() Method

// let path = require('path'); 

// let resutl = path.normalize( 'c/users/../admin/../website/../app.js')
// let resut2 = path.normalize( 'c/users/admin/website/.../app.js')
// let resut3 = path.normalize( 'c/users/admin//website//app.js')
// let resut4 = path.normalize( 'c/users/admin///website///app.js')
// console.log(resutl);
// console.log(resut2);
// console.log(resut3);
// console.log(resut4);




//path.format() Method

// let path = require('path')
//cases1

// let pathformat = path.format({
//     dir : 'user/admin',
//     root : 'c/random',
//     base : 'text.txt'
// })
// console.log(pathformat);

//cases2
// let pathformat = path.format({
//     dir : 'user/admin',
//     base : 'text.txt',
//     ext : '.html'
// })
// console.log(pathformat);


//cases3
// let pathformat = path.format({
//     dir : 'user/admin',
//     name : 'app',
//     ext : '.html'
// })
// console.log(pathformat);

//assert Method
// let assert = require('assert')
// console.log(assert);

//example1
// let x = 5;
// let y = 8;
// try {
//     assert(x<y)
// } catch (error) {
//     console.log(error); 
    
    
// }

//example2
// function add(x,y){
//     return x+y;
// }

// let expected = add(3, 6)

// assert(expected == 9, 'expected value is not equal to actual value')
// assert.ok(expected == 9, 'expected value is not equal to actual value')
// assert.equal(expected == 9, 'expected value is not equal to actual value')


// //example3
//Array

// let assert = require('assert')


// let arr1 = [10, 20, 30, 40]
// let arr2 = [10, 20, 30, 40]  

// assert(arr1, arr2, 'expected value is not equal to actual value')
// assert.deepEqual(arr1, arr2, 'expected value is not equal to actual value')
// assert.deepStrictEqual(arr1, arr2, 'expected value is not equal to actual value')
// assert.notDeepStrictEqual(arr1, arr2, 'expected value is not equal to actual value')
// assert.notStrictEqual(arr1, arr2, 'expected value is not equal to actual value')


//object
// let assert = require('assert')
// let obj1 = {
//     emp_name : "dilip",
//     emp_id : 401

// }
// let obj2 = {
//     emp_name : "dilip",
//     emp_id : 401

// }
// assert(obj1, obj2, 'expected value is not equal to actual value')
// assert.deepEqual(obj1, obj2, 'expected value is not equal to actual value')
// assert.deepStrictEqual(obj1, obj2, 'expected value is not equal to actual value')
// assert.notDeepStrictEqual(obj1, obj2, 'expected value is not equal to actual value')
// assert.strictEqual(obj1, obj2, 'expected value is not equal to actual value')




//////////////////////////////////////////////////////////////


// let url = require("url")

// let myurl = url.parse('https://geeksforgeeks.org/p/a/t/h?query=string#hash')
// console.log(myurl);

// let myurl = new URL('https://geeksforgeeks.org/p/a/t/h?query=string#hash')
// console.log(myurl);
// console.log(myurl.href);
// console.log(myurl.origin);
// console.log(myurl.pathname);
// console.log(myurl.hostname);

// console.log(myurl.toString());//convert to string
// console.log(myurl.toJSON());



//fs method
// let fs = require("fs")
// console.log(fs);


//create file (synchronous)
// //1
// fs.writeFileSync("style1.css", "1245789865")

//create file (asynchronous)
// fs.writeFile("dilip.js", "hi i am cute boy", (err)=>{
//     if(err) throw err;
//     console.log("file created successfully");
    

// })



//read the file
//synchronous
// let result = fs.readFileSync("dilip.js", "utf-8")
// console.log(result);

//asynchronous
// let result = fs.readFile("dilip.js", 'utf-8', (err, res)=>{
//     if(err) throw err;
//     console.log(res);
  
// })
// console.log(result);


//update the file
//synchronous
// fs.writeFileSync("style1.css", "majnu +91 9865327412")


//asynchronous
// fs.writeFile("text.txt", "srk +91 9865327412", (err)=>{
//     if(err) throw err;
//     console.log("file is updated successfully");
    

// })  


//delete the file
//synchronous
// fs.unlinkSync("dilip.js")
// fs.unlinkSync("style.css")
//asynchronous
// fs.unlink("style1.css", (err)=>{
//     if(err) throw err;
//     console.log("file deleted successfully");
    
// })

//file is exist or not
//synchronous
// console.log(fs.existsSync("../js/login.js"));
//asynchronous
// fs.exists("add.js", (exist)=>{
//     console.log(exist);
    

// })


//copy file
// synchronous
// fs.copyFileSync("add.js", "add1.js")
//asynchronous
// fs.copyFile("add1.js", "copy.js", (err)=>{
//     if(err) throw err;
//     console.log("file copied successfully");
    
    

// })

//file rename
//synchronous
// fs.renameSync("add1.js", "lp.js")

//asynchronous
// fs.rename("app1.js", "app2.js", (err)=>{
//     if(err) throw err;
//     console.log("file rename successfully");
    

// })


//creating a server

// let server = http.createServer((req, res)=>{

//     res.setHeader("content-type", "text.html")
//     res.statusCode = 200;
//     let readdata = fs.readFileSync("./add.js", "utf-8")
//     res.writeHead(200, ("content-type", "text.html"))
//     res.write("<html>")
//     res.write("<head> <title>node js</title></head>")
//     res.write("<body>")
//     res.write("<form>")
//     res.write("<lable>Name</lable>")
//     res.write("<input type = 'text' placeholder = 'enter your name'>")
//     res.write("<br>")
//     res.write("<button type = 'submit' >click</button>")
//     res.write("</form>")
//     res.write("</body>")
//     res.write(readdata)
//     res.end()
    
// })

// server.listen(4500, (err)=>{
//     if(err) throw err;
//     console.log("server is running at port : http://localhost:4500");

// })


// let url = require("url")



// routing 
// example 1
// let http = require("http")
// let server = http.createServer((req, res)=>{

//     if (req.url === "/") {
//         res.writeHead(200, ("content-type", "text/html"))
//         res.write("<h1>hello welcome to node js</h1>")
//         res.end()
        
//     }else if(req.url === "/about") {
//         res.writeHead(200, ("content-type", "text/html"))
//         res.write("<h1>hello welcome to about</h1>")
//         res.end()
        
//     }
//     else if(req.url === "/services") {
//         res.writeHead(200, ("content-type", "text/html"))
//         res.write("<h1>hello welcome to services</h1>")
//         res.end()
        
//     }else{
//         res.writeHead(400, ("content-type", "text/html"))
//         res.write("<h1>page not found</h1>")
//         res.end()

//     }

// })

// server.listen(5500, (err)=>{
//     if(err) throw err;
//     console.log("server is running at port : http://localhost:5500");

// })


//example 2


// let http = require("http")
// let server = http.createServer((req, res)=>{
//     let path = req.url;

//     if (path === "/") {
//         res.writeHead(200, ("content-type", "text/html"))
//         res.write("<h1>hello welcome to node js</h1>")
//         res.end()
        
//     }else if(path.toLocaleLowerCase() === "/about") {
//         res.writeHead(200, ("content-type", "text/html"))
//         res.write("<h1>hello welcome to about</h1>")
//         res.end()
        
//     }
//     else if(path.toLocaleLowerCase() === "/services") {0
//         res.writeHead(200, ("content-type", "text/html"))
//         res.write("<h1>hello welcome to services</h1>")
//         res.end()
        
//     }else{
//         res.writeHead(400, ("content-type", "text/html"))
//         res.write("<h1>page not foun!</h1>")
//         res.end()

//     }

// })

// server.listen(5500, (err)=>{
//     if(err) throw err;
//     console.log("server is running at port : http://localhost:5500");

// })


//example 3

let fs = require('fs')
let http = require("http")
let server = http.createServer((req, res)=>{
    let path = req.url;
  
    if (path.toLocaleLowerCase() === "/") {
        res.writeHead(200, ("content-type", "text/html"))
         let readh = fs.readFileSync("./home.html")
        res.end(readh)
        
    }else if(path.toLocaleLowerCase() === "/services") {
        res.writeHead(200, ("content-type", "text/html"))
        let reads = fs.readFileSync("./services.html")
        res.end(reads)
        
    }else{
        res.writeHead(400, ("content-type", "text/html"))
        let read4 = fs.readFileSync("./404.html")
        res.end(read4)

    }

})

server.listen(5500, (err)=>{
    if(err) throw err;
    console.log("server is running at port : http://localhost:5500");

})


























































































