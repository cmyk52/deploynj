const express = require("express");
const app = express();
const movies = require("./movies.json");
const PORT = process.env.PORT || 3000;

//middlewares

app.use(express.json());

//routes

//get.routes
app.get("/", (req, res) => {
    res.send("hola mundo");
})

app.get("/movies/", (req, res) => {

    return res.send(movies);


})

app.get("/movies/:id", (req, res) => {
    const id = req.params.id;

    const movie = movies.find(movies => movies.id === id);

    if (!movies) {
        return res.status(404).send("Movie not found");
    }

    return res.send(movie);


})

//put.routes


//patch.routes


//delete.routes




//404.routes

app.use((req, res) => {
    return res.status(404).send("Not found");
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})