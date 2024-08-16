import express from "express";
const app=express();
let port=1234;
app.set("view engine", "hbs");

app.get("/", (req, res)=>{
    res.render("home");
});

app.listen(port, ()=>{
    console.log("port is start");
});