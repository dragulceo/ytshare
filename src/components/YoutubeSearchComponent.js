'use strict';

import React from 'react';

require('styles//YoutubeSearch.less');

class YoutubeSearchComponent extends React.Component {
  render() {
    return (
      <div className="youtubesearch-component">
        <input type="text" name="q" ref="q"/>
        <button onClick={() => this.props.onClickHandler(this.refs.q.value)}>Search</button>
      </div>
      );
  }
}

YoutubeSearchComponent.displayName = 'YoutubeSearchComponent';

// Uncomment properties you need
YoutubeSearchComponent.propTypes = {
  onClickHandler: React.PropTypes.func.isRequired
};
// YoutubeSearchComponent.defaultProps = {};

export default YoutubeSearchComponent;
