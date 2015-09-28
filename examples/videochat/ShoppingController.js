app.controller("ShoppingController", ["$scope", "$firebaseObject", function($scope, $firebaseObject) {
  // set up Firebase
  var ref = new Firebase("https://tdk-tic-tac-toe.firebaseio.com/");
  var board = $firebaseObject(ref);
  board.$bindTo($scope, "board").then(function() {

  $scope.board.showShopping = false;
  $scope.board.showJohnWaters = true;

  })

}]);
