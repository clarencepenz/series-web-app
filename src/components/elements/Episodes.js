import React from 'react'

import {POPULAR_BASE_URL,
    SEARCH_BASE_URL,
    POSTER_SIZE,
    BACKDROP_SIZE,
    IMAGE_BASE_URL
} from '../utils/Config'

import { StyledEpisodeThumb } from '../style/StyledEpisodeThumb'
import NoImage from '../image/no_image.jpg';
import Seasons from './Seasons';


const Episodes = ({episode }) =>(

    <StyledEpisodeThumb>
        
         <img  
                src={
                episode.still_path
                    ? IMAGE_BASE_URL + POSTER_SIZE + episode.still_path
                    : NoImage
                }
                alt="Episodethumb"
                />
                 <span className="episode-number">{episode.episode_number}</span>
                <span className="episode-name">{episode.name}</span>
              
    </StyledEpisodeThumb>
    )
    



export default Episodes