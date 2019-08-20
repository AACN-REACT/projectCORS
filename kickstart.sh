#!/usr/bin/env node

// minimist parses parameters
const myparam = require('minimist')(process.argv.slice(2))

console.log("this is the directory",__dirname)

console.log("these are your args", myparam)



if (myparam.file){

    console.log("can not find this file: ", require('path').resolve(myparam.file))
}