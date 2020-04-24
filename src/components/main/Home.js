import React, { Component } from 'react'

import {POPULAR_BASE_URL,
    SEARCH_BASE_URL,
    POSTER_SIZE,
    BACKDROP_SIZE,
    IMAGE_BASE_URL
} from '../utils/Config'

import HeroImage from '../elements/HeroImage'
import Grid from '../elements/Grid'
import MovieThumb from '../elements/MovieThumb'
import SearchBar from '../elements/SearchBar'
import Spinner from '../elements/Spinner'
import LoadMore from '../elements/LoadMore'

import NoImage from '../image/no_image.jpg'
import Error from './Error'

class Home extends Component {
    state = {
        tv: [],
        currentPage: '',
        totalPages: '',
        searchTerm: '',
        heroImage: '',
        loading: true,
        error: false,
      };


      fetchTv = async endpoint => {
        this.setState({ loading: true, error: false });
    
        const { searchTerm } = this.state;
        const isLoadMore = endpoint.search('page');
    
        try {
          const result = await (await fetch(endpoint)).json();
          console.log(result);
         
          this.setState(
            prev => ({
              ...prev,
              tv: isLoadMore !== -1
              ? [...prev.tv, ...result.results]
              : [...result.results],
              heroImage: result.results[0],
              currentPage: result.page,
              totalPages: result.total_pages,
              loading: false,
            }),
            () => {
              if (!searchTerm) {
                sessionStorage.setItem('homeState', JSON.stringify(this.state));
              }
            },
          );
          
        } catch (error) {
          this.setState({ error: true });
          console.log(error);
        }
      };

      searchSeries = search => {
        const endpoint = search ? SEARCH_BASE_URL + search : POPULAR_BASE_URL;
    
        this.setState({ searchTerm: search });
        this.fetchTv(endpoint);
      };

    
      componentDidMount() {
        if (sessionStorage.homeState) {
            this.setState(JSON.parse(sessionStorage.homeState));
          } else {
            this.fetchTv(POPULAR_BASE_URL);
          }
        
      }

      loadMoreSeries = () => {
        const { searchTerm, currentPage } = this.state;
        const searchEndpoint = `${SEARCH_BASE_URL}${searchTerm}&page=${currentPage + 1}`;
        const popularEndpoint = `${POPULAR_BASE_URL}&page=${currentPage + 1}`;
    
        const endpoint = searchTerm ? searchEndpoint : popularEndpoint;
    
        this.fetchTv(endpoint);
      };


    render() {
        const {
            searchTerm,
            heroImage,
            tv,
            currentPage,
            totalPages,
            loading,
            error,
          } = this.state;

          if (error) return <Error/>;
          if (!tv[0]) return <Spinner />;
        return (
            <div>
                  {!searchTerm && (            
                    <HeroImage
                        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage.backdrop_path}`}
                        title={heroImage.original_name}
                        text={heroImage.overview}
                    />
                    )}

             
                <SearchBar callback={this.searchSeries}/>
                <Grid header={searchTerm ? 'Search Result' : 'Popular Series'}>
                    {tv.map(series => (
                        <MovieThumb
                        key={series.id}
                        clickable
                        image={
                            series.poster_path
                            ? IMAGE_BASE_URL + POSTER_SIZE + series.poster_path
                            : NoImage
                        }
                        seriesId={series.id}
                        movieName={series.original_title}
                        />
                    ))}
                </Grid> 
                {loading && <Spinner />}
                  {currentPage < totalPages && !loading && (
                    <LoadMore text="Load More" callback={this.loadMoreSeries} />
                  )}
                  {/* <LoadMore text="Load More" callback={this.loadMoreSeries} /> */}

            </div>
        )
    }
}


export default  Home;