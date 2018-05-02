describe('Ingredients', function(){

  var aWindow, $ctrl, location;

  beforeEach(function(){
    module('app');
    inject(function($componentController, $window, $location) {
      $ctrl = $componentController('ingredients');
      aWindow = $window;
      location = $location;
    });
    aWindow.localStorage.clear();
  });

  describe('finish', function(){

    it("should store the controller's array of ids in the storage", function(){
      $ctrl.ids = [1,2];
      $ctrl.finish();
      expect(aWindow.localStorage['ingredientIds']).toBe('1,2');
    });

    it("should call the path '/bordas'", function(){
      spyOn(location, 'path');
      $ctrl.finish();
      expect(location.path).toHaveBeenCalledWith('/bordas');
    });
  });

  describe('orderProp', function(){
    it("should be borda", function(){
      expect($ctrl.orderProp).toBe('ingrediente');
    });
  });
});
