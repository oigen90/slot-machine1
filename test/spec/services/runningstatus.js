'use strict';

describe('Service: runningStatus', function () {

  // load the service's module
  beforeEach(module('webappApp'));

  // instantiate service
  var runningStatus;
  beforeEach(inject(function (_runningStatus_) {
    runningStatus = _runningStatus_;
  }));

  it('should do something', function () {
    expect(!!runningStatus).toBe(true);
  });

});
