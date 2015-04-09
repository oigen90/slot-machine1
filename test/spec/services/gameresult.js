'use strict';

describe('Service: gameResult', function () {

  // load the service's module
  beforeEach(module('webappApp'));

  // instantiate service
  var gameResult;
  beforeEach(inject(function (_gameResult_) {
    gameResult = _gameResult_;
  }));

  it('should do something', function () {
    expect(!!gameResult).toBe(true);
  });

});
