let a=4;
let b=2;
let ans=a+b;
console.log(ans)

//array

const car=['sav','bmw','tesla'];
car.push("tata")
console.log(car)

var age=17;
if(age<18)
{
    console.log("YOU CAN'T VOTE")
}
else{
    console.log("you can vote")
}

let x=10;
for(let i=0;i<=x;i++)
{
    console.log(i)
}

const person={
    name:"Bipul",
    age:19,
    isStudent:false
};
console.log(person)

const ages=[15,18,10,19];
const result=ages.filter(Checkage);
function Checkage(ages)
{
    return ages<18
}
console.log(result)

console.log("server is running")

//ABOUT FUNCTION

function add(a,b){
    return a+b;
}
const result =add(30,4);
console.log(result)


var newAdd=function(a,b)
{
    return a+b;
}
console.log(newAdd(72,3))

function callBack(){
    console.log(" I am call back funtion")
}
const addx=function(a,b,callBack)
{
    var result= a+b;
    console.log('result', + result);
    callBack()
}
addx(4,2,callBack)

