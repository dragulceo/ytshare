'use strict';

import React from 'react';
import YoutubeSearchResultItem from 'components/YoutubeSearchResultItemComponent';

require('styles//YoutubeSearchResults.less');

class YoutubeSearchResultsComponent extends React.Component {
  render() {
    const items = (this.props.data || []).map((item) => (
    <li key={item.id.videoId}><YoutubeSearchResultItem item={item} onClickHandler={this.props.onClickHandler} /></li>
    ));
    return (
      <div className="youtubesearchresults-component">
      <ul>
      {items}
      </ul>
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
