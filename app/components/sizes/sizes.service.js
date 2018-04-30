angular.
  module('app').
  factory('Sizes', ['$resource',
    function($resource) {
      return $resource('http://177.69.85.145:82/api/tamanhos', {}, {
        query: {
          method: 'GET',
          isArray: true
        }
      });
    }
  ]);
