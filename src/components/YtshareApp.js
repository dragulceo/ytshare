'use strict';

import React from 'react';
// var ReactTransitionGroup = React.addons.TransitionGroup;
import YtShareStore from 'stores/YtShareStore';
import YoutubePlayer from './YoutubePlayerComponent';
import YoutubeAdder from './YoutubeAdderComponent';

// CSS
require('normalize.css');
require('../styles/main.css');

class YtshareApp extends React.Component {
  constructor() {
    super();
    this._onChange = this._onChange.bind(this);
  }
  componentDidMount() {
    YtShareStore.listen(this._onChange);
  }
  componentWillUnmount() {
    YtShareStore.unlisten(this._onChange);
  }
  _onChange() {
    this.setState(YtShareStore.getState());
  }
  _onItemClick(videoId) {
    var state = this.state;
    state.activeVideoId = videoId;
    this.setState(state);
  }
  _getHandler(id) {
    var onClick = this._onItemClick.bind(this);
    return () => onClick(id);
  }
  render() {
    let list = '';
    let videoId = '';
    const getHandler = this._getHandler.bind(this);
    let player;
    if (this.state) {
      if (this.state.data) {
        list = [];
        for(
        let key

        of Object.keys(this.state.data)) {
        let value = this.state.data[key];
        list.push(
          <a className="list-group-item" key={key} onClick={getHandler(value)} href="#"><img className="img-rounded" src={'https://i.ytimg.com/vi/' + value + '/default.jpg'}/><br/>{value}</a>
        );
        }
        list.reverse();
      }
      if (this.state.activeVideoId) {
        videoId = this.state.activeVideoId;
        player = (
          <YoutubePlayer videoId={videoId}/>
        );
      }
    }
    return (
      <div className='main container'>
        <h1>Youtube social playlists</h1>
        <p>Sharable playlists</p>
        <div className="row">
          <div className="col-md-8">
            {player}
            <YoutubeAdder />
          </div>
          <div className="col-md-4">
            <div className="list-group">
            {list}
            </div>
          </div>
        </div>
      </div>
      );
  }
}

module.exports = YtshareApp;
