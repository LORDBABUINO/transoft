describe('Ingredients Service', function () {

    var Ingredients, httpBackend;

    beforeEach(function(){
      module('app');
      inject(function(_Ingredients_, $httpBackend) {
        Ingredients = _Ingredients_;
        httpBackend = $httpBackend;
      });
    });

    afterEach(function() {
      httpBackend.verifyNoOutstandingExpectation();
      httpBackend.verifyNoOutstandingRequest();
    });

    it('should access "http://177.69.85.145:82/api/ingredientes', function() {
      var ingredients;
      httpBackend.expectGET('http://177.69.85.145:82/api/ingredientes').respond([{}, {}, {}]);
      ingredients = Ingredients.query();
      httpBackend.flush();
      expect(ingredients.length).toBe(3);
    });
});
