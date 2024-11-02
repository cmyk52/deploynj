const express = require("express");
const app = express();
const movies = require("./movies.json");
const PORT = process.env.PORT || 3000;

//middlewares

//routes

//get.routes
app.get("/", (req, res) => {
    res.send("hola mundo");
})

app.get("/movies", (req, res) => {
    res.send(movies);


})

//put.routes


//patch.routes


//delete.routes




//404.routes

app.use((req, res) => {
    res.status(404).send("Not found");
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})