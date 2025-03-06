import { useState } from "react";
import workspace from "../assets/workspace.jpg";

const NewMovieForm = ({ currentLength, onAddMovie }) => {
  const [movie, setMovie] = useState({
    title: "",
    description: "",
    posterUrl: workspace,
    rating: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovie({ ...movie, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (movie.title && movie.description && movie.posterUrl && movie.rating) {
      onAddMovie({
        ...movie,
        id: currentLength + 1,
        rating: parseInt(movie.rating),
      });
    }
    setMovie({
      title: "",
      description: "",
      posterUrl: workspace,
      rating: "",
    });
  };

  return (
    <div style={{ margin: "15px 5px" }}>
      <form onSubmit={handleSubmit}>
        <h3 style={{ margin: "10px 5px" }}>Add New Movie</h3>
        <input
          type="text"
          name="title"
          placeholder="Type your movie name"
          required
          value={movie.title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Type your movie desc"
          required
          value={movie.description}
          onChange={handleChange}
        />
        <input
          type="text"
          name="rating"
          placeholder="Type your movie rating"
          required
          value={movie.rating}
          onChange={handleChange}
        />
        <button type="submit">Submit Movie</button>
      </form>
    </div>
  );
};

export default NewMovieForm;
