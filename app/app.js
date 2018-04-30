'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('app', [
  'ngRoute',
  'ngResource'
])
app.
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('');

  $routeProvider.
    when('/sabores', {
      template: '<flavors></flavors>'
    }).
    when('/ingredientes', {
      template: '<ingredients></ingredients>'
    }).
    when('/bordas', {
      template: '<edges></edges>'
    }).
    when('/tamanhos', {
      template: '<sizes></sizes>'
    }).
    otherwise('/sabores');

}]);
