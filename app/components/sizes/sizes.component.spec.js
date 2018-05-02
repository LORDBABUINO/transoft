describe('Sizes', function(){

  var aWindow, $ctrl;

  beforeEach(function(){
    module('app');
    inject(function($componentController, $window) {
      $ctrl = $componentController('sizes');
      aWindow = $window;
      aWindow.localStorage.clear();
    });
  });

  describe('storeSizeId', function(){
    it("should store an id in the storage", function(){
      $ctrl.storeSizeId(1);
      expect(aWindow.localStorage['sizeId']).toBe('1');
    });
  });
});
