import React, { Component } from 'react'

import { StyledLoadMoreBtn } from '../style/StyledLoadMoreBtn'

const LoadMore = ({ text, callback }) => (
    <StyledLoadMoreBtn type="button" onClick={callback}>
      {text}
    </StyledLoadMoreBtn>
  )


  export default LoadMore