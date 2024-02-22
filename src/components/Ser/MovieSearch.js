
import React, { useState, useEffect } from 'react';
import './MovieSearch.css'; 

const MovieSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
       
        const apiKey = '4e44d9029b1270a757cddc766a1bcb63';
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchQuery}`
        );
        const data = await response.json();

        setSearchResults(data.results);
      } catch (error) {
        console.error('Error fetching movie search results:', error);
      }
    };

    if (searchQuery) {
      fetchMovies();
    }
  }, [searchQuery]);

  const handleMovieClick = async (movieId) => {
    try {
      // Replace 'YOUR_API_KEY' with your actual TMDB API key
      const apiKey = '4e44d9029b1270a757cddc766a1bcb63';
      const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`);
      const data = await response.json();

      setSelectedMovie(data);
    } catch (error) {
      console.error('Error fetching movie details:', error);
    }
  };

  return (
    <div className="movie-search-container">
      <h1>Movie Search</h1>

      <input
        type="text"
        placeholder="Search for a movie"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <div className="search-results">
        {searchResults.map((movie) => (
          <div
            key={movie.id}
            className="movie-result"
            onClick={() => handleMovieClick(movie.id)}
          >
            <img
              src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
              alt={movie.title}
            />
            <p>{movie.title}</p>
          </div>
        ))}
      </div>

      {selectedMovie && (
        <div className="movie-details">
          {/* <h2>{selectedMovie.title}</h2>
          <p>{selectedMovie.overview}</p>
          <p>Release Date: {selectedMovie.release_date}</p>
       
          <p>Genres: {selectedMovie.genres.map(genre => genre.name).join(', ')}</p>
          <p>Runtime: {selectedMovie.runtime} minutes</p>
   
          <p>Vote Average: {selectedMovie.vote_average}</p>
          
          <p>Budget/: {selectedMovie.budget}</p>
          
          <p>original_language: {selectedMovie.original_language}</p>
          
          <p>popularity: {selectedMovie.popularity}</p>
          
          <p>revenue: {selectedMovie.revenue}</p>
          
          <p>release_date: {selectedMovie.release_date}</p> */}
           <div className="movie__intro">
                <img className="movie__backdrop" src={`https://image.tmdb.org/t/p/original${selectedMovie ? selectedMovie.backdrop_path : ""}`} alt="soon" />
            </div>
            <div className="movie__posterBox">
                        <img className="movie__poster" src={`https://image.tmdb.org/t/p/original${selectedMovie ? selectedMovie.poster_path: ""}`} alt="soon"/>
                    </div>
               
          <div className="movie__releaseDate">{selectedMovie ?  "original_title : " + selectedMovie.original_title : ""}</div>
                        <div className="movie__releaseDate">{selectedMovie ?  "title : " + selectedMovie.title : ""}</div>
                        <div className="movie__releaseDate">{selectedMovie ? "tagline : "+ selectedMovie.tagline : ""}</div>
                        <div className="movie__releaseDate">{selectedMovie ?  "status : " + selectedMovie.status : ""}</div>
                        <div className="movie__releaseDate"> {selectedMovie ? "vote_average : "+selectedMovie.vote_average: ""} <i class="fas fa-star" /></div>  
                        <div className="movie__releaseDate">{selectedMovie ?  "vote_count : " + selectedMovie.vote_count : ""}</div>
                        <div className="movie__releaseDate">{selectedMovie ? "runtime : "+ selectedMovie.runtime + " mins" : ""}</div>
                        <div className="movie__releaseDate">{selectedMovie ? "Release date: " + selectedMovie.release_date : ""}</div>
                        <div className="movie__releaseDate">{selectedMovie ? "revenue : "+ selectedMovie.revenue : ""}</div>
                        <div className="movie__releaseDate">{selectedMovie ? "popularity : " + selectedMovie.popularity : ""}</div>
                        <div className="movie__releaseDate">{selectedMovie ? "original_language : " + selectedMovie.original_language : ""}</div>
                        <div className="movie__releaseDate">{selectedMovie ? "budget : " + selectedMovie.budget : ""}</div>
        </div>
      )}
    </div>
  );
};

export default MovieSearch;

