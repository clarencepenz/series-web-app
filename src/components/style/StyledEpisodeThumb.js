import styled from 'styled-components';

export const StyledEpisodeThumb = styled.div`
  font-family: 'Abel', sans-serif;
  text-align: center;
  font-weight: bold;
  background: #000;
  font-size: 11px;
  color: #fff;
  padding: 5px 5px 15px 5px;
  border-radius: 20px;


  .episode-number{
    background: #fff;
    color: #000;
    width: 35px;
    height: 35px;
    border-radius: 25px;
    padding: 0 5%;
    margin-right: 5px;
    font-size: 10px;
  }

  span{
    margin-top: 10px;
  }
  
  img {
    width: 100%;
    min-height: 280px; 
    transition: all 0.3s;
    object-fit: cover;
    border-radius: 20px;
    padding-bottom: 10px;
    animation: animateMovieThumb 0.5s;

    :hover {
      opacity: 0.8;
    }

    .clickable {
      cursor: pointer;
    }

    

    @keyframes animateMovieThumb {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }

  
`;
