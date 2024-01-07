const expenses = require("./database");
const express = require("express");
const app=express();

app.set("view engine","ejs");
app.use(express.static("./public"));
app.use(express.urlencoded({extended:false}));

app.get("/",(req,res)=>{
    res.render("index");
})

app.get("/insert",(req,res)=>{
    res.redirect("/");
})

app.post("/insert",async(req,res)=>{
    const expense = req.body.expense;
    const amount = req.body.amount;
    const date = req.body.date;
    const newExpense = new expenses({expense,amount,date});
    const newExpenseSave = await newExpense.save();
    res.redirect("index");
})

app.listen(3000,()=>{
    console.log("Application Running on Port 3000");
})