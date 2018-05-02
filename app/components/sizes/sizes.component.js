angular.
  module('app').
  component('sizes', {
    templateUrl: 'components/sizes/sizes.template.html',
    controller: [ 'Sizes', '$window',
      function SizesController(Sizes, $window) {
        var self = this;
        this.sizes = Sizes.query();

        self.storeSizeId = function storeSizeId(id){
          $window.localStorage['sizeId'] = id;
        }
      }
    ]
  });
