angular.
  module('app').
  component('flavors', {
    templateUrl: 'components/flavors/flavors.template.html',
    controller: [ 'Flavors', '$window',
      function FlavorsController(Flavors, $window) {
        var self = this;
        this.flavors = Flavors.query();
        this.orderProp = 'sabor';

        self.storeFlavorId = function storeFlavorId(id){
          $window.localStorage.clear();
          $window.localStorage['flavorId'] = id;
        }

        self.clearStorage = function clearStorage(){
          $window.localStorage.clear();
        }
      }
    ]
  });
