'use strict';

describe('FirebaseActionCreators', function() {
  var action;

  beforeEach(function() {
    action = require('actions/FirebaseActionCreators.js');
  });

  it('should be defined', function() {
    expect(action).toBeDefined();
  });
});
