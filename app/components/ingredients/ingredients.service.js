angular.
  module('app').
  factory('Ingredients', ['$resource',
    function($resource) {
      return $resource('http://177.69.85.145:82/api/ingredientes', {}, {
        query: {
          method: 'GET',
          isArray: true
        }
      });
    }
  ]);
