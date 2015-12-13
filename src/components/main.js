require('normalize.css');
require('styles/App.css');

import React from 'react';
import { Router, Route } from 'react-router'
import YtshareApp from './YtshareApp'

// let yeomanImage = require('../images/yeoman.png');
require('../styles/boostrap.less');

class AppComponent extends React.Component {
  render() {
    return (
      <Router>
        <Route path="/" component={YtshareApp}>
        </Route>
      </Router>
      );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
