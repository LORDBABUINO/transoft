angular.
  module('app').
  factory('Flavors', ['$resource',
    function($resource) {
      return $resource('http://177.69.85.145:82/api/sabores', {}, {
        query: {
          method: 'GET',
          isArray: true
        }
      });
    }
  ]);
