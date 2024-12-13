var fs=require('fs');
var os=require('os');
var user=os.userInfo()
var notes=require('./notes')
// console.log(user)

// fs.appendFile('greeting.txt','Hi' +user.username,()=>{
// console.log("file is created")
// })

console.log(notes)
var age=notes.age;
console.log(age)