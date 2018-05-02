describe('Edges Service', function () {

    var Edges, httpBackend;

    beforeEach(function(){
      module('app');
      inject(function(_Edges_, $httpBackend) {
        Edges = _Edges_;
        httpBackend = $httpBackend;
      });
    });

    afterEach(function() {
      httpBackend.verifyNoOutstandingExpectation();
      httpBackend.verifyNoOutstandingRequest();
    });

    it('should access "http://177.69.85.145:82/api/bordas', function() {
      var edges;
      httpBackend.expectGET('http://177.69.85.145:82/api/bordas').respond([{}, {}, {}]);
      edges = Edges.query();
      httpBackend.flush();
      expect(edges.length).toBe(3);
    });
});
