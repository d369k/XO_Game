$(document).ready(function() {

    // added data-id to the td element
    $("td").each(function() {

        // get id from the element
        let id = $(this).text();
        // added data-id
        $(this).attr("data-id", id);

    });

    // Define the main game variables
    let current_player = "X";
    let pointer = "";
    let row = "";
    let player_text = "";
    let PlayerX_score = 0;
    let PlayerO_score = 0;

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

    // Define winner function
    function check_winner() {
        if (game_board[1] == game_board[2] && game_board[2] == game_board[3]) { // 1 2 3 (win)
            return true;
        } else if (game_board[4] && game_board[5] && game_board[5] == game_board[6]) { // 4 5 6 (win)
            return true;
        } else if (game_board[7] == game_board[8] && game_board[8] == game_board[9]) { // 7 8 9 (win)
            return true;
        } else if (game_board[1] == game_board[4] && game_board[4] == game_board[7]) { // 1 4 7 (win)
            return true;
        } else if (game_board[2] == game_board[5] && game_board[5] == game_board[8]) { // 2 5 8 (win)
            return true;
        } else if (game_board[3] == game_board[6] && game_board[6] == game_board[9]) { // 3 6 9 (win)
            return true;
        } else if (game_board[1] == game_board[5] && game_board[5] == game_board[9]) { // 1 5 9 (win)
            return true;
        } else if (game_board[3] == game_board[5] && game_board[5] == game_board[7]) { // 3 5 7 (win)
            return true;
        } else if (game_board[1] != '1' && game_board[2] != '2' && game_board[3] != '3' && game_board[4] != '4' && game_board[5] != '5' && game_board[6] != '6' && game_board[7] != '7' && game_board[8] != '8' && game_board[9] != '9') { // game did not win
            return -1;
        } else {
            return false;
        }
    }

    // play game function
    $("td").on("click", function() {

        // Define pointer
        pointer = current_player;

        // Define row number for game board array
        row = $(this).data("id");

        // Play click song
        click_board_song.play();

        // check row in array
        if (typeof(game_board[row]) == "number") {
            // set log box text
            $(".log").text("Player(" + pointer + ") select (" + row + ").");

            //set select td text
            $(this).text(pointer);

            //input pointer in the game board
            game_board[row] = pointer;

            // Define player and current player
            define_player();
            current_player = (current_player == "X") ? "O" : "X";

            // check winner
            let check_player_win = check_winner();
            if (check_player_win == true) {

                // play end game song
                end_game_song.play();

                // print winner player in log box
                $(".log").text("player(" + pointer + ") win.");
                
                // set score for player
                if(pointer == "X"){
                    PlayerX_score++;
                    $(".Xscore").text(PlayerX_score);
                }else{
                    PlayerO_score++;
                    $(".Oscore").text(PlayerO_score);
                }

                // reset board
                reset_board();
                // reset html board
                reset_html_board();

            } else if (check_player_win == -1) {

                // play end game song
                end_game_song.play();

                // print game did not win
                $(".log").text("This game did not win.");

                // reset board
                reset_board();
                // reset html board
                reset_html_board();

            }
        } else {

            // print this td selected
            $(".log").text("This is selected");

        }

    });

});