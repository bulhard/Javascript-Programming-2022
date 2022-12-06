var numberOfPlayers = 0;
var fieldSize = 0;

function StartGame() {

    numberOfPlayers = Number($("#players").val());
    fieldSize = Number($("#field_size").val());

    $("#mainMenu").hide();
    $("#gameField").show();

    if (fieldSize == 3) {
        $(".row4").hide();
    }

}