'use strict';

describe('YoutubeAdder', function () {
  var React = require('react/addons');
  var YoutubeAdder, component;

  beforeEach(function () {
    YoutubeAdder = require('components/YoutubeAdder.js');
    component = React.createElement(YoutubeAdder);
  });

  it('should create a new instance of YoutubeAdder', function () {
    expect(component).toBeDefined();
  });
});
