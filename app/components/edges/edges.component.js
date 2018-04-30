angular.
  module('app').
  component('edges', {
    templateUrl: 'components/edges/edges.template.html',
    controller: [ 'Edges',
      function EdgesController(Edges) {
        this.edges = Edges.query();
      }
    ]
  });
