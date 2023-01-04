function initialize() {
    t1 = document.getElementById("t1");
    t2 = document.getElementById("t2");
    t3 = document.getElementById("t3");
    t4 = document.getElementById("t4");
    t5 = document.getElementById("t5");
    t6 = document.getElementById("t6");
    t7 = document.getElementById("t7");
    t8 = document.getElementById("t8");
    t9 = document.getElementById("t9");
    counter = 0;
    tArray = [t1, t2, t3, t4, t5, t6, t7, t8, t9];
    for(var i = 0; i < tArray.length; i++) {
        tArray[i].occupied = false;
        console.log(tArray[i].occupied);
    }
   display = document.getElementById("textDisplay");
    document.getElementById("playerOneScore");
    document.getElementById("playerTwoScore");
};


function reset(){
    for(var i = 0; i < tArray.length; i++) {
        tArray[i].occupied = false;
        tArray[i].innerHTML = "";
    };
    display.innerHTML = "";
    counter = 0;
};

function resetScore(){
    playerOneScore.innerHTML = "0";
    playerTwoScore.innerHTML = "0";
};

function change(td){
    if(!td.occupied && counter < 9) {
        if(counter % 2 == 0) {
            td.innerHTML = "x";
        }
        else {
            td.innerHTML = "o";
        }
        td.occupied = true; 
        counter++;
        if(counter == 9) {
            console.log("Draw!");
            display.innerHTML = "Draw!";
        };
    } else if(counter > 9) {
        console.log('bruh');
       }   else {
        console.log("Occupied");
    };
    win();
};

let player1 = document.getElementById("playerOne");
let player2 = document.getElementById("playerTwo");
function nameCheck(){
    if(player1 == "" || player2 == ""){
        console.log("choose a name");
        NameChoose.innerHTML = "Choose a name!";
    }
};

function win(){
    //top row wincon
    if(t1.innerHTML != "" && t1.innerHTML == t2.innerHTML && t1.innerHTML == t3.innerHTML) {
        if(t1.innerHTML == "x" && t2.innerHTML == "x" && t3.innerHTML == "x"){
            console.log("Player 1 won!");
            counter = 100000;
            display.innerHTML = "Player 1 won!";
            playerOneScore.innerHTML = score1++
        } else{
            display.innerHTML =  "Player 2 won!"
            playerTwoScore.innerHTML = score2++
        }
    } else if(t4.innerHTML != "" && t4.innerHTML == t5.innerHTML && t4.innerHTML == t6.innerHTML) {
        if(t4.innerHTML == "x" && t5.innerHTML == "x" && t5.innerHTML == "x"){
            console.log("Player 1 won!");
            counter = 100000;
            display.innerHTML = "Player 1 won!";
            playerOneScore.innerHTML = score1++
        } else{
            display.innerHTML =  "Player 2 won!"
            playerTwoScore.innerHTML = score2++
        }
    } else if(t7.innerHTML != "" && t7.innerHTML == t8.innerHTML && t7.innerHTML == t9.innerHTML) {
        if(t7.innerHTML == "x" && t8.innerHTML == "x" && t9.innerHTML == "x"){
            console.log("Player 1 won!");
            counter = 100000;
            display.innerHTML = "Player 1 won!";
            playerOneScore.innerHTML = score1++
        } else{
            display.innerHTML =  "Player 2 won!"
            playerTwoScore.innerHTML = score2++
        }
    }

    if(t1.innerHTML != "" && t1.innerHTML == t4.innerHTML && t1.innerHTML == t7.innerHTML) {
        if(t1.innerHTML == "x" && t4.innerHTML == "x" && t7.innerHTML == "x"){
            console.log("Player 1 won!");
            counter = 100000;
            display.innerHTML = "Player 1 won!";
            playerOneScore.innerHTML = score1++
        } else{
            display.innerHTML =  "Player 2 won!"
            playerTwoScore.innerHTML = score2++
        }
    } else if(t2.innerHTML != "" && t2.innerHTML == t5.innerHTML && t2.innerHTML == t8.innerHTML) {
        if(t2.innerHTML == "x" && t5.innerHTML == "x" && t8.innerHTML == "x"){
            console.log("Player 1 won!");
            counter = 100000;
            display.innerHTML = "Player 1 won!";
            score1++
        } else{
            display.innerHTML =  "Player 2 won!"
            score2++
        }
    } else if(t3.innerHTML != "" && t3.innerHTML == t6.innerHTML && t3.innerHTML == t9.innerHTML) {
        if(t3.innerHTML == "x" && t6.innerHTML == "x" && t9.innerHTML == "x"){
            console.log("Player 1 won!");
            counter = 100000;
            display.innerHTML = "Player 1 won!";
            playerOneScore.innerHTML = score1++
        } else{
            display.innerHTML =  "Player 2 won!"
            playerTwoScore.innerHTML = score2++
    }
}
    if(t1.innerHTML != "" && t1.innerHTML == t5.innerHTML && t1.innerHTML == t9.innerHTML) {
        if(t1.innerHTML == "x" && t5.innerHTML == "x" && t9.innerHTML == "x"){
            console.log("Player 1 won!");
            counter = 100000;
            display.innerHTML = "Player 1 won!";
            playerOneScore.innerHTML = score1++
        } else{
            display.innerHTML =  "Player 2 won!"
            playerTwoScore.innerHTML = score2++
    }
    } else if(t3.innerHTML != "" && t3.innerHTML == t5.innerHTML && t3.innerHTML == t7.innerHTML) {
        if(t3.innerHTML == "x" && t5.innerHTML == "x" && t7.innerHTML == "x"){
            console.log("Player 1 won!");
            counter = 100000;
            display.innerHTML = "Player 1 won!";
            playerOneScore.innerHTML = score1++
        } else{
            display.innerHTML =  "Player 2 won!"
            playerTwoScore.innerHTML = score2++
    }
    }

};

