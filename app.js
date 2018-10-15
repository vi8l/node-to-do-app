var express = require("express");
//get controller
var todoController = require('./controllers/todoController');

var app = express();

//set template engine ejs
app.set("view engine", "ejs")

//static files 
app.use(express.static('./public'));

//fire controller
todoController(app);

//listen to port
app.listen(3000);
console.log("Listening to port 3000");

/**
 * http methods are
 * GET - app.get('route',fn)
 * POST - app.post('route',fn)
 * PUT - app.get('route',fn)
 * DELETE - app.get('route',fn)
 */
// var fs = require("fs");



// app.get("/", function(req, res){
//     res.sendFile(__dirname+"/index.html");
// });

// app.get("/contact", function(req, res){
//     res.sendFile(__dirname+"/contact.html");
// });

// app.get("/profile/:name", function(req, res){
//     var _users = {
//             name:"Vitthal",
//             job:"Dev",
//             age:24,
//             hobbies:[
//                 'Eating',
//                 'Drinking',
//                 'Coding'
//             ]
//         };
//     res.render("profile",{person:req.params.name,data:_users});
// });

// app.listen(3000);
// console.log("Listening to port 3000");

// var server = http.createServer(function(req, res){
//     console.log("requested url is: "+ req.url);
//     if(req.url === "/home" || req.url === "/"){
//         res.writeHead(200, {'content-type':'text/html'});
//         fs.createReadStream(__dirname+"/index.html").pipe(res);
//     }else if(req.url ==='/contact' || req.url ==='/contact-us'){
//         res.writeHead(200, {'content-type':'text/html'});
//         fs.createReadStream(__dirname+"/contact.html").pipe(res);
//     }else if(req.url==='/api/users'){
        
//         res.writeHead(200, {'content-type':'application/json'});
//         res.end(JSON.stringify(_users));
//     }else{
//         res.writeHead(404, {'content-type':'text/html'});
//         fs.createReadStream(__dirname+"/404.html").pipe(res);
//     }
    
// });

