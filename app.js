const express = require('express')
const path = require('path')

const app = express()
app.use(express.static(path.join(__dirname,"public")));

app.listen(3000, () => { 
    console.log("Escuchando")
})

app.get("/", (req,res)=> {
    res.sendFile(path.resolve("./views/home.html"))
})

app.get("/home", (req,res)=> {
    res.sendFile(path.resolve("./views/home.html"))
})