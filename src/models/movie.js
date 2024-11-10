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

    //post
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
        return newMovie;
    }

    //delete
    static delete = async (id) => {
        const movieIndex = movies.findIndex(m => m.id === id);
        console.log(movieIndex)
        if (movieIndex === -1) return `404: Pelicula no encontrada`

        movies.splice(movieIndex, 1);
        return `202: La pelicula fue borrada`

    }

    //update
    static patch = async (id, { title, year, director, duration, poster, genre, rate }) => {
        const movieIndex = movies.findIndex(m => m.id === id);
        if (movieIndex === -1) return `404: Pelicula no encontrada`;

        movies[movieIndex] = {
            ...movies[movieIndex],
            title: title || movies[movieIndex].title,
            year: year || movies[movieIndex].year,
            director: director || movies[movieIndex].director,
            duration: duration || movies[movieIndex].duration,
            poster: poster || movies[movieIndex].poster,
            genre: genre || movies[movieIndex].genre,
            rate: rate || movies[movieIndex].rate
        }

        return movies[movieIndex];
    }
}