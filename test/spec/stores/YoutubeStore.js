'use strict';

describe('YoutubeStore', function() {
  var store;

  beforeEach(function() {
    store = require('stores/YoutubeStore.js');
  });

  it('should be defined', function() {
    expect(store).toBeDefined();
  });
});
