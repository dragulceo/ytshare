'use strict';

import React from 'react';

require('styles//YoutubeSearch.less');

class YoutubeSearchComponent extends React.Component {
  render() {
    return (
      <div className="youtubesearch-component">
        <form className="form-inline" onSubmit={(e) => this.props.onClickHandler(e, this.refs.q.value)}>
          <div className="form-group">
            <input className="form-control" type="text" name="q" ref="q"/>
          </div>
          <button className="btn btn-success" onClick={(e) => this.props.onClickHandler(e, this.refs.q.value)}>Search</button>
        </form>
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
