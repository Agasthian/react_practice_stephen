import React, { Component } from 'react';
import Searchbar from './components/searchBar/searchbar.components';
import VideoList from './components/videoList/videoList.components';
import VideoDetail from './components/videoDetail/videoDetail.component';
import youtube from './api/youtube';
import './App.css';

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null
  };
  componentDidMount() {
    this.onTermSubmit('nfs');
  }
  onTermSubmit = async term => {
    const KEY = 'AIzaSyBycHQlx1iMJ5_9SrUJllZNV9Wn_3aXv3U';
    const response = await youtube.get('/search', {
      params: {
        q: term,
        key: KEY,
        maxResults: 5,
        part: 'snippet'
      }
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };
  selectedVideo = video => {
    this.setState({ selectedVideo: video });
  };
  render() {
    return (
      <div className='ui container' style={{ marginTop: '2rem' }}>
        <Searchbar onFormSubmit={this.onTermSubmit} />
        <p>Number of videos found : {this.state.videos.length}</p>
        <div className='ui grid'>
          <div className='ten wide column'>
            <VideoDetail video={this.state.selectedVideo} />
          </div>
          <div className='six wide column'>
            <VideoList
              videos={this.state.videos}
              onSelectedVideo={this.selectedVideo}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
