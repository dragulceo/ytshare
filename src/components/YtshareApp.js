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
  /*eslint-disable no-unused-vars */
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
    var list = '';
    var videoId = '';
    var onItemClick = this._onItemClick;
    var getHandler = this._getHandler.bind(this);
    var player;
    if (this.state) {
      if (this.state.data) {
        list = [];
        for(
        let key
 of Object.keys(this.state.data)) {
        let value = this.state.data[key];
        list.push(
          <li key={key}><a onClick={getHandler(value)} href="#">{value} <img src={"https://i.ytimg.com/vi/" + value + "/default.jpg"}/></a></li>
        );
        }
      }
      if (this.state.activeVideoId) {
        videoId = this.state.activeVideoId;
        player = (
          <YoutubePlayer videoId={videoId}/>
        );
      }
    }
    return (
      <div className='main'>
          {player}
          {list}
          <YoutubeAdder />
      </div>
      );
  }
}

module.exports = YtshareApp;
