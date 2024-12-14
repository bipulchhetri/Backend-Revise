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

// const express=require('express')
// const app=express();
// app.get('/',(req,res)=>
// {
//     res.send("Express server sent this")
// })

// app.get('/op', (req,res)=>
// {
   
//     let customize={
//         name:"Random",
//         size:"L"
//     }
//     res.send(customize)
// })
// app.listen(3000)

const express=require('express')
const app=express();

app.get('/',(req,res)=>{
    res.send("I am home page ")
})
app.get('/hello',(req,res)=>
{
    res.send("Hello how are you")
});
app.listen(3000, () =>{
    console.log("server is running ")
})