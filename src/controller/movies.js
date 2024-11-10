import { MovieModel } from "../models/movie.js";
export class MovieController {
    static async getAll(req, res) {

        const { genre } = req.query;
        const movies = await MovieModel.getAll({ genre })
        return res.json(movies);
    }

    static async getByid(req, res) {
        const id = req.params.id;
        const movie = await MovieModel.getId(id)
        if (!movie) return res.status(404).json({ error: "Movie not found" });
        return res.json(movie);



    }

    static async post(req, res) {
        const { id, title, year, director, duration, poster, genre, rate } = req.body;
        const newMovie = await MovieModel.newPost({ id, title, year, director, duration, poster, genre, rate })
        return res.status(201).json(newMovie);
    }


    static async patch(req, res) {
        const { id } = req.params;

        const updatedMovie = await MovieModel.patch(id, req.body)
        return res.json(updatedMovie);


    }

    static async delete(req, res) {
        const { id } = req.params
        const deletedMovie = await MovieModel.delete(id)
        return res.json(deletedMovie);
    }
}