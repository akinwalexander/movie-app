import React, { useState } from "react";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "A mind-bending thriller by Christopher Nolan.",
      posterURL:
        "https://m.media-amazon.com/images/S/pv-target-images/cc72ff2193c0f7a85322aee988d6fe1ae2cd9f8800b6ff6e8462790fe2aacaf3.jpg",
      rating: 5,
    },
    {
      title: "Interstellar",
      description: "A journey through space and time.",
      posterURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ11DtS2HHLba5FaL0Pp7FhOrxi2huOesValmjDLYr-HgS_lI7xLNosgToP1n5kTPm1JDQpLe2SxoCIljKcWK2uCrgVDFCNIpl1dHY7W0Q&s=10",
      rating: 4,
    },
  ]);

  // Filters
  const [titleFilter, setTitleFilter] = useState("");
  const [rateFilter, setRateFilter] = useState(0);

  // New Movie State
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: 0,
  });

  // Add Movie Handler
  const handleAddMovie = () => {
    setMovies([...movies, newMovie]);
    setNewMovie({ title: "", description: "", posterURL: "", rating: 0 });
  };

  // Filtered Movies
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
