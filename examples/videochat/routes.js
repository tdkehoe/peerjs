app.config(function($routeProvider) {

  $routeProvider
  .when('/', { // INDEX
    templateUrl: 'tic-tac-toe.html',
    controller: 'TicTacToeController'
  })
  .otherwise({ redirectTo: '/' });
});
