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
    return (
      <div className="youtubeplayer-component">
          <Youtube videoId={this.props.videoId} opts={this.playerOpts}/>
        </div>
      );
  }
}

YoutubePlayerComponent.displayName = 'YoutubePlayerComponent';

// Uncomment properties you need
YoutubePlayerComponent.propTypes = {
  videoId: React.PropTypes.string
};
// YoutubePlayerComponent.defaultProps = {};

export default YoutubePlayerComponent;

