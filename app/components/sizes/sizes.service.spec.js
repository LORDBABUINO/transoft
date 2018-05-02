describe('Sizes Service', function () {

    var Sizes, httpBackend;

    beforeEach(function(){
      module('app');
      inject(function(_Sizes_, $httpBackend) {
        Sizes = _Sizes_;
        httpBackend = $httpBackend;
      });
    });

    afterEach(function() {
      httpBackend.verifyNoOutstandingExpectation();
      httpBackend.verifyNoOutstandingRequest();
    });

    it('should access "http://177.69.85.145:82/api/tamanhos', function() {
      var sizes;
      httpBackend.expectGET('http://177.69.85.145:82/api/tamanhos').respond([{}, {}, {}]);
      sizes = Sizes.query();
      httpBackend.flush();
      expect(sizes.length).toBe(3);
    });
});
