'use strict';

import React from 'react';
import Youtube from 'react-youtube';

require('styles/YoutubePlayer.less');

class YoutubePlayerComponent extends React.Component {
  constructor() {
    super();
    this.playerOpts = {
      playerVars: {
        autoplay: 1
      }
    }
  }
  render() {
    let videoId = this.props.url.replace(/.*v=([a-zA-Z0-9]*)(&.*$|$)/g, '$1');
    return (
      <div className="youtubeplayer-component">
          <Youtube url={this.props.url} videoId={videoId} opts={this.playerOpts}/>
        </div>
      );
  }
}

YoutubePlayerComponent.displayName = 'YoutubePlayerComponent';

// Uncomment properties you need
YoutubePlayerComponent.propTypes = {
  url: React.PropTypes.string
};
// YoutubePlayerComponent.defaultProps = {};

export default YoutubePlayerComponent;

