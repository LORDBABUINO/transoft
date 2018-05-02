angular.
  module('app').
  factory('Purchase', BookService);

BookService.$inject = ['$resource'];
/* @ngInject */
function BookService($resource) {
  this.Flavor = function Flavor (id){
    return $resource(
      'http://177.69.85.145:82/api/sabor/:id',
      {id: id}, {
        getData: {
          method: 'GET',
          isArray: false
        }
      }
    );
  }
  this.Ingredient = function Ingredient (id){
    return $resource(
      'http://177.69.85.145:82/api/ingrediente/:id',
      {id: id}, {
        getData: {
          method: 'GET',
          isArray: false
        }
      }
    );
  }
  this.Edge = function Edge (id){
    return $resource(
      'http://177.69.85.145:82/api/borda/:id',
      {id: id}, {
        getData: {
          method: 'GET',
          isArray: false
        }
      }
    );
  }
  this.Size = function Size (id){
    return $resource(
      'http://177.69.85.145:82/api/tamanho/:id',
      {id: id}, {
        getData: {
          method: 'GET',
          isArray: false
        }
      }
    );
  }
  return {
    Flavor: this.Flavor,
    Ingredient: this.Ingredient,
    Edge: this.Edge,
    Size: this.Size
  }
}
