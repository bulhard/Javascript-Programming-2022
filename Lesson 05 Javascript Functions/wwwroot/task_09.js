var currentPlayer = 'X';
var board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
var gameEnd = false;

function playTurn(cellIndex, cell) {

    if (gameEnd) { return };

    placePlayerMark(cellIndex, cell);

    if (checkForWinner()) {
        document.getElementById("messageBoard").innerHTML = "Winner is " + currentPlayer;
        gameEnd = true;
    }
    else {
        currentPlayer = currentPlayer == 'X' ? 'O' : 'X';
        document.getElementById("messageBoard").innerHTML = "Next player is " + currentPlayer;
    }
}

function placePlayerMark(cellIndex, cell) {
    cell.innerHTML = currentPlayer;
    board[cellIndex] = currentPlayer;
}

function checkForWinner() {
    if (board[0] == board[1] && board[1] == board[2]
        || board[3] == board[4] && board[4] == board[5]
        || board[6] == board[7] && board[7] == board[8]
        || board[0] == board[3] && board[3] == board[6]
        || board[1] == board[4] && board[4] == board[7]
        || board[2] == board[5] && board[5] == board[8]
        || board[0] == board[4] && board[4] == board[8]
        || board[2] == board[4] && board[4] == board[6]
    ) {
        return true;
    }
    else {
        return false;
    }
}
