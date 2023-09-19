import React, { useEffect, useState } from 'react';

import MovieList from './MovieList';
import MovieDetail from './MovieDetail';

function App() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const apiKey = 'e984e01603eb95476c413e332ec92b00'; // Replace with your API key

useEffect(()=>{
  const handleSearch = async () => {
    try {
      // Fetch movie data based on the search query
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`
      );
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  handleSearch();

},[query])

  return (
    <div className="App">
      <h1>Movie Search App</h1>
      <input
        type="text"
        placeholder="Search for a movie..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <MovieList movies={movies} setSelectedMovie={setSelectedMovie} />
      <MovieDetail movie={selectedMovie} apiKey={apiKey} onHide={() => setSelectedMovie(null)} />
    </div>
  );
}

export default App;
