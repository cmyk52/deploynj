import movies from "../../movies.json" assert { type: 'json' };
import { randomUUID } from "crypto";
export class MovieModel {
    //filtrado por genero
    static getAll = async ({ genre }) => {
        if (genre) {
            return movies.filter(m => m.genre.some(g => g.toLowerCase() === genre.toLowerCase()));
        }
        return movies;
    }

    //filtrado por id
    static getId = async (id) => {
        const movie = movies.find(m => m.id === id);

        if (movie) { return (movie) }

    }

    static newPost = async ({ title, year, director, duration, poster, genre, rate }) => {
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
        console.log(newMovie)
        return newMovie;
    }



}