const {mongoose} = require("mongoose");

const personSchema= new mongoose.Schema({
    name:{
        type:String,
    required:true
    },
    age:{
        type:Number
    },
    email:{
        type:String
    }
});

// Create model

const person=mongoose.model('personx',personSchema);
module.exports=person;