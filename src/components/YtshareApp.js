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
  _onItemClick(url) {
    var state = this.state;
    state.activeUrl = url;
    this.setState(state);
  }
  _getHandler(id) {
    var onClick = this._onItemClick.bind(this);
    return () => onClick(id);
  }
  render() {
    var list = '';
    var url = '';
    var onItemClick = this._onItemClick;
    var getHandler = this._getHandler.bind(this);
    var player;
    if (this.state) {
      if (this.state.data) {
        list = this.state.data.map((item, i) => {
          return (
            <li key={i}><a onClick={getHandler(item)} href="#">{item}</a></li>
            );
        });
      }
      if (this.state.activeUrl) {
        url = this.state.activeUrl;
        player = (
          <YoutubePlayer url={url}/>
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
