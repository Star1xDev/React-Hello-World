import {movies} from "./Data/movies.js";
import Movie from "./Movie";
import "./movies.css";
const fetchMoviesData = () => {
    return movies;
};

const MovieComponent = () => {
    const movieData = fetchMoviesData();

    return ( 
        <div className="movie-container">
            <h2>List of Movies:</h2>
            <ul className="movie-list">
                {movieData.map((movie) => (
                  <Movie key={movie.id} movie={movie}></Movie>
                ))}
            </ul>
        </div>
     );
  }
   
  export default MovieComponent;