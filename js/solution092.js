//solution092
//Write a script that will check to see if the player has achieved at least 100 points in his class. If so, he enters the qualifying stage.
//In that case, we return, "Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up.".
//Otherwise return, False/false (according to the language in use).

const playerRankUp = points => points >= 100 ? 'Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up.' : false

console.log(playerRankUp(76))//false