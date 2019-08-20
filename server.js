"use strict"

var path = require('path');
var http = require('http');
var fs = require('fs');
var utik = require('util');

var staticAlias = require('node-static-alias')


// choose the port on which to run the server
const PORT = 8039;

// create an instance of a server and assign it a name  --- http.createServer() method returns our server
// it takes a function as a parameter that deals with the request and response
const httpserv = http.createServer(handlerequest)


// this function spins up the our instance  by invoking  the listen method , we pass in the PORT
function main(){
    httpserv.listen(PORT);
    console.log(`listening in http://localhost:${PORT}`)
}

// Now we invoke that function 
main()


//  this is the function that we pass to the instance to originally create it, it deals with the request and  response
function handlerequest(req,res){
    if(req.url!=="/about"){
    res.writeHead(200,{"Content-Type":"text/plain"});
    res.write("this is from the write function ")
    res.end("Hello, AACN")}
    else {
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write("<h1>THIS IS ABOUT PAGRE</h1>")
    }


}

// now to make routing easier we can employ the node-static-alias module
staticAlias