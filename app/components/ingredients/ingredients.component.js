angular.
  module('app').
  component('ingredients', {
    templateUrl: 'components/ingredients/ingredients.template.html',
    controller: [ 'Ingredients',
      function IngredientsController(Ingredients) {
        this.ingredients = Ingredients.query();
        this.orderProp = 'ingrediente';
      }
    ]
  });
