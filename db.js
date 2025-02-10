const mongoose=require('mongoose');


// Define the mongodb URL
const mongo_URL="mongodb+srv://bp:12345@backend.v5zaj.mongodb.net/"
mongoose.connect(mongo_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
const db = mongoose.connection;

db.on('connected',()=>{
    console.log("server connected sucessfully")
});
module.exports=db;