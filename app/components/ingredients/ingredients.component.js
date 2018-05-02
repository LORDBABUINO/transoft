angular.
  module('app').
  component('ingredients', {
    templateUrl: 'components/ingredients/ingredients.template.html',
    controller: [ 'Ingredients', '$location', '$window',
      function IngredientsController(Ingredients, $location, $window) {
        var self = this
        this.ingredients = Ingredients.query();
        this.ids = [];
        this.orderProp = 'ingrediente';

        self.finish = function finish(){
          $window.localStorage['ingredientIds'] = this.ids;
          $location.path('/bordas');
        }
      }
    ]
  });
