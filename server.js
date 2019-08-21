"use strict"

var path = require('path');
var http = require('http');
var fs = require('fs');
var utik = require('util');

var WEB_PATH = path.resolve(__dirname,'public')
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

    fileServer.serve(req,res)


}

// now to make routing easier we can employ the node-static-alias module
var fileServer = new staticAlias.Server(WEB_PATH,{
    
    cache:100,
    serverInfo: "WORKSHOP",
    alias: [
        {
            match: /^\/(?:index\/?)?(?:[?#].*$)?$/,
            serve: "index.html",
            force:true,        
        },
        {
            match: /^\/(?:[\w\d]+)(?:[\/?#].*$)?$/,
            serve: params=>`${params.basename}.html`       
        },
        {
            match: /[^]/,
            serve: "You scored a 404 ERROR"
        }
    ],
})