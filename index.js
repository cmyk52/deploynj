const express = require("express");
const app = express();
const movies = require("./movies.json");
const crypto = require("crypto");
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

    if (movie) {
        return res.send(movie);
    }
    return res.status(404).json({ error: "Movie not found" });


})

//post.routes

app.post("/movies/", (req, res) => {
    const { id, title, year, director, duration, poster, genre, rate } = req.body;
    const newMovie = {
        id: crypto.randomUUID(),
        title,
        year,
        director,
        duration,
        poster,
        genre,
        rate

    }

    movies.push(newMovie);
    return res.status(201).send(movies);
})

//patch.routes

app.get("/movies/:id", (req, res) => {
    const id = req.params.id;
    const movieIndex = movies.findIndex(m => m.id === id);

    if (movieIndex === -1) {
        return res.status(404).json({ error: 'Movie not found' });
    }

    const movie = movies[movieIndex];
    const { title, year, director, duration, poster, genre, rate } = req.body;

    movie.title = title || movie.title;
    movie.year = year || movie.year;
    movie.director = director || movie.director;
    movie.duration = duration || movie.duration;
    movie.poster = poster || movie.poster;
    movie.genre = genre || movie.genre;
    movie.rate = rate || movie.rate;

    return res.json(movies[movieIndex]);


})


//delete.routes




//404.routes

app.use((req, res) => {
    return res.status(404).send("Not found");
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})