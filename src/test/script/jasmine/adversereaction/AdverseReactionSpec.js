describe('Faery Controllers', function() {

  var controller, scope;

  beforeEach(module('faery'));

  beforeEach(inject(function($rootScope, $controller) {
	scope = $rootScope;
    controller = $controller('AdverseReaction', {$scope: scope});
  }));

  describe('AdverseReaction',
	function() {
	  it('checks that true is true', function() {
		  expect(true).toEqual(true);
		});
  });
});