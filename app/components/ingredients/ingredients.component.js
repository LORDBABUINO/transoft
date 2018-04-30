angular.
  module('app').
  component('ingredients', {
    templateUrl: 'components/ingredients/ingredients.template.html',
    controller: [ 'Ingredients', '$location',
      function IngredientsController(Ingredients, $location) {
        var self = this
        this.ingredients = Ingredients.query();
        this.orderProp = 'ingrediente';

        self.path = function path(path){
          $location.path(path);
        }
      }
    ]
  });
