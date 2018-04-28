angular.
  module('app').
  component('flavors', {
    templateUrl: 'components/flavors/flavors.template.html',
    controller: [ 'Flavors',
      function FlavorsController(Flavors) {
        this.flavors = Flavors.query();
        this.orderProp = 'sabor';
      }
    ]
  });
