'use strict';

import React from 'react';
import Youtube from 'react-youtube';

require('styles/YoutubePlayer.less');

class YoutubePlayerComponent extends React.Component {
  render() {
    let videoId = this.props.url.replace(/.*v=([a-zA-Z0-9]*)(&.*$|$)/g, '$1');
    return (
      <div className="youtubeplayer-component">
          <Youtube url={this.props.url} videoId={videoId}/>
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

