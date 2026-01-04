import React, { useState } from "react";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "A mind-bending thriller by Christopher Nolan.",
      posterURL:
        "https://m.media-amazon.com/images/I/51s+GmEwGUL._AC_.jpg",
      rating: 5,
    },
    {
      title: "Interstellar",
      description: "A journey through space and time.",
      posterURL:
        "https://m.media-amazon.com/images/I/71n58w9p5EL._AC_SL1024_.jpg",
      rating: 4,
    },
  ]);

  const [titleFilter, setTitleFilter] = useState("");
  const [rateFilter, setRateFilter] = useState(0);

  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: 0,
  });

  const handleAddMovie = () => {
    setMovies([...movies, newMovie]);
    setNewMovie({ title: "", description: "", posterURL: "", rating: 0 });
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.rating >= rateFilter
  );

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>🎬 Movie App</h1>

      <Filter
        setTitleFilter={setTitleFilter}
        setRateFilter={setRateFilter}
      />

      <h2>Add New Movie</h2>
      <input
        placeholder="Title"
        value={newMovie.title}
        onChange={(e) =>
          setNewMovie({ ...newMovie, title: e.target.value })
        }
      />
      <br />

      <input
        placeholder="Description"
        value={newMovie.description}
        onChange={(e) =>
          setNewMovie({ ...newMovie, description: e.target.value })
        }
      />
      <br />

      <input
        placeholder="Poster URL"
        value={newMovie.posterURL}
        onChange={(e) =>
          setNewMovie({ ...newMovie, posterURL: e.target.value })
        }
      />
      <br />

      <input
        type="number"
        placeholder="Rating"
        min="0"
        max="5"
        value={newMovie.rating}
        onChange={(e) =>
          setNewMovie({ ...newMovie, rating: Number(e.target.value) })
        }
      />
      <br />

      <button onClick={handleAddMovie} style={{ margin: "10px" }}>
        Add Movie
      </button>

      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;
