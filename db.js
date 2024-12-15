const mongoose= require('mongoose')
// define the mongodb connection URL

const mongoURL='mongodb+srv://bipul:0000@revision.pdqsp.mongodb.net/'


// setup moongose
mongoose.connect(mongoURL,{
    // useNewUrlParser:true,
    // useUnifiedTopology:true
})

const db=mongoose.connection;

db.on('connected',()=>{
    console.log("Connected done to database")
});
db.on('disconnected',()=>{
    console.log("DisConnected done to database")
});
db.on('error',(err)=>{
    console.log("Connected to database:" , err)
});

module.exports=db;