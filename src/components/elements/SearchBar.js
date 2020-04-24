import React, { Component } from 'react'

import { StyledSearchBar,  StyledSearchBarContent } from '../style/StyledSearchBar'

class SearchBar extends Component {
    state = { inputValue: '' };

  timeOut = null;

  doSearch = event => {
    const { callback } = this.props;
    const { value } = event.target;

    this.setState({ inputValue: value });
    clearTimeout(this.timeOut);

    this.timeOut = setTimeout(() => {
      const { inputValue } = this.state;
      callback(inputValue);
    }, 500);
  };

  render() {
    const { inputValue } = this.state;

    return (
      <StyledSearchBar>
        <StyledSearchBarContent>
          {/* <FontAwesome className="fa-search" name="search" size="2x" /> */}
          <input
            type="text"
            placeholder="Search Series"
            onChange={this.doSearch}
            value={inputValue}
          />
        </StyledSearchBarContent>
      </StyledSearchBar>
    );
  }
}


export default  SearchBar;