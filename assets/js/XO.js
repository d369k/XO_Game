$(document).ready(function() {

    // added data-id to the td element
    $("td").each(function() {

        // get id from the element
        let id = $(this).text();
        // added data-id
        $(this).data("data-id", id);

    });

    // Define the main game variables
    let current_player = "X";
    let pointer = "";
    let row = "";
    let player_text = "";

    // Game board array
    let game_board = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    // Add game audio
    let click_board_song = new Audio();
    click_board_song.src = "assets/audio/click.mp3";
    let end_game_song = new Audio();
    end_game_song.src = "assets/audio/endgame.mp3";

    // html board reset function
    function reset_html_board() {
        $("td").each(function() {
            $(this).text($(this).data("id"));
        });
        $(".textC").text("Player : (X)");
    }

    // reset board array function
    function reset_board() {
        game_board = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        current_player = "X";
    }

    // Define player
    function define_player() {
        player_text = (current_player == "X") ? "Player : (O)" : "Player : (X)";
        $(".textC").text(player_text);
    }
    

});