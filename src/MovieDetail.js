import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function MovieDetail({ movie, apiKey, onHide }) {
  return (
    <Modal show={!!movie} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{movie && movie.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {movie && (
          <>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="img-fluid"
            />
            <p>Release Date: {movie.release_date}</p>
            <p>Overview: {movie.overview}</p>
            <p>Rating: {movie.vote_average}</p>
          </>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MovieDetail;
