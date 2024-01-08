const expenses = require("./database");
const express = require("express");
const app=express();

app.set("view engine","ejs");
app.use(express.static("./public"));
app.use(express.urlencoded({extended:false}));

app.get("/",async(req,res)=>{
    const expenseList = await expenses.find({});
    // console.log(expenseList);
    res.render("index",{
        expenseList:expenseList
    });
})

app.post("/insert",async(req,res)=>{
    const expense = req.body.expense;
    const amount = req.body.amount;
    const date = req.body.dop;
    const newExpense = new expenses({expense,amount,date});
    const newExpenseSave = await newExpense.save();
    res.redirect("/");
})

app.get("/delete/:id",async(req,res)=>{
    const id = req.params.id;
    const deleteExpense = await expenses.findByIdAndDelete({_id:id});
    res.redirect("/");
})

app.listen(3000,()=>{
    console.log("Application Running on Port 3000");
})