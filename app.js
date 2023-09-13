console.log("Let's Play Dice Game!");

let players ={
    player1: {name: a , score:0},
    player2: {name: b , score:0},
    player3: {name: c , score:0},
    player4: {name: d , score:0}
}

function rollDie() {
    return Math.floor(Math.random() * 6) + 1; // don't knkow  why it is working
  }
  
function playDice(numround) {
    
a = prompt("Enter your name: ");
b = prompt("Enter your name: ");
c = prompt("Enter your name: ");
d = prompt("Enter your name: ");

    for (let i = 0; i < numround; i++) {
        let player1Roll = rollDie()
        let player2Roll = rollDie()
        let player3Roll = rollDie()
        let player4Roll = rollDie()
    
    while(player1Roll === player2Roll || player1Roll === player3Roll || player1Roll === player4Roll || player2Roll === player3Roll || player2Roll === player4Roll || player3Roll ===player4Roll){
        player1Roll = rollDie()
        player2Roll = rollDie()
    }
    if(player1Roll > player2Roll) {
        players.player1.score += 1
        // console.log(players.player1.score)
    }
    else{
        players.player2.score += 1
        // console.log(players.player2.score)
    }
    }
    if (players.player1.score > players.player2.score) {
        console.log(`${players.player1.name} is the winner!`)
        
    }else if(players.player2.score > players.player1.score) {
        console.log(`${players.player2.name} is the winner!`)
    }
    else{
        console.log("It's a tie!")
    }
    
}
playDice(1);    

