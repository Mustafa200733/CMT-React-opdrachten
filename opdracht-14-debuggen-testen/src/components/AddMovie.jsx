import { useState } from "react";

const AddMovie = ({ onAdd })  => {
  const [movie, setMovie] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmed = movie.trim(); // <-- fix voor edge cases

    if (trimmed === '') {
      alert('Movie name cannot be empty');
      return;
    }

    onAdd(trimmed);
    setMovie('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        value={movie}
        onChange={(e) => setMovie(e.target.value)}
        placeholder="Add a new movie"
      />
      <button type="submit">Add Movie</button>
    </form>
  );
}

export default AddMovie;
