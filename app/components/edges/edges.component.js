angular.
  module('app').
  component('edges', {
    templateUrl: 'components/edges/edges.template.html',
    controller: [ 'Edges', '$window',
      function EdgesController(Edges, $window) {
        var self = this;
        this.edges = Edges.query();

        self.storeEdgeId = function storeEdgeId(id){
          $window.localStorage['edgeId'] = id;
        }
      }
    ]
  });
