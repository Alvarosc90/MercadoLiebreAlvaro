const express = require('express')
const path = require('path')
const port = process.env.PORT || 3001;

const app = express()
app.use(express.static(path.join(__dirname,"public")));

app.listen(port, () => { 
    console.log("Escuchando")
})

app.get("/", (req,res)=> {
    res.sendFile(path.resolve("./views/home.html"))
})

app.get("/home", (req,res)=> {
    res.sendFile(path.resolve("./views/home.html"))
})


