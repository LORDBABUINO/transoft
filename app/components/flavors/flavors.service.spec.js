describe('Flavors Service', function () {

    var Flavors, httpBackend;

    beforeEach(function(){
      module('app');
      inject(function(_Flavors_, $httpBackend) {
        Flavors = _Flavors_;
        httpBackend = $httpBackend;
      });
    });

    afterEach(function() {
      httpBackend.verifyNoOutstandingExpectation();
      httpBackend.verifyNoOutstandingRequest();
    });

    it('should access "http://177.69.85.145:82/api/sabores', function() {
      var flavors;
      httpBackend.expectGET('http://177.69.85.145:82/api/sabores').respond([{}, {}, {}]);
      flavors = Flavors.query();
      httpBackend.flush();
      expect(flavors.length).toBe(3);
    });
});
