/*global $ */
// $(document).ready(function(){

  $('.box').click(function () {
    var index = parseInt(this.id);
    console.log(index);
    // you can change the value in your grid based upon the data too
    // grid[index] = $(this).text();
    updateGrid($(this), player);

    playTurn(index);
  });

  function updateGrid (cell, player) {
      // $('#msg').empty();
    if (cell.is(':empty')) {
      if (player === 1) {
      // $('#msg').text("Player 2 move");
        cell.append('X');
  //     $('#player1').hide();
  // $('#player2').show();
      } else if (player === 2) {
      // $('#msg').append("Player 1 move")
      // $('#player2').hide();
      // $('#player1').show();
        cell.append('O');
      }
    // cell.append(player);
    } else {
      return false;
    }
  }
  $('#reset').click(function () {
    restart();
  });

  var grid = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  var player = 1;

  function playTurn (index) {
    if (grid[index] || isGameOver()) {
      return false;
    } else {
      grid[index] = player;

      if (whoWon() === 2 || whoWon() === 1) {
      // alert("You've won");
      // restart();
      } else if (whoWon() === 3) {
        // alert("It's a draw");
      // restart();
      } else if (player === 1) {
        player = 2;
      } else {
        player = 1;
      }
      return true;
    }
  }

  function isGameOver () {
    if (whoWon()) return true;
    return false;
  }
  function whoWon () {
    // top
    if (grid[0] === 1 && grid[1] === 1 && grid[2] === 1) return 1;
    if (grid[0] === 2 && grid[1] === 2 && grid[2] === 2) return 2;
    // middle
    if (grid[3] === 1 && grid[4] === 1 && grid[5] === 1) return 1;
    if (grid[3] === 2 && grid[4] === 2 && grid[5] === 2) return 2;
    // bottom
    if (grid[6] === 1 && grid[7] === 1 && grid[8] === 1) return 1;
    if (grid[6] === 2 && grid[7] === 2 && grid[8] === 2) return 2;
    // left
    if (grid[0] === 1 && grid[3] === 1 && grid[6] === 1) return 1;
    if (grid[0] === 2 && grid[3] === 2 && grid[6] === 2) return 2;
    // middle
    if (grid[1] === 1 && grid[4] === 1 && grid[7] === 1) return 1;
    if (grid[1] === 2 && grid[4] === 2 && grid[7] === 2) return 2;
    // right
    if (grid[2] === 1 && grid[5] === 1 && grid[8] === 1) return 1;
    if (grid[2] === 2 && grid[5] === 2 && grid[8] === 2) return 2;
    // horizontal 1
    if (grid[0] === 1 && grid[4] === 1 && grid[8] === 1) return 1;
    if (grid[0] === 2 && grid[4] === 2 && grid[8] === 2) return 2;
    // horizontal 2
    if (grid[2] === 1 && grid[4] === 1 && grid[6] === 1) return 1;
    if (grid[2] === 2 && grid[4] === 2 && grid[6] === 2) return 2;
    if ((grid[0] === 1 || grid[0] === 2) && (grid[1] === 1 || grid[1] === 2) && (grid[2] === 1 || grid[2] === 2) && (grid[3] === 1 || grid[3] === 2) && (grid[4] === 1 || grid[4] === 2) && (grid[5] === 1 || grid[5] === 2) && (grid[6] === 1 || grid[6] === 2) && (grid[7] === 1 || grid[7] === 2) && (grid[8] === 1 || grid[8] === 2)) {
      return 3;
    }
    return 0;
  }
  function restart () {
    // alert("Game Resetting");
    grid = [null, null, null, null, null, null, null, null, null];
    player = 1;
    $('.box').empty();
    $('#player1').hide();
    $('#player2').hide();
    $('#msg').text('Board Restart');
  }

// playTurn(index)
// It should take one parameter which is a zero-based index to your grid, indicating where the current player's token should be played. It should return a boolean value to indicate whether the move was allowed or not - true if it was successful, false otherwise e.g. if the square is already taken or the game is over.
//
// isGameOver()
// It should return a true or false if the game is over.
//
// whoWon()
// It should return 0 if the game is not yet finished. Else it should return either 1 or 2 depending on which player one. It should return 3 if the game is a draw.
//
// restart()
// It should restart the game so it can be played again.
// It is assumed that the turns of the player will be automatically changed after an allowed move.
// The application will console log all the passed or failed test.
