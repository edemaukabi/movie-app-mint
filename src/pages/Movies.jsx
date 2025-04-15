import { useState } from "react";
import MovieList from "../components/MovieList";
import { data } from "../data";
import Filter from "../components/Filter";
import workspace from "../assets/workspace.jpg"
import NewMovieForm from "../components/NewMovieForm";
import Counter from "../components/Counter";

const Movies = () => {
  const [movies, setMovies] = useState(data);
  const [filteredMovies, setFilteredMovies] = useState(movies);

  const handleFilterMovies = ({ title, rating }) => {
    let tempMovies = movies;
    if (title) {
      tempMovies = tempMovies.filter((tempMovie) =>
        tempMovie.title.toLowerCase().includes(title.toLowerCase())
      );
    }
    if (rating) {
      tempMovies = tempMovies.filter(
        (tempMovie) => tempMovie.rating == parseInt(rating, 10)
      );
    }
    setFilteredMovies(tempMovies);
  };

  const addNewMovie = (newMovie) => {
    setMovies([newMovie, ...movies ])
    setFilteredMovies([newMovie, ...movies]);
  };
  return (
    <div>
      <h1>My MoviMovies</h1>
      <h2>My update</h2>
      <Counter />
      <NewMovieForm currentLength={movies.length} onAddMovie={addNewMovie}/>
      <Filter onFilter={handleFilterMovies} />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default Movies;
