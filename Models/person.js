const {mongoose} = require("mongoose");

const personSchema= new mongoose.Schema({
    name:{
        type:String,
    required:true
    },
    age:{
        type:Number
    },
    work:{
type:String,
enum:['engineer','doctor','ips'],
required:true
    },
    mobile:{
        type:String
    },
    email:{
        type:Number,
        required:true,
        unique:true
    }
});

// Create model

const person=mongoose.modelNames('perosn',personSchema);
module.exports=person;