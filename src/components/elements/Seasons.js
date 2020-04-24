import React from 'react'

import {POPULAR_BASE_URL,
    SEARCH_BASE_URL,
    POSTER_SIZE,
    BACKDROP_SIZE,
    IMAGE_BASE_URL
} from '../utils/Config'
import { Link } from '@reach/router';
import { StyledMovieThumb } from '../style/StyledMovieThumb'
import NoImage from '../image/no_image.jpg';


const Seasons = ({season, seriesId, seasonId, clickable}) =>(
   
    <StyledMovieThumb clickable>
        <Link to={`/${seriesId}/season/${seasonId}`}>
            <img 
                src={
                season.poster_path
                    ? IMAGE_BASE_URL + POSTER_SIZE + season.poster_path
                    : NoImage
                }
                alt="seasonthumb"
                />
        </Link>   
        <span className="actor-name">{season.name}</span>
    </StyledMovieThumb>
    )



export default Seasons