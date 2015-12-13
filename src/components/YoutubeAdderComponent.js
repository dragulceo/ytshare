'use strict';

import React from 'react';
import YoutubeSearch from 'components/YoutubeSearchComponent';
import YoutubeSearchResults from 'components/YoutubeSearchResultsComponent';
import YoutubeStore from 'stores/YoutubeStore';
import YoutubeActions from 'actions/YoutubeActions';
import FirebaseActions from 'actions/FirebaseActionCreators';

require('styles//YoutubeAdder.less');

class YoutubeAdderComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
    this._onChange = this._onChange.bind(this);
  }
  componentDidMount() {
    YoutubeStore.listen(this._onChange);
  }
  componentWillUnmount() {
    YoutubeStore.unlisten(this._onChange);
  }
  _onChange() {
    this.setState(YoutubeStore.getState());
  }
  onSearchButtonPressed(e, q) {
    e.preventDefault();
    YoutubeActions.search(q);
  }
  onResultItemClicked(e, videoId) {
    e.preventDefault();
    FirebaseActions.add(videoId);
  }
  render() {
    return (
      <div className="youtubeadder-component">
        <h2>Add new videos</h2>
        <YoutubeSearch onClickHandler={this.onSearchButtonPressed} />
        <YoutubeSearchResults data={this.state.data || []} onClickHandler={this.onResultItemClicked} />
      </div>
      );
  }
}

YoutubeAdderComponent.displayName = 'YoutubeAdderComponent';

// Uncomment properties you need
// YoutubeAdderComponent.propTypes = {};
// YoutubeAdderComponent.defaultProps = {};

export default YoutubeAdderComponent;
