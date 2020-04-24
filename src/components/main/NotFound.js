import React from 'react'
import GifPlayer from 'react-gif-player'
import NotFound404 from '../image/404-not_found.gif'
import { StyledNotFound } from '../style/StyledNotFound'

const NotFound = ({image}) => (
    <StyledNotFound>
            <GifPlayer
                gif={image}
                autoplay = {true}
            />
    </StyledNotFound>
         
        
   
       
    )



export default NotFound

