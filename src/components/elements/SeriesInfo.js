import React from 'react'

import {StyledMovieInfo} from '../style/StyledMovieInfo'
import MovieThumb from '../elements/MovieThumb'
import NoImage from '../image/no_image.jpg';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../utils/Config';

const  SeriesInfo = ({series}) =>  (
        <StyledMovieInfo backdrop={series.backdrop_path}>
            <div className="movieinfo-content">
                <div className="movieinfo-thumb">
                <MovieThumb
                    image={
                    series.poster_path
                        ? `${IMAGE_BASE_URL}${POSTER_SIZE}${series.poster_path}`
                        : NoImage
                    }
                    clickable={false}
                    alt="seriesthumb"
                />
                </div>
                <div className="movieinfo-text">
                <h1>{series.name}</h1>
                <h3>PLOT</h3>
                <p>{series.overview ? series.overview : 'Not available'}</p>
                
                <div className="rating-director">
                    <div>
                    <h3>IMDB RATING</h3>
                    <div className="score">{series.vote_average}</div>
                    </div>
                    <div className="director">
                    <h3>Status</h3>
                    {series.status}
                    </div>
                    <div className="director">
                    <h3>Seasons</h3>
                    <div className="score">{series.number_of_seasons}</div>
                    </div>
                </div>
                </div>
            </div>
        </StyledMovieInfo>
    )




export default SeriesInfo;