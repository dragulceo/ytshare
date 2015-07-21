'use strict';

var React = require('react/addons');
var Youtube = require('react-youtube');


require('styles/YoutubePlayer.less');

var YoutubePlayer = React.createClass({
  propTypes: {
    url: React.PropTypes.string
  },
  playerOpts: {
      playerVars: {
          autoplay: 1
      }
  },
  render: function () {
    return (
        <div className="YoutubePlayer">
          <Youtube url={this.props.url} opts={this.playerOpts}/>
        </div>
      );
  }
});

export default YoutubePlayer;

