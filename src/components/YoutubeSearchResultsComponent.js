'use strict';

import React from 'react';
import YoutubeSearchResultItem from 'components/YoutubeSearchResultItemComponent';

require('styles//YoutubeSearchResults.less');

class YoutubeSearchResultsComponent extends React.Component {
  render() {
    const items = (this.props.data || []).map((item) => (
    <YoutubeSearchResultItem key={item.id.videoId} item={item} onClickHandler={this.props.onClickHandler} />
    ));
    return (
      <div className="youtubesearchresults-component">
      <h3>Results</h3>
        <div className="list-group">
        {items}
        </div>
      </div>
      );
  }
}

YoutubeSearchResultsComponent.displayName = 'YoutubeSearchResultsComponent';

// Uncomment properties you need
YoutubeSearchResultsComponent.propTypes = {
  data: React.PropTypes.array,
  onClickHandler: React.PropTypes.func.isRequired
};
// YoutubeSearchResultsComponent.defaultProps = {};

export default YoutubeSearchResultsComponent;
