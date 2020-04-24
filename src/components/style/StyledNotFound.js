import styled from 'styled-components'
import NotFound404 from '../image/404-not_found.gif'

export const StyledNotFound = styled.div`

background: ${props =>
    `
    url('${ NotFound404}'), #fff`};
  background-size: 100%, cover !important;
  background-position: center, center !important;
  background-repeat: no-repeat;
  width: 100%;
  height: 577px;
  position: relative;
  animation: animateHeroimage 1s;

  
  @media screen and (max-width: 1420px) {
    background: ${props =>
      `
      url('${ NotFound404}'), #fff`};
    background-size: 100%, cover !important;
    background-position: center, center !important;
    background-repeat: no-repeat;
    width: 100%;
    height: 550px;
    position: relative;
    animation: animateHeroimage 1s;
  }

  .heroimage-content {
    max-width: 1280px;
    padding: 20px;
    margin: 0 auto;
  }

  .heroimage-text {
    z-index: 100;
    max-width: 700px;
    position: absolute;
    bottom: 40px;
    margin-right: 20px;
    min-height: 100px;
    background: rgba(0, 0, 0, 0);
    color: #fff;

    h1 {
      font-family: 'Abel', sans-serif;
      font-size: 48px;
      color: #fff;

      @media screen and (max-width: 720px) {
        font-size: 38px;
        color: #fff;
      }
    }

    p {
      font-family: 'Abel', sans-serif;
      font-size: 22px;
      line-height: 26px;
      color: #fff;

      @media screen and (max-width: 720px) {
        font-size: 16px;
        line-height: 20px;
        color: #fff;
      }
    }

    @media screen and (max-width: 720px) {
      max-width: 100%;
    }
  }

  @keyframes animateHeroimage {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;