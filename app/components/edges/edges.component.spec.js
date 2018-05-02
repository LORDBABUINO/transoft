describe('Edges', function(){

  var aWindow, $ctrl;

  beforeEach(function(){
    module('app');
    inject(function($componentController, $window) {
      $ctrl = $componentController('edges');
      aWindow = $window;
      aWindow.localStorage.clear();
    });
  });

  describe('storeEdgeId', function(){

    it("should store an id in the storage", function(){
      $ctrl.storeEdgeId(1);
      expect(aWindow.localStorage['edgeId']).toBe('1');
    });
  });
});
