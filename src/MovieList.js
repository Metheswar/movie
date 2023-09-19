import React from 'react';
import Card from 'react-bootstrap/Card';

function MovieList({ movies, setSelectedMovie }) {
  return (
    <div className="row">
      {movies.map((movie) => (
        <div key={movie.id} className="col-md-4 mb-3">
          <Card>
            <Card.Img
              variant="top"
              src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
              alt={movie.title}
            />
            <Card.Body>
              <Card.Title>{movie.title}</Card.Title>
              <button
                className="btn btn-primary"
                data-toggle="modal"
                data-target="#movieModal"
                onClick={() => setSelectedMovie(movie)}
              >
                View Details
              </button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
