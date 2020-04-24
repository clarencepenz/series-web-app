import React from 'react';
import { Link } from '@reach/router';
import PropTypes from 'prop-types';

import { StyledMovieThumb } from '../style/StyledMovieThumb';

const MovieThumb = ({ image, seriesId, clickable }) => (
  <StyledMovieThumb>
    {clickable ? (
      <Link to={`/${seriesId}`}>
        <img className="clickable" src={image} alt="moviethumb" />
       </Link>
    ) : (
      <img src={image} alt="seriesthumb" />
    )}
  </StyledMovieThumb>
)

MovieThumb.propTypes = {
  image: PropTypes.string,
  movieId: PropTypes.number,
  clickable: PropTypes.bool,
}

export default MovieThumb;

