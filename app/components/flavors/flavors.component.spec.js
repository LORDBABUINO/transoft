describe('Flavors', function(){

  var aWindow, $ctrl;

  beforeEach(function(){
    module('app');
    inject(function($componentController, $window) {
      $ctrl = $componentController('flavors');
      aWindow = $window;
    });
    aWindow.localStorage.clear();
  });

  describe('clearStorage', function(){
    it("should clear browser's storage", function(){
      aWindow.localStorage['test'] = 1;
      $ctrl.clearStorage();
      expect(aWindow.localStorage['test']).toBe(undefined);
    });
  });

  describe('storeFlavorId', function(){
    it("should store an id in the storage", function(){
      $ctrl.storeFlavorId(1);
      expect(aWindow.localStorage['flavorId']).toBe('1');
    });
  });

  describe('orderProp', function(){
    it("should be sabor", function(){
      expect($ctrl.orderProp).toBe('sabor');
    });
  });
});
