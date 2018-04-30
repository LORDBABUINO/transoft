angular.
  module('app').
  factory('Edges', ['$resource',
    function($resource) {
      return $resource('http://177.69.85.145:82/api/bordas', {}, {
        query: {
          method: 'GET',
          isArray: true
        }
      });
    }
  ]);
