'use strict';

var React = require('react/addons');
var Youtube = require('react-youtube');


require('styles/YoutubePlayer.less');

var YoutubePlayer = React.createClass({
  propTypes: {
    url: React.PropTypes.string
  },
  render: function () {
    return (
        <div className="YoutubePlayer">
          <Youtube url={this.props.url}/>
        </div>
      );
  }
});

export default YoutubePlayer;

