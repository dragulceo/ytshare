'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;
var YoutubeStore = require('../stores/YoutubeStore');
var YoutubePlayer = require('./YoutubePlayer');

// CSS
require('normalize.css');
require('../styles/main.css');

var YtshareApp = React.createClass({
  getInitialState() {
    return YoutubeStore.getState();
  },
  componentDidMount() {
    YoutubeStore.listen(this._onChange);
  },
  componentWillUnmount() {
    YoutubeStore.unlisten(this._onChange);
  },
  _onChange() {
    this.setState(YoutubeStore.getState());
  },
  /*eslint-disable no-unused-vars */
  _onItemClick(url) {
    var state = this.state;
    state.activeUrl = url;
    this.setState(state);
  },
  _getHandler: function (id) {
    var onClick = this._onItemClick;
    return () => onClick(id);
  },
  render: function () {
    var list = '', url = '', onItemClick = this._onItemClick, getHandler = this._getHandler;
    if (this.state.data) {
      list = this.state.data.map((item) => {
        return (
          <li><a onClick={getHandler(item)} href="#">{item}</a></li>
        );
      });
    }
    if (this.state.activeUrl) {
      url = this.state.activeUrl;
    }
    return (
      <div className='main'>
        <ReactTransitionGroup transitionName="fade">
          <YoutubePlayer url={url}/>
          {list}
        </ReactTransitionGroup>
      </div>
    );
  }
});

module.exports = YtshareApp;
