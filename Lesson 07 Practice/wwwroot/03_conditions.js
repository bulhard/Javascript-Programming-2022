function GetBigger(number1, number2) {
    if (number1 > number2) {
        return number1;
    }
    return number2;
}

function BiggerOf2() {
    var a = Number(prompt("Enter A", ""));
    var b = Number(prompt("Enter B", ""));

    var bigger = GetBigger(a, b);

    alert("Bigger number is " + bigger);
}

function BiggerOf5() {
    var max = Number(prompt("Enter number 1", ""));

    for (var i = 2; i <= 5; i++) {
        var next = Number(prompt("Enter number " + i, ""));

        max = GetBigger(max, next);
    }

    alert("Bigger number is " + max);
}

function FizzBuzz() {

    for (var i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(i + " FizzBuzz");
        }
        else if (i % 3 === 0) {
            console.log(i + " Fizz");
        }
        else if (i % 5 === 0) {
            console.log(i + " Buzz");
        }
        else {
            console.log(i);
        }
    }

}

let players = []
players[0] = { name: "John", score: 0 }
players[1] = { name: "Maria", score: 0 }

let currentPlayer = 0;
let maxPlayers = 4;

function GetNextPlayer() {
    var nextPlayer = currentPlayer + 1;
    if (nextPlayer > maxPlayers - 1) {
        nextPlayer = 1;
    }
    return nextPlayer;
}