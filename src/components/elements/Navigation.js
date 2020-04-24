import React from 'react'
import { Link } from '@reach/router';

import {StyledNavigation} from '../style/StyledNavigation'

const Navigation = ({ series}) => (
    <StyledNavigation>
      <div className="navigation-content">
        <Link to="/">
          <p>Home</p>
        </Link>
        <p>|</p>
        <p>{series}</p>
      </div>
    </StyledNavigation>
  );



export default Navigation;