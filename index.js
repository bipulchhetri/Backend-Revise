// function add(a,b){
//     return a+b;
// }

// result =add(5,10)
// console.log(result)


// function callback()
// {
//     console.log("hello bipul")
// }

// const add=function(a,b,callback)
// {
//     var result=a+b;
//     console.log(result)
//     callback();
// }
// add(7,6,callback)

// const add=function(a,b,pr)
// {
//     var result=a-b;
//     console.log(result)
//     pr()
// }
// add(2,56 ,function(){
//     console.log("sub completed")
// })

// var fs=require('fs')
// var os=require('os')

// var user=os.userInfo()
// console.log(user.username)

// fs.appendFile('greeting.txt','Hi'+ user.username+' !\n',()=>{
//     console.log("file is created")
// })


// ******** JSON *****

// const data={
//     name:"Bipul",
//     age:25
// };
// const json=JSON.stringify(data);
// console.log(json)
// console.log(typeof json)

// end 

// create a server *****

const express=require('express')
const app=express();

app.get('/',function(req,res)
{
    res.send("Great man")
})

app.get('/hy',function(req,res)
{
    res.send("Great mhghgfan")
})

app.get('/wow',function(req,res)
{
    var yoo={
        name:'wow',
        price:1000
    }
    res.send(yoo)
})

app.listen(3000)
{
    console.log("run ok")
}