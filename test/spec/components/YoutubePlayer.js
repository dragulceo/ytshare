'use strict';

describe('YoutubePlayer', function () {
  var React = require('react/addons');
  var YoutubePlayer, component;

  beforeEach(function () {
    YoutubePlayer = require('components/YoutubePlayer.js');
    component = React.createElement(YoutubePlayer);
  });

  it('should create a new instance of YoutubePlayer', function () {
    expect(component).toBeDefined();
  });
});
