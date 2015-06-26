describe('AdverseReaction', function() {
  beforeEach(module('faery'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  describe('$scope.drugList', function() {
    it('checks that true is true', function() {
      expect(true).toEqual(true);
    });
  });
});