import { Router } from "express";
import movies from "../../movies.json" assert { type: 'json' };
import { randomUUID } from "crypto";

export const router = Router();

router.get("/", (req, res) => {
    return res.send(movies);
})


router.get("/:id", (req, res) => {
    const id = req.params.id;

    const movie = movies.find(movies => movies.id === id);

    if (movie) {
        return res.send(movie);
    }
    return res.status(404).json({ error: "Movie not found" });


})

router.post("/", (req, res) => {
    const { id, title, year, director, duration, poster, genre, rate } = req.body;
    const newMovie = {
        id: randomUUID(),
        title,
        year,
        director,
        duration,
        poster,
        genre,
        rate

    }

    movies.push(newMovie);
    return res.status(201).json(newMovie);
})

router.patch("/:id", (req, res) => {
    const id = req.params.id;

    const movieIndex = movies.findIndex(movies => movies.id === id);
    console.log(movies)
    console.log(movieIndex)
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

router.delete("/:id", (req, res) => {
    const { id } = req.params
    const movieIndex = movies.findIndex(movie => movie.id === id);
    if (movieIndex === -1) {
        return res.status(404).json({ error: 'Movie not found' });
    }
    movies.splice(movieIndex, 1);
    return res.json({ message: 'Movie deleted' });
})