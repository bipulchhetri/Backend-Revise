// var fs=require('fs');
// var os=require('os');
// var user=os.userInfo()
// var notes=require('./notes')
// // console.log(user)

// // fs.appendFile('greeting.txt','Hi' +user.username,()=>{
// // console.log("file is created")
// // })

// console.log(notes)
// var age=notes.age;
// console.log(age)

const express=require('express')
const app=express();
app.get('/',(req,res)=>
{
    res.send("Express server sent this")
})

app.get('/op', (req,res)=>
{
   res.send("I will serverd chicken")
})
app.listen(3000)
