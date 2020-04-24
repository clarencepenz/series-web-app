import React from 'react'

import {StyledMovieInfo} from '../style/StyledMovieInfo'
import MovieThumb from '../elements/MovieThumb'
import NoImage from '../image/no_image.jpg';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../utils/Config';

const  EpisodeInfo = ({episodes}) =>  (
        <StyledMovieInfo backdrop={episodes.poster_path}>
            <div className="movieinfo-content">
                <div className="movieinfo-thumb">
                <MovieThumb
                    image={
                    episodes.poster_path
                        ? `${IMAGE_BASE_URL}${POSTER_SIZE}${episodes.poster_path}`
                        : NoImage
                    }
                    clickable={false}
                    alt="seriesthumb"
                />
                </div>
                <div className="movieinfo-text">
                <h1>{episodes.name}</h1>
                <h3>PLOT</h3>
                <p>{episodes.overview ? episodes.overview : 'Not available'}</p>
                
                <div className="rating-director">
                    <div>
                    <h3>Episodes</h3>
                    <div className="score">{episodes.episodes.length}</div>
                    </div>
                    {/* <div className="director">
                    <h3>Status</h3>
                    {episodes.status}
                    </div> */}
                </div>
                </div>
            </div>
        </StyledMovieInfo>
    )




export default EpisodeInfo;