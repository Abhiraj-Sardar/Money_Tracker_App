const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/money").then(()=>{
    console.log("Database Connected Successfully");
}).catch((e)=>{
    console.log(e);
})

const Schema = mongoose.Schema({
    expense:String,
    amount:String,
    date:{
        type:Date,
        default:Date.now()
    }
});

const expenses=mongoose.model("expenses",Schema);
module.exports=expenses;
