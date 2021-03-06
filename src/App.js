import _ from 'lodash';
import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
import './App.css';

const API_KEY = 'AIzaSyBk0iVjcrBARDn6C03Dnmbu0hx0ZFxZCJU';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      videos: [],
      selectedVideo: null
    }
    this.videoSearch('youtube 2017');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
       });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

    return (
      <div className="App">
        <SearchBar 
          onSearchTermChange={videoSearch}
        />
        <div className="row">
        <VideoDetail 
          video={this.state.selectedVideo}
        />
        <VideoList 
          videos={this.state.videos}
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
        />
        </div>
      </div>
    );
  }
}

export default App;
