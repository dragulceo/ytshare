'use strict';

import React from 'react';

require('styles//YoutubeSearchResultItem.less');

class YoutubeSearchResultItemComponent extends React.Component {
  render() {
    const item = this.props.item;
    return (
      <div className="list-group-item youtubesearchresultitem-component" onClick={() => this.props.onClickHandler(item.id.videoId)}>
        <h3>{item.snippet.title}</h3>
        <img src={item.snippet.thumbnails.default.url} />
        <p>{item.snippet.description}</p>
      </div>
      );
  }
}

YoutubeSearchResultItemComponent.displayName = 'YoutubeSearchResultItemComponent';

// Uncomment properties you need
YoutubeSearchResultItemComponent.propTypes = {
  item: React.PropTypes.object.isRequired,
  onClickHandler: React.PropTypes.func.isRequired
};
// YoutubeSearchResultItemComponent.defaultProps = {};

export default YoutubeSearchResultItemComponent;
