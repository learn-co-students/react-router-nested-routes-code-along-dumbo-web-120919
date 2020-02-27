import React from 'react';
import {Link} from 'react-router-dom';

const MoviesList = (props) => {
  const renderMovies = Object.keys(props.movies).map(movieID => {
    return <Link key={movieID} to={`/movies/${movieID}`}>{props.movies[movieID].title}</Link>
  })

  return (
    <div>
      {renderMovies}
    </div>
  );
};

export default MoviesList;