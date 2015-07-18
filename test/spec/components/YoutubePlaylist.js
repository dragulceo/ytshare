'use strict';

describe('YoutubePlaylist', function () {
  var React = require('react/addons');
  var YoutubePlaylist, component;

  beforeEach(function () {
    YoutubePlaylist = require('components/YoutubePlaylist.js');
    component = React.createElement(YoutubePlaylist);
  });

  it('should create a new instance of YoutubePlaylist', function () {
    expect(component).toBeDefined();
  });
});
