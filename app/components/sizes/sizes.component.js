angular.
  module('app').
  component('sizes', {
    templateUrl: 'components/sizes/sizes.template.html',
    controller: [ 'Sizes',
      function SizesController(Sizes) {
        this.sizes = Sizes.query();
      }
    ]
  });
