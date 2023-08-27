const express = require('express');
const path = require("path")
const app = express();
const PORT = 3000;

app.get("/" , (req , res)=>{
    res.send("Hello world")
})

app.get("/contact" , (req , res)=>{
    res.status(400).json({name : "mudassir Contact"})
})
// for sending an html file 
app.use("/navbar" ,(req, res)=>{
    res.sendFile(path.join(__dirname , "index.html"))
})
app.listen(PORT , ()=>{
    console.log(`Server is listening on ${PORT}`)
})