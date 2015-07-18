'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;
var YoutubeStore = require('../stores/YoutubeStore');

// CSS
require('normalize.css');
require('../styles/main.css');

var imageURL = require('../images/yeoman.png');

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
  render: function() {
    var list = '';
    if(this.state.data) {
      list = this.state.data.map((item) => {
        return (
          <li><a href={item}>{item}</a></li>
        );
      });
    }
    return (
      <div className='main'>
        <ReactTransitionGroup transitionName="fade">
          <img src={imageURL} />
          {list}
        </ReactTransitionGroup>
      </div>
    );
  }
});

module.exports = YtshareApp;
