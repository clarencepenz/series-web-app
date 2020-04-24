import React, { Component } from 'react'

import { API_KEY, API_URL } from '../utils/Config'
import Navigation from '../elements/Navigation'
import EpisodeInfo from '../elements/EpisodeInfo'
import Grid from '../elements/Grid'
import Episodes from '../elements/Episodes'
import Spinner from '../elements/Spinner'
import Error from './Error'

export default class Episode extends Component {
    state = {
        loading: true,
        episodes: [],
        original_name: '',
        name: ''
    };

    fetchData = async () => {
        const { seriesId, seasonId } = this.props;
       
        this.setState({ loading: true, error: false });
    
        try {
          const endpoint = `${API_URL}tv/${seriesId}/season/${seasonId}?api_key=${API_KEY}`;
          const result = await (await fetch(endpoint)).json();
    console.log(result);
    
          this.setState(
            {
               ...result,
              loading: false,
            }
          );
        } catch (error) {
        //   this.setState({ error: true });
        } 
      };
    
      componentDidMount() {
        // const { seriesId, seasonId } = this.props;
        
      
        // if (localStorage[seriesId, seasonId]) {
        //   this.setState(JSON.parse(localStorage[seriesId ,seasonId]));
        // } else {
          this.fetchData();
        // }
      }
    

    render() {
        const {
          
            name,
           episodes,
            error,
            loading,
          } = this.state;
          const {seriesId} = this.props
          
          if(error) return <Error/>;
          if (!episodes[0]) return <Spinner />;
        return (
            <div>
                <Navigation  series={seriesId}/>
                <EpisodeInfo episodes={this.state}/>
                <Grid header='Episodes'>
                   {episodes.map(episode => (
                       
                        <Episodes  key={episode.id} episode={episode} />
                    ))}
                </Grid>
                {loading && <Spinner />}
            </div>
        )
    }
}
