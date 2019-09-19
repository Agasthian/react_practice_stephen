import React, { Component } from 'react';

import Searchbar from './components/Searchbar';
import Imagelist from './components/Imagelist';
import unsplash from './api/unsplash';
import './App.css';

class App extends Component {
  state = {
    images: []
  };
  onSearchSubmit = async term => {
    const response = await unsplash.get('/search/photos', {
      params: {
        query: term
      }
    });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className='ui container' style={{ marginTop: '10px' }}>
        <Searchbar onSubmit={this.onSearchSubmit} />
        <Imagelist images={this.state.images} />
      </div>
    );
  }
}

export default App;
