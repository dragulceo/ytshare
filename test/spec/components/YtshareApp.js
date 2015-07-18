'use strict';

describe('YtshareApp', function () {
  var React = require('react/addons');
  var YtshareApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    YtshareApp = require('components/YtshareApp.js');
    component = React.createElement(YtshareApp);
  });

  it('should create a new instance of YtshareApp', function () {
    expect(component).toBeDefined();
  });
});
