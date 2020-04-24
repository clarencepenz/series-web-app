import React, { Component } from 'react'
import { Link } from '@reach/router';

import CSDBLogo from '../image/cipherSeries_logo.png';
import TMDBLogo from '../image/tmdb_logo.svg';

import { 
    StyledHeader, 
    StyledCSDBLogo, 
    StyledTMDBLogo
} from '../style/StyledHeader';

const Header = () => (
    <StyledHeader>
      <div className="header-content">
        <Link to="/">
          <StyledCSDBLogo src={CSDBLogo} alt="rmdb-logo" />
        </Link>
        <StyledTMDBLogo src={TMDBLogo} alt="tmdb-logo" />
      </div>
    </StyledHeader>
    )
    
    
    export default Header;
