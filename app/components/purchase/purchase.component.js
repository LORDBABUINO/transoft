angular.
  module('app').
  component('purchase', {
    templateUrl: 'components/purchase/purchase.template.html',
    controller: [ 'Purchase', '$window', '$location', '$q',
      function PurchaseController(Purchase, $window, $location, $q) {
        var self = this;

        self.time = Math.floor(Math.random()*40+20);

        self.getFlavor = function getFlavor(){
          if ($window.localStorage['flavorId']) {
            return Purchase.Flavor($window.localStorage['flavorId'])
              .getData();
          }else {
            return undefined;
          }
        }

        self.getIngredient = function getIngredient(){
          var ingredientArray = $window.localStorage['ingredientIds'].split(',');
          ingredientArray.forEach(function (item, index, arr){
            arr[index] = Purchase.Ingredient(item).getData().$promise;
          });
          return $q.all(ingredientArray).then(function(results){
            return results;
          });
        }

        self.getEdge = function getEdge(){
          return Purchase.Edge($window.localStorage['edgeId'])
            .getData();
        }

        self.getSize = function getSize(){
          return Purchase.Size($window.localStorage['edgeId'])
            .getData();
        }

        self.finish = function finish(){
          $window.localStorage.clear();
          alert('Pedido Finalizado');
          $location.path('/');
        }

        self.getIngredientPrices = function getIngredientPrices(array){
          var precos = [];
          array.forEach(function(item){
            precos.push(item.preco)
          });
          return precos;
        }

        self.calculatePurchase = function calculatePurchase(
          ingredientArray, edge, size, discount
        ){
          return (eval(ingredientArray.join('+')) *
            size.peso + edge.valor + 10)*discount;
        }

        self.time > 40? self.discount = .9 :
          self.discount = 1;

        self.promises = [];

        if(self.getFlavor()){
          self.promises.push(
            self.getFlavor().$promise.then(function(result){
              self.flavor = result
            }).then(function(){
              self.ingredientArray = self.flavor.ingredientes;
              self.ingredientPrices = self
                .getIngredientPrices(self.ingredientArray);
            })
          );
        } else {
          self.promises.push(
            self.getIngredient().then(function(result){
              self.ingredientArray = result;
            }).then(function(){
              self.ingredientPrices = self
                .getIngredientPrices(self.ingredientArray);
            })
          );
        }

        self.promises.push(
          self.getEdge().$promise.then(function(result){
            self.edge = result;
          })
        );

        self.promises.push(
          self.getSize().$promise.then(function(result){
            self.size = result;
          })
        );

        $q.all(self.promises).then(function(){
          self.total = self.calculatePurchase(
            self.ingredientPrices,
            self.edge,
            self.size,
            self.discount
          );
        });
      }
    ]
  });
