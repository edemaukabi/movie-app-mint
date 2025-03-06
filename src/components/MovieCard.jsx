
const MovieCard = ({ movie }) => {
  return (
    <div>
      <h3>{movie.title}</h3>
      <img src={movie.posterUrl} alt={movie.title}/>
      <p>{movie.description}</p>
      <p><b>Rating:</b> {movie.rating}</p>
    </div>
  )
}

export default MovieCard
