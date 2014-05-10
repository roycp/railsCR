describe('SampleCtrl', function () {
  beforeEach(module('phoneApp'));

  it('should create "phones" model with 3 phones', inject(function ($controller) {
    var scope = {},
    ctrl = $controller('SampleCtrl', {'$scope': scope}); 

    expect(scope.phones.length).toBe(3);

    expect(scope.name).toBe('Roy');
  }));
});