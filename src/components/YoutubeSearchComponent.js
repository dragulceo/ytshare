'use strict';

import React from 'react';

require('styles//YoutubeSearch.less');

class YoutubeSearchComponent extends React.Component {
  render() {
    return (
      <div className="youtubesearch-component">
  		<input type="text" name="q"/>
  		<button>Search</button>
  		<YoutubeResults />
      </div>
      );
  }
}

YoutubeSearchComponent.displayName = 'YoutubeSearchComponent';

// Uncomment properties you need
// YoutubeSearchComponent.propTypes = {};
// YoutubeSearchComponent.defaultProps = {};

export default YoutubeSearchComponent;
