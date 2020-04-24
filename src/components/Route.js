import React from 'react'
import { Router } from '@reach/router';

import Header from './elements/Header'
import Home from './main/Home'
import Series from './main/Series';
import Episode from './main/Episode';
import NotFound from './main/NotFound';



const Route = () => (
        <div>
            <Header />
            <Router>
               <Home path='/' />
               <Series path='/:seriesId' />
               <Episode path='/:seriesId/season/:seasonId'/>
               <NotFound default />
            </Router>
            
        </div>
    )


export default Route