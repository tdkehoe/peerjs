app.controller("TicTacToeController", ["$scope", "$firebaseObject",
function($scope, $firebaseObject) {
  // set up Firebase
  var ref = new Firebase("https://tdk-tic-tac-toe.firebaseio.com/");
  var board = $firebaseObject(ref);
  board.$bindTo($scope, "board").then(function() {
    // initialize board counters
    $scope.board.row1x = 0;
    $scope.board.row2x = 0;
    $scope.board.row3x = 0;
    $scope.board.columnAx = 0;
    $scope.board.columnBx = 0;
    $scope.board.columnCx = 0;
    $scope.board.diagonal1x = 0;
    $scope.board.diagonal2x = 0;
    $scope.board.row1o = 0;
    $scope.board.row2o = 0;
    $scope.board.row3o = 0;
    $scope.board.columnAo = 0;
    $scope.board.columnBo = 0;
    $scope.board.columnCo = 0;
    $scope.board.diagonal1o = 0;
    $scope.board.diagonal2o = 0;
    $scope.board.counter = 0;
    $scope.board.cat = true;
    // initialize squares
    $scope.board.sq1a = '';
    $scope.board.sq1b = '';
    $scope.board.sq1c = '';
    $scope.board.sq2a = '';
    $scope.board.sq2b = '';
    $scope.board.sq2c = '';
    $scope.board.sq3a = '';
    $scope.board.sq3b = '';
    $scope.board.sq3c = '';
    $scope.board.winner = '';

    // test for winners
    var winner = function () {
      if ($scope.board.row1x === 3 ||
        $scope.board.row2x === 3 ||
        $scope.board.row3x === 3 ||
        $scope.board.columnAx === 3 ||
        $scope.board.columnBx === 3 ||
        $scope.board.columnCx === 3 ||
        $scope.board.diagonal1x === 3 ||
        $scope.board.diagonal2x === 3) {
          $scope.board.winner = "X wins!";
          $scope.board.cat = false;
      } else if ($scope.board.row1o === 3 ||
        $scope.board.row2o === 3 ||
        $scope.board.row3o === 3 ||
        $scope.board.columnAo === 3 ||
        $scope.board.columnBo === 3 ||
        $scope.board.columnCo === 3 ||
        $scope.board.diagonal1o === 3 ||
        $scope.board.diagonal2o === 3) {
          $scope.board.winner = "O wins!";
          $scope.board.cat = false;
      } else if ($scope.board.counter === 9 && $scope.board.cat === true) {
        $scope.board.winner = "Cat's game.";
      }
    };
    // listen for clicks
    $scope.sq1a = function() {
      if ($scope.board.counter % 2 === 0 && $scope.board.sq1a === '' && $scope.board.cat === true) { // if counter is even X plays
        $scope.board.sq1a = 'x';
        $scope.board.row1x = $scope.board.row1x + 1;
        $scope.board.columnAx = $scope.board.columnAx + 1;
        $scope.board.diagonal1x = $scope.board.diagonal1x + 1;
        $scope.board.counter = $scope.board.counter + 1;
        $scope.board.winner = "O's turn.";
      } else if ($scope.board.sq1a === '' && $scope.board.cat === true) { // if counter is odd then O plays
        $scope.board.sq1a = 'o';
        $scope.board.row1o = $scope.board.row1o + 1;
        $scope.board.columnAo = $scope.board.columnAo + 1;
        $scope.board.diagonal1o = $scope.board.diagonal1o + 1;
        $scope.board.counter = $scope.board.counter + 1;
        $scope.board.winner = "X's turn.";
      }
      winner();
    };

    $scope.sq1b = function() {
      if ($scope.board.counter % 2 === 0 && $scope.board.sq1b === '' && $scope.board.cat === true) { // if counter is even X plays
        $scope.board.sq1b = 'x';
        $scope.board.row1x = $scope.board.row1x + 1;
        $scope.board.columnBx = $scope.board.columnBx + 1;
        $scope.board.counter = $scope.board.counter + 1;
        $scope.board.winner = "O's turn.";
      } else if ($scope.board.sq1b === '' && $scope.board.cat === true) { // if counter is odd then O plays
        $scope.board.sq1b = 'o';
        $scope.board.row1o = $scope.board.row1o + 1;
        $scope.board.columnBo = $scope.board.columnBo + 1;
        $scope.board.counter = $scope.board.counter + 1;
        $scope.board.winner = "X's turn.";
      }
      winner();
    };

    $scope.sq1c = function() {
      if ($scope.board.counter % 2 === 0 && $scope.board.sq1c === '' && $scope.board.cat === true) { // if counter is even X plays
        $scope.board.sq1c = 'x';
        $scope.board.row1x = $scope.board.row1x + 1;
        $scope.board.columnCx = $scope.board.columnCx + 1;
        $scope.board.diagonal2x = $scope.board.diagonal2x + 1;
        $scope.board.counter = $scope.board.counter + 1;
        $scope.board.winner = "O's turn.";
      } else if ($scope.board.sq1c === '' && $scope.board.cat === true) { // if counter is odd then O plays
        $scope.board.sq1c = 'o';
        $scope.board.row1o = $scope.board.row1o + 1;
        $scope.board.columnCo = $scope.board.columnCo + 1;
        $scope.board.diagonal2o = $scope.board.diagonal2o + 1;
        $scope.board.counter = $scope.board.counter + 1;
        $scope.board.winner = "X's turn.";
      }
      winner();
    };

    $scope.sq2a = function() {
      if ($scope.board.counter % 2 === 0 && $scope.board.sq2a === '' && $scope.board.cat === true) { // if counter is even X plays
        $scope.board.sq2a = 'x';
        $scope.board.row2x = $scope.board.row2x + 1;
        $scope.board.columnAx = $scope.board.columnAx + 1;
        $scope.board.counter = $scope.board.counter + 1;
        $scope.board.winner = "O's turn.";
      } else if ($scope.board.sq2a === '' && $scope.board.cat === true) { // if counter is odd then O plays
        $scope.board.sq2a = 'o';
        $scope.board.row2o = $scope.board.row2o + 1;
        $scope.board.columnAo = $scope.board.columnAo + 1;
        $scope.board.counter = $scope.board.counter + 1;
        $scope.board.winner = "X's turn.";
      }
      winner();
    };

    $scope.sq2b = function() {
      if ($scope.board.counter % 2 === 0 && $scope.board.sq2b === '' && $scope.board.cat === true) { // if counter is even X plays
        $scope.board.sq2b = 'x';
        $scope.board.row2x = $scope.board.row2x + 1;
        $scope.board.columnBx = $scope.board.columnBx + 1;
        $scope.board.diagonal1x = $scope.board.diagonal1x + 1;
        $scope.board.diagonal2x = $scope.board.diagonal2x + 1;
        $scope.board.counter = $scope.board.counter + 1;
        $scope.board.winner = "O's turn.";
      } else if ($scope.board.sq2b === '' && $scope.board.cat === true) { // if counter is odd then O plays
        $scope.board.sq2b = 'o';
        $scope.board.row2o = $scope.board.row2o + 1;
        $scope.board.columnBo = $scope.board.columnBo + 1;
        $scope.board.diagonal1o = $scope.board.diagonal1o + 1;
        $scope.board.diagonal2o = $scope.board.diagonal2o + 1;
        $scope.board.counter = $scope.board.counter + 1;
        $scope.board.winner = "X's turn.";
      }
      winner();
    };

    $scope.sq2c = function() {
      if ($scope.board.counter % 2 === 0 && $scope.board.sq2c === '' && $scope.board.cat === true) { // if counter is even X plays
        $scope.board.sq2c = 'x';
        $scope.board.row2x = $scope.board.row2x + 1;
        $scope.board.columnCx = $scope.board.columnCx + 1;
        $scope.board.counter = $scope.board.counter + 1;
        $scope.board.winner = "O's turn.";
      } else if ($scope.board.sq2c === '' && $scope.board.cat === true) { // if counter is odd then O plays
        $scope.board.sq2c = 'o';
        $scope.board.row2o = $scope.board.row2o + 1;
        $scope.board.columnCo = $scope.board.columnCo + 1;
        $scope.board.counter = $scope.board.counter + 1;
        $scope.board.winner = "X's turn.";
      }
      winner();
    };

    $scope.sq3a = function() {
      if ($scope.board.counter % 2 === 0 && $scope.board.sq3a === '' && $scope.board.cat === true) { // if counter is even X plays
        $scope.board.sq3a = 'x';
        $scope.board.row3x = $scope.board.row3x + 1;
        $scope.board.columnAx = $scope.board.columnAx + 1;
        $scope.board.diagonal2x = $scope.board.diagonal2x + 1;
        $scope.board.counter = $scope.board.counter + 1;
        $scope.board.winner = "O's turn.";
      } else if ($scope.board.sq3a === '' && $scope.board.cat === true) { // if counter is odd then O plays
        $scope.board.sq3a = 'o';
        $scope.board.row3o = $scope.board.row3o + 1;
        $scope.board.columnAo = $scope.board.columnAo + 1;
        $scope.board.diagonal2o = $scope.board.diagonal2o + 1;
        $scope.board.counter = $scope.board.counter + 1;
        $scope.board.winner = "X's turn.";
      }
      winner();
    };

    $scope.sq3b = function() {
      if ($scope.board.counter % 2 === 0 && $scope.board.sq3b === '' && $scope.board.cat === true) { // if counter is even X plays
        $scope.board.sq3b = 'x';
        $scope.board.row3x = $scope.board.row3x + 1;
        $scope.board.columnBx = $scope.board.columnBx + 1;
        $scope.board.counter = $scope.board.counter + 1;
        $scope.board.winner = "O's turn.";
      } else if ($scope.board.sq3b === '' && $scope.board.cat === true) { // if counter is odd then O plays
        $scope.board.sq3b = 'o';
        $scope.board.row3o = $scope.board.row3o + 1;
        $scope.board.columnBo = $scope.board.columnBo + 1;
        $scope.board.counter = $scope.board.counter + 1;
        $scope.board.winner = "X's turn.";
      }
      winner();
    };

    $scope.sq3c = function() {
      if ($scope.board.counter % 2 === 0 && $scope.board.sq3c === '' && $scope.board.cat === true) { // if counter is even X plays
        $scope.board.sq3c = 'x';
        $scope.board.row3x = $scope.board.row3x + 1;
        $scope.board.columnCx = $scope.board.columnCx + 1;
        $scope.board.diagonal1x = $scope.board.diagonal1x + 1;
        $scope.board.counter = $scope.board.counter + 1;
        $scope.board.winner = "O's turn.";
      } else if ($scope.board.sq3c === '' && $scope.board.cat === true) { // if counter is odd then O plays
        $scope.board.sq3c = 'o';
        $scope.board.row3o = $scope.board.row3o + 1;
        $scope.board.columnCo = $scope.board.columnCo + 1;
        $scope.board.diagonal1o = $scope.board.diagonal1o + 1;
        $scope.board.counter = $scope.board.counter + 1;
        $scope.board.winner = "X's turn.";
      }
      winner();
    };

  });
}]);
