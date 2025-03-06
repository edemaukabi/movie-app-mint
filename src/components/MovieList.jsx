import MovieCard from "./MovieCard"

const MovieList = ({ movies }) => {
  return (
    <div>
      <h3>MovieList</h3>
      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.id}/>
      ))}
    </div>
  )
}

export default MovieList
