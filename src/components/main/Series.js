import React, { Component } from 'react'

import { API_KEY, API_URL } from '../utils/Config'
import Navigation from '../elements/Navigation'
import SeriesInfo from '../elements/SeriesInfo'
import Grid from '../elements/Grid'
import Seasons from '../elements/Seasons'
import Spinner from '../elements/Spinner'
import Error from './Error'

class Series extends Component {
    state = {
        loading: true,
        seasons: [],
        original_name: ''
    };

    fetchData = async () => {
        const { seriesId } = this.props;
        this.setState({ loading: true, error: false });
    
        try {
          const endpoint = `${API_URL}tv/${seriesId}?api_key=${API_KEY}`;
          const result = await (await fetch(endpoint)).json();
    console.log(result);
        //   const creditsEndpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
        //   const creditsResult = await (await fetch(creditsEndpoint)).json();
        //   const directors = creditsResult.crew.filter(
        //     member => member.job === 'Director',
        //   );
    
          this.setState(
            {
               ...result,
            //   actors: creditsResult.cast,
            //   directors,
              loading: false,
            },
            () => {
              localStorage.setItem(seriesId, JSON.stringify(this.state));
            },
          );
        } catch (error) {
          this.setState({ error: true });
        } 
      };
    
      componentDidMount() {
        const { seriesId } = this.props;
        if (localStorage[seriesId]) {
          this.setState(JSON.parse(localStorage[seriesId]));
        } else {
          this.fetchData();
        }
      }
    
    render() {
        const {
            original_name,
            // runtime,
            // budget,
            // revenue,
           seasons,
            error,
            loading,
          } = this.state;
          const { seriesId } = this.props;

          if (error) return <Error/>
          if (!seasons[0]) return <Spinner />;
        return (
            <div>
                <Navigation series={original_name} />
                <SeriesInfo series={this.state}/>
                <Grid header='Seasons'>
                   {seasons.map(season => (
                        <Seasons key={season.id} seriesId={seriesId}  seasonId={season.season_number} season={season}/>
                    ))}
                </Grid>
                {loading && <Spinner />}
                
            </div>
        )
    }
}


export default Series